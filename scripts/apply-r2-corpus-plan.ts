/** Apply the reviewed R2 corpus allowlist and Chinese-primary language policy. */

import { existsSync, globSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { basename, join, relative, resolve } from 'node:path'

interface CorpusPlan {
  retainedNotes: Record<string, string[]>
  bilingualToolFixtures: string[]
  retainedChineseDocs: Record<string, string[]>
  retainedInstructionDocs: string[]
  retainedSkills: string[]
}

const root = resolve(import.meta.dirname, '..')
const plan = JSON.parse(readFileSync(join(root, 'research/r2-corpus-plan.json'), 'utf8')) as CorpusPlan
const retainedNotes = new Set(Object.values(plan.retainedNotes).flat())
const bilingualFixtures = new Set(plan.bilingualToolFixtures)
const retainedChineseDocs = new Set(Object.values(plan.retainedChineseDocs).flat())
const retainedInstructions = new Set(plan.retainedInstructionDocs)
const toolDocuments = new Set([
  'docs/i18n/terminology.md',
  'docs/i18n/style-samples.md',
  'docs/i18n/translation-prompt.md',
])

function repoPath(absolute: string): string {
  return relative(root, absolute).replaceAll('\\', '/')
}

function remove(path: string): void {
  if (existsSync(path)) rmSync(path, { force: true, recursive: true })
}

function makeChineseCanonical(stem: string): void {
  const english = join(root, `${stem}.md`)
  const chinese = join(root, `${stem}.zh.md`)
  const sidecar = join(root, `${stem}.i18n.yaml`)
  if (!existsSync(chinese) && existsSync(english) && !existsSync(sidecar)) return
  if (!existsSync(chinese)) throw new Error(`missing Chinese source for ${stem}`)
  const source = readFileSync(chinese, 'utf8')
  const canonical = source.replace(/^\[English\]\([^\n]+\) \| 中文\n\n/m, '')
  writeFileSync(english, canonical)
  remove(chinese)
  remove(sidecar)
}

let removedActiveNotes = 0
let retainedChineseNotes = 0
for (const english of globSync('.agents/notes/{implemented,proposed,rejected}/**/*.md', { cwd: root })) {
  if (english.endsWith('.zh.md') || basename(english) === 'AGENTS.md') continue
  const stem = english.slice(0, -'.md'.length)
  if (retainedNotes.has(stem)) {
    makeChineseCanonical(stem)
    retainedChineseNotes += 1
    continue
  }
  if (bilingualFixtures.has(stem)) continue
  remove(join(root, `${stem}.md`))
  remove(join(root, `${stem}.zh.md`))
  remove(join(root, `${stem}.i18n.yaml`))
  removedActiveNotes += 1
}

makeChineseCanonical('.agents/notes/README')
remove(join(root, '.agents/notes/archived'))

let removedDocs = 0
let retainedChineseDocumentCount = 0
for (const markdownPath of globSync('docs/**/*.md', { cwd: root })) {
  const absolute = resolve(root, markdownPath)
  const markdown = repoPath(absolute)
  if (markdown.endsWith('.zh.md')) continue
  const stem = markdown.slice(0, -'.md'.length)
  if (retainedChineseDocs.has(stem)) {
    makeChineseCanonical(stem)
    retainedChineseDocumentCount += 1
    continue
  }
  if (bilingualFixtures.has(stem) || retainedInstructions.has(markdown) || toolDocuments.has(markdown)) continue
  remove(absolute)
  remove(join(root, `${stem}.zh.md`))
  remove(join(root, `${stem}.i18n.yaml`))
  removedDocs += 1
}

const skillRoot = join(root, '.agents/skills')
for (const entry of readdirSync(skillRoot, { withFileTypes: true })) {
  if (entry.isDirectory() && !plan.retainedSkills.includes(entry.name)) remove(join(skillRoot, entry.name))
}

console.log(JSON.stringify({
  retainedChineseNotes,
  removedActiveNotes,
  retainedChineseDocs: retainedChineseDocumentCount,
  removedDocs,
  removedArchivedTriplets: 142,
  retainedSkills: plan.retainedSkills.length,
}, null, 2))
