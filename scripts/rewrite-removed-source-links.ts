/** Rewrite links to removed product files as immutable links to the recorded upstream source. */

import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, relative, resolve, sep } from 'node:path'
import type { Nodes } from 'mdast'
import { parseMarkdown, visitMarkdown } from './markdown.ts'
import { isArchivedAgentNotePath, uniqueRepoFiles } from './repo-files.ts'

const root = resolve(import.meta.dirname, '..')
const sourceCommit = '47f943859bef60e4160492346772ded9b24f765a'
const upstream = 'https://github.com/deepseek-ai/deepseek-harness'
const reportPath = process.argv[2] ?? 'research/r1-source-link-rewrite.json'
const patterns = [
  'README.md',
  'README.zh.md',
  '.agents/notes/**/*.md',
  'docs/**/*.md',
  'research/README.md',
  'AGENTS.md',
  '.agents/skills/**/*.md',
]

function isExternal(url: string): boolean {
  return url.startsWith('//') || url.startsWith('/') || /^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(url)
}

function decodedPath(url: string): string {
  const raw = url.replace(/[#?].*$/, '')
  try {
    return decodeURIComponent(raw)
  } catch {
    return raw
  }
}

const sourceFiles = new Set(execFileSync('git', ['ls-tree', '-r', '--name-only', sourceCommit], {
  cwd: root,
  encoding: 'utf8',
}).trim().split('\n'))
const sourceDirectories = new Set<string>()
for (const file of sourceFiles) {
  const parts = file.split('/')
  for (let index = 1; index < parts.length; index += 1) {
    sourceDirectories.add(parts.slice(0, index).join('/'))
  }
}

let rewrittenLinks = 0
let changedMarkdownFiles = 0
const unresolved: string[] = []

for (const file of uniqueRepoFiles(root, patterns, isArchivedAgentNotePath)) {
  const source = readFileSync(file.abs, 'utf8')
  const replacements: Array<{ end: number; start: number; value: string }> = []
  visitMarkdown(parseMarkdown(source), (node: Nodes): void => {
    if ((node.type !== 'link' && node.type !== 'image' && node.type !== 'definition') || !('url' in node)) return
    if (isExternal(node.url) || node.position?.start.offset === undefined || node.position.end.offset === undefined) return
    const targetPath = decodedPath(node.url)
    if (targetPath === '') return
    const target = resolve(dirname(file.abs), targetPath)
    if (existsSync(target)) return
    const repoPath = relative(root, target).split(sep).join('/')
    if (repoPath.startsWith('../')) {
      unresolved.push(`${relative(root, file.abs)}: ${node.url}`)
      return
    }
    const kind = sourceFiles.has(repoPath) ? 'blob' : sourceDirectories.has(repoPath) ? 'tree' : null
    if (kind === null) {
      unresolved.push(`${relative(root, file.abs)}: ${node.url}`)
      return
    }
    const fragmentStart = node.url.search(/[#?]/)
    const suffix = fragmentStart === -1 ? '' : node.url.slice(fragmentStart)
    const value = `${upstream}/${kind}/${sourceCommit}/${repoPath}${suffix}`
    const regionStart = node.position.start.offset
    const region = source.slice(regionStart, node.position.end.offset)
    // A link label may itself display the target URL; the destination is the final occurrence.
    const localOffset = region.lastIndexOf(node.url)
    if (localOffset === -1) {
      unresolved.push(`${relative(root, file.abs)}: ${node.url}`)
      return
    }
    replacements.push({
      start: regionStart + localOffset,
      end: regionStart + localOffset + node.url.length,
      value,
    })
  })
  if (replacements.length === 0) continue
  let updated = source
  for (const replacement of replacements.toSorted((left, right) => right.start - left.start)) {
    updated = `${updated.slice(0, replacement.start)}${replacement.value}${updated.slice(replacement.end)}`
  }
  writeFileSync(file.abs, updated)
  rewrittenLinks += replacements.length
  changedMarkdownFiles += 1
}

writeFileSync(resolve(root, reportPath), `${JSON.stringify({
  schemaVersion: 1,
  sourceCommit,
  changedMarkdownFiles,
  rewrittenLinks,
  unresolvedLinks: unresolved.length,
  verification: 'pnpm run verify-md-links',
}, null, 2)}\n`)

if (unresolved.length > 0) {
  console.error(`rewrite-removed-source-links: ${unresolved.length} unresolved link(s):`)
  for (const item of unresolved) console.error(`  ${item}`)
  process.exit(1)
}
console.log(`rewrite-removed-source-links: rewrote ${rewrittenLinks} link(s) in ${changedMarkdownFiles} file(s).`)
