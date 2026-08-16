---
name: translate-docs
description: Explicitly run a repository-aware documentation translation workflow for a new document, an existing counterpart update, or a renamed or deleted translation set. Use only when the user invokes $translate-docs by name; do not infer or invoke this extended workflow during ordinary documentation editing.
---

# Translate Documentation

Treat this Skill as workflow guidance, not translation memory. Preserve meaning and project terminology while writing native technical prose in the target language.

## Respect the invocation boundary

Run this extended workflow only when the user explicitly invokes `$translate-docs`. Do not load it from another Skill or infer it from an ordinary documentation edit.

## Read the project contract

Before translating, read the repository and documentation rules. Discover rather than assume:

- which documents are in translation scope;
- how counterparts are named and located;
- whether a sidecar, manifest, language switcher, generated briefing, or consistency hash exists;
- which language is authoritative for this change, or whether both sides have changed;
- the terminology table, style guidance, and translation validators;
- files that are generated, frozen, archived, or excluded.

If the repository has no pairing automation, translate and review the requested files without creating one. If its contract is incomplete or both sides changed incompatibly, stop and surface the ambiguity before recording consistency.

## Choose the path

- **Existing counterpart, one side changed:** make the smallest counterpart edit that covers the semantic diff. Preserve reviewed wording outside that scope.
- **New translation:** translate the whole document in semantic sections while keeping required Markdown structure aligned.
- **Rename or deletion:** rename or delete every artifact the project's translation contract associates with the document.
- **Generated or sealed content:** change the owning source or follow the repository's repair procedure; do not hand-edit protected output.

Use a project-provided change briefing when available. Apply mechanical synchronization only when the tool proves the change is mechanical and the result remains reviewable.

## Translate and review

1. Read a complete semantic unit before writing it in the target language.
2. Preserve every source proposition without adding explanation or dropping qualifications.
3. Keep code spans, identifiers, commands, URLs, and code blocks unchanged unless the project contract says otherwise.
4. Follow the repository terminology table. Flag genuinely unresolved terminology instead of inventing a translation silently.
5. Preserve heading levels, list kinds and order, tables, links, emphasis, and other structure required by project checks.
6. Compare the result against the source clause by clause.
7. Read the completed translation alone and rewrite awkward literal phrasing without changing meaning.

For a large new translation, delegation may reduce context pressure when the surrounding instructions allow it. The main agent remains responsible for the source contract, final comparison, edits, and validation.

## Record and verify

Run project-provided scoped writers only after confirming semantic equivalence, then run their read-only verifiers. Never bulk re-record unrelated translations to make a gate green.

Run the repository's focused translation, Markdown structure, link, and formatting checks. Report:

- new translations versus minimal updates;
- the authored source side for each update;
- associated sidecars or manifests changed;
- unresolved terminology or conflicting edits;
- exact checks run.
