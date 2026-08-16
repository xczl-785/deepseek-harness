---
name: trim-reasoning-residue
description: Use when auditing or fixing prose that reads from an authoring-session, draft, commit, pull-request, or reviewer vantage, including dead decision labels, change narration, review choreography, control-flow walkthroughs, unsupported hedges, or temporary working-language fragments in documentation, comments, tests, prompts, and decision records.
---

# Trim Reasoning Residue

Rewrite prose so it stands on its own in the current repository. Do not delete factual content merely because it is wrapped in authoring or review narration.

Use `$review-prose` to enumerate and preserve the complete proposition before editing.

## The test

Ask of every suspect passage:

> Can a reader at the current revision, without the author's transcript, private draft, commit stack, or review conversation, resolve every reference and verify every claim?

If not, restate surviving facts from the repository's current vantage and remove the residue. If the passage carries no durable fact, delete it. A resolvable history may still be misplaced on current-state surfaces; follow the project's documented home for change history.

## Common residue

1. **Dead working references:** unexplained decision numbers, audit codes, phase labels, or sections of uncommitted drafts. Link a committed owner or remove the label and state the fact directly.
2. **Commit and review vantage:** “this PR adds,” “a later commit,” “the reviewer confirmed.” State current behavior; move genuine follow-up work to the project's tracked mechanism.
3. **Change narration:** “used to,” “no longer,” “the old version,” “this cut,” or indexical version stamps. State present behavior. Express a regression as a present counterfactual when useful: “without X, Y occurs.”
4. **Review choreography:** rejected rounds, draft ordinals, or attribution to reviewers. Keep the resulting decision and rationale, not the conversation.
5. **Reviewer-addressed justification:** claims that code is safe or correct. State the invariant that makes it safe, or remove the comment if code and types already show it.
6. **Derivation transcripts:** step-by-step narration of obvious control flow, test walkthroughs, or proofs of visible branches. Keep only non-obvious contracts and invariants.
7. **Hedges and planning residue:** “probably fine,” “for now,” or untracked deferrals. State the actual bound, use the project's follow-up marker, or delete the hedge.
8. **Working-language fragments:** stray authoring notes or separators inconsistent with the surrounding document. Translate, formalize, or remove them.

## Do not overcorrect

Keep durable, resolvable evidence and required explanations, including:

- issue references and recognized follow-up markers;
- historical evidence in project-sanctioned decision or incident records;
- suppression and coverage-ignore reasons;
- present-tense regression counterfactuals;
- measured bounds and their provenance;
- runtime old/new states that describe lifecycle, not repository history;
- external standards and stable design references;
- non-obvious rationale whose removal could cause misuse.

## Workflow

1. Require an explicit scope and determine whether edits are authorized.
2. Read applicable `AGENTS.md` files and follow project-defined exclusions, generated-file ownership, historical records, language policy, and validation commands.
3. Audit read-only first. Search hidden files when in scope for phrases such as `this PR`, `previous commit`, `later PR`, `used to`, `no longer`, `rejected in review`, `for now`, `probably`, `decision N`, phase labels, and unexplained section citations. Then read dense prose without relying only on patterns.
4. Judge each hit semantically. Search results are probes, not proof.
5. Enumerate the passage's factual propositions before editing. Preserve obligations, exceptions, ownership, timing, failure behavior, and provenance.
6. Update owner sources before generated output. Do not silently rewrite recorded fixtures, snapshots, model-visible strings, or frozen history unless project rules and task authority explicitly allow it.
7. Re-run the searches and the narrow relevant documentation, formatting, snapshot, or behavior checks declared by the project.
8. Report the scope, rewrites, deletions, sanctioned keeps, unresolved references, and checks run.
