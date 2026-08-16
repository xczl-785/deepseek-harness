---
name: review-code-changes
description: Review code changes or a GitHub pull request for concrete correctness, lifecycle, security, contract, and test-evidence defects. Use when asked to review a diff, commit, branch, or PR, including follow-up review after its base or head changes.
---

# Review code changes

Review the live change, not a stale patch or summary. Prioritize defects that can alter required behavior over style preferences. Do not modify code or GitHub state unless the user separately asks for that work.

## Establish the review scope

1. Read the repository root and applicable scoped `AGENTS.md` files, then inspect current test, CI, and documentation configuration. Treat these live project sources as authoritative; do not assume package layout, commands, branch names, or quality gates.
2. For a GitHub PR, fetch its current base, exact head OID, draft state, review state, and checks. Re-fetch after a retarget, merge, rebase, or force-push.
3. Determine the merge base and inspect committed changes against it. Inspect staged, unstaged, and untracked changes separately when reviewing a local checkout.
4. Use the project's change-scope command when one is documented. Otherwise use Git directly with the verified refs. Never guess the base from a conventional branch name.
5. Read enough surrounding implementation, callers, tests, configuration, and decision records to understand the behavior. A changed-lines-only review is insufficient.

## Review the behavior

Check the dimensions that the diff can actually affect:

- **Intent and contracts:** Trace both sides of changed interfaces. Verify inputs, outputs, errors, cancellation, ownership, persistence, cleanup, and compatibility behavior.
- **Lifecycle and concurrency:** Look for races across publication, callbacks, async work, cancellation, reentry, teardown, subprocesses, and disposal. Confirm failure in one callback or cleanup path does not corrupt unrelated work.
- **Authorization and enforcement:** Follow every permission or denial rule to the operation that performs it. Check alternate callers that can bypass prompts, schemas, wrappers, or UI guards.
- **State and bounds:** Distinguish borrowed state from owned snapshots. Trace cache invalidation and notifications. Apply limits to the complete emitted or retained result, including metadata and multibyte content.
- **Real entry paths:** Require tests through the shipped loader, command, worker, service boundary, or integration when direct unit construction could hide wiring errors.
- **Public surface and necessity:** Trace current consumers. Flag speculative abstractions, options, compatibility paths, or generic public APIs without a present contract.
- **User- and model-visible behavior:** Review prompts, schemas, diagnostics, logs, UI strings, snapshots, and examples as behavior, not formatting noise.
- **Documentation and decisions:** Check that public behavior and non-obvious contracts are documented in the project's chosen locations. Compare implemented decisions with shipped reality.
- **Test strength:** Confirm assertions would fail for the suspected regression and observe externally meaningful results. Coverage or a green check alone does not prove the scenario.

Run or request only the narrow checks needed to confirm a suspected issue. Do not duplicate checks already proven by unchanged evidence, and do not invent repository requirements absent from current rules.

## Report findings

Report only actionable findings supported by the code or live repository state. For each finding, state:

1. the defect and tightest relevant location;
2. the user or system impact;
3. the execution path or evidence that makes it reproducible;
4. the smallest useful direction for correction, when it is not obvious.

Order findings by severity. Separate blockers from non-blocking suggestions, omit issues already enforced by a green required gate, and say explicitly when no actionable defect was found. Reply in existing GitHub review threads when continuing an earlier finding; verify incoming review claims rather than accepting them performatively.
