/** Verify that every active Note, document, Skill, and script has one R2 research category. */

import { existsSync, globSync, readFileSync } from 'node:fs'
import { basename, resolve } from 'node:path'

interface CorpusManifest {
  notes: Record<string, string[]>
  documents: Record<string, string[]>
  skills: Record<string, string[]>
  scripts: Record<string, string[]>
  executionLanguage: string[]
}

const root = resolve(import.meta.dirname, '..')
const manifest = JSON.parse(readFileSync(resolve(root, 'research/r2-corpus-manifest.json'), 'utf8')) as CorpusManifest

function expand(groups: Record<string, string[]>): { duplicates: string[]; paths: Set<string> } {
  const seen = new Map<string, string>()
  const duplicates: string[] = []
  for (const [category, patterns] of Object.entries(groups)) {
    for (const pattern of patterns) {
      const matches = globSync(pattern, { cwd: root }).map(path => path.replaceAll('\\', '/'))
      if (matches.length === 0) throw new Error(`${category}: pattern matches nothing: ${pattern}`)
      for (const path of matches) {
        const prior = seen.get(path)
        if (prior !== undefined && prior !== category) duplicates.push(`${path}: ${prior}, ${category}`)
        seen.set(path, category)
      }
    }
  }
  return { duplicates, paths: new Set(seen.keys()) }
}

function compare(label: string, actual: Set<string>, expected: Set<string>): string[] {
  const errors: string[] = []
  for (const path of actual) if (!expected.has(path)) errors.push(`${label}: unclassified ${path}`)
  for (const path of expected) if (!actual.has(path)) errors.push(`${label}: classified path missing ${path}`)
  return errors
}

const activeNotes = new Set(globSync('.agents/notes/{implemented,proposed,rejected}/**/*.md', { cwd: root })
  .filter(path => !path.endsWith('.zh.md') && basename(path) !== 'AGENTS.md' && basename(path) !== 'CLAUDE.md'))
const expectedNotes = expand(manifest.notes)

const documents = new Set(globSync([
  '*.md',
  '.github/**/*.md',
  '.agents/notes/*.md',
  '.agents/notes/implemented/AGENTS.md',
  'docs/**/*.md',
  'research/**/*.md',
  'scripts/**/*.md',
], { cwd: root }).map(path => path.replaceAll('\\', '/')))
const classifiedDocuments = expand(manifest.documents)

const skills = new Set(globSync('.agents/skills/*', { cwd: root })
  .filter(path => existsSync(resolve(root, path))))
const classifiedSkills = expand(manifest.skills)

const scripts = new Set(globSync('scripts/**/*.{ts,mjs,sh,py}', {
  cwd: root,
  exclude: ['scripts/fixtures/**', 'scripts/snapshots/**'],
}).concat(globSync('research/cases/**/*.{ts,mjs,sh,py}', { cwd: root })))
const classifiedScripts = expand(manifest.scripts)

const languageArtifacts = new Set(globSync('**/*.{en.md,zh.md,i18n.yaml}', {
  cwd: root,
  exclude: ['node_modules/**', '.git/**'],
}))
const executionLanguage = new Set<string>()
for (const pattern of manifest.executionLanguage) {
  const matches = globSync(pattern, { cwd: root })
  if (matches.length === 0) throw new Error(`execution-language: pattern matches nothing: ${pattern}`)
  for (const path of matches) executionLanguage.add(path)
}

const errors = [
  ...compare('notes', activeNotes, expectedNotes.paths),
  ...compare('documents', documents, classifiedDocuments.paths),
  ...compare('skills', skills, classifiedSkills.paths),
  ...compare('scripts', scripts, classifiedScripts.paths),
  ...[...languageArtifacts].filter(path => !executionLanguage.has(path)).map(path => `execution-language: unclassified ${path}`),
  ...classifiedDocuments.duplicates.map(item => `documents: duplicate classification ${item}`),
  ...classifiedSkills.duplicates.map(item => `skills: duplicate classification ${item}`),
  ...classifiedScripts.duplicates.map(item => `scripts: duplicate classification ${item}`),
  ...expectedNotes.duplicates.map(item => `notes: duplicate classification ${item}`),
]

if (errors.length > 0) {
  console.error(`verify-corpus-classification: ${errors.length} error(s):`)
  for (const error of errors) console.error(`  ${error}`)
  process.exit(1)
}

console.log(`verify-corpus-classification: ${activeNotes.size} Note(s), ${documents.size} document(s), ${skills.size} Skill(s), and ${scripts.size} script(s) classified.`)
