---
name: maintain-agent-notes
description: Maintain a repository's durable decision records when adding, reviewing, superseding, rejecting, archiving, restoring, or pruning Agent Notes or equivalent architecture and process records. Use when a decision record changes lifecycle, when a new decision may replace an older one, or when the active decision corpus needs cleanup without losing useful rationale.
---

# Maintain Agent Notes

Keep the active decision corpus small enough to guide work while preserving rationale that can still prevent mistakes. Judge records by future decision value, not age, file size, or a cleanup quota.

## Read the project contract

Before changing records:

1. Read the repository and scoped `AGENTS.md` files.
2. Locate the project's decision-record instructions, lifecycle directories, templates, indexes, generators, and validation commands.
3. Treat current code, configuration, tests, and newer accepted records as implementation evidence. Do not infer lifecycle rules from directory names alone.
4. If the project has no explicit archive or sealing contract, do not invent one. Keep history in Git and prefer consolidation, supersession links, or deletion according to project policy.

## Audit supersession

When adding or substantially revising a decision record, search active records for the same mechanism, boundary, rejected alternative, or ownership claim.

- If the new record absorbs every still-useful proposition, make it the clear owner and retire the old record under the project's lifecycle rules.
- If it supersedes only part of an older record, keep both and cross-link the surviving boundaries.
- If an old proposal is no longer pursued, move it to the project's rejected state with an honest reason when that state exists.
- Repair active inbound links whenever a record moves or disappears.

Do not rewrite historical records merely to make them match the current conclusion. Add a current record or explanatory link when history must remain intact.

## Classify by future value

- **Keep an implemented record active** when its rationale, alternatives, negative guarantees, compatibility semantics, ownership boundary, security rule, or reintroduction condition can guide future changes.
- **Retire or archive an implemented record** when the decision is fully shipped, current behavior is authoritative elsewhere, and its rationale is unlikely to affect another decision.
- **Keep a proposal active** only while it represents real intended work. Reject or delete abandoned proposals according to project rules; do not archive live proposals as if they were completed.
- **Keep a rejected record** when the losing approach remains a plausible and consequential mistake.
- **Delete a rejected record** when the idea is obsolete, superseded, no longer plausible, or unlikely to prevent repeated debate.

Record borderline cases in the handoff instead of forcing certainty.

## Apply the lifecycle safely

Follow the repository's exact format and automation. A project may use single Markdown files, paired translations, sidecars, generated indexes, append-only manifests, or immutable archives; none of these are universal.

Before moving or deleting a record:

1. Resolve its complete project-defined artifact set.
2. Check active inbound links and current authority.
3. Apply only lifecycle-required metadata changes.
4. Run project-provided writers before their read-only verifiers when the contract requires both.
5. Never edit a sealed or immutable archive unless the project contract explicitly provides a repair procedure.

If no lifecycle automation exists, keep the change simple and reviewable. Do not create an archive system as part of routine note maintenance.

## Validate and report

Run the narrow decision-record, link, formatting, and staged-diff checks declared by the project. Do not substitute remembered commands from another repository.

Report:

- records kept active and why;
- records consolidated, rejected, archived, restored, or deleted;
- inbound links or indexes changed;
- borderline classifications;
- exact validation performed and any contract the repository lacks.
