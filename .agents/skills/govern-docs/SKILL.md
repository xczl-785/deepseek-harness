---
name: govern-docs
description: Use when writing, moving, reviewing, or auditing repository documentation; deciding where information belongs; separating tutorials from references; reducing duplication or excessive detail; or responding to documentation link, format, generation, or size checks.
---

# Govern Documentation

Improve documentation without inventing a new information architecture for the project. Treat applicable `AGENTS.md` files, repository configuration, existing navigation, and documented generators as the source of truth. Obtain real commands and directory conventions from those sources rather than assuming them.

## Establish scope and ownership

1. Confirm the requested scope and whether the task authorizes edits or only review.
2. Read the root and scope-specific `AGENTS.md` files, then inspect the existing documentation tree and its validation configuration.
3. Identify the owner of each fact before editing. Change source documents or generator inputs before generated catalogs, projections, snapshots, or copied output.
4. Before moving or renaming a document, search for inbound links, anchors, code references, navigation entries, and generator inputs. Apply the move and all required repairs atomically.

Do not impose directory names or document forms that the project does not use. If ownership is genuinely unclear, recommend a home based on the nearest stable subject and explain the tradeoff.

## Review structure before wording

For each human-facing document:

1. Name its subject and intended reader.
2. Keep full detail about its own subject. Summarize child topics and link to their owners instead of copying their detail.
3. Classify its primary form:
   - A tutorial leads through ordered work to an observable result.
   - A reference supports lookup within a clear scope without sequential reading.
   - An explanation records concepts or rationale.
   - A procedure provides prerequisites, actions, verification, and recovery.
4. Split substantial mixed forms. Keep a small secondary form only when a labeled section is easier to use than another document.
5. For tutorials, order prerequisites before dependent concepts and move optional advanced material later.

## Audit the corpus

Use the project's own scope and validation tools when available. Otherwise use narrow `git` and `rg` searches.

- Find duplicated explanations by searching distinctive phrases. Keep one owner; replace other copies with concise links when local context still needs one.
- Replace hand-maintained inventories with an authoritative source or generator only when that source already exists or has clear ongoing value.
- Remove status narration, review choreography, dead plans, and derivation transcripts while preserving current contracts and durable rationale.
- Treat length as a discovery signal, not a defect. Relocate misplaced detail, condense repetition, and raise an explicit limit only when the document remains cohesive and the project supports such limits.
- Do not edit frozen history, vendored content, fixtures, snapshots, generated files, or translations unless applicable project rules explicitly make them part of the requested workflow.

Use `$review-prose` when editorial judgment must preserve exact obligations or restore missing explanations. Use `$trim-reasoning-residue` when prose is written from an authoring-session or review vantage.

## Validate and report

Run only the checks required by the changed surfaces, using commands declared by project instructions or configuration. At minimum, inspect the final diff and run the project's whitespace or documentation checks when they exist. For visible text that affects behavior, run the corresponding behavior or snapshot test.

Report:

- documents and surfaces inspected;
- ownership or structural changes made;
- deliberate long or duplicated-looking content that was retained and why;
- checks actually run and unresolved issues.
