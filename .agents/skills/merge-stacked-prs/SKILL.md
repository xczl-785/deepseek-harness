---
name: merge-stacked-prs
description: Safely land dependent GitHub pull requests whose bases form a stack. Use when asked to merge a PR stack, dependent PRs, several related PRs in order, or a PR whose base is another open PR branch; preserve live stack order, required checks, reviews, and exact history-rewrite leases.
---

# Merge stacked pull requests

Treat every merge, stack link, branch rewrite, retarget, and deletion as a remote mutation. A request to land a stated stack authorizes merging that stated range after preflight; obtain explicit user authorization before changing stack membership, rewriting branches, expanding the range, bypassing requirements, or deleting branches.

Prefer GitHub's native stack object and stack commands when the repository uses them. Do not silently replace native stack semantics with a sequence of independent PR merges and retargets. If native stack support is required but unavailable, stop and ask for direction.

## Establish live stack state

1. Read the project's `AGENTS.md`, merge policy, required checks, and documented stack workflow. Discover the trunk from live PR data and project rules; never assume a branch name.
2. Require a clean dedicated checkout before any local rebase or stack sync.
3. Query every candidate PR for number, author, base and head names, exact base and head OIDs, repository ownership, state, draft status, reviews, mergeability, and checks.
4. Verify official stack membership and position through GitHub's stack data when the repository uses native stacks. Paginate the entry list when needed.
5. Establish bottom-to-top order: the bottom targets the verified trunk and each higher PR targets the head immediately below it.

Stop for user direction when the chain crosses repositories, contains multiple stack identities, includes an unexpected member, conflicts with live base order, or differs from the requested range.

## Handle missing membership

Compare the requested chain with current official stack membership. Do not link, dissolve, reorder, or rebuild the stack without explicit authorization. Before an authorized link, verify authors, repository ownership, trunk, complete PR set, and intended bottom-to-top order. Re-query GitHub afterward and require one stack identity with the expected positions and base chain.

## Refresh only when required

Do not rewrite branches merely because a refresh command exists. When current merge state or repository rules require an updated trunk, follow the project's allowed merge-forward or rebase strategy.

Before an authorized history rewrite:

- record every affected remote ref and its exact observed OID;
- use a native stack command only if it provides lease protection for every rewritten branch;
- for direct Git pushes, use an explicit `--force-with-lease=<remote-ref>:<observed-oid>` per branch;
- stop on concurrent advancement and never use raw `--force`.

Some native stack sync operations publish cascading rebases before local validation. Record the live order and heads before the operation, then immediately re-query every head, inspect each rewritten layer against its live base, and run the project-selected evidence. Keep the stack unmerged until all affected layers pass. Re-audit review threads, approvals, mergeability, and checks because rewritten OIDs invalidate earlier anchors.

## Preflight the selected range

Immediately before merging, re-query the official stack and each selected PR. Require every selected PR to be open, non-draft, in the expected order, and compliant with repository review and check requirements. Treat each layer independently.

“Land the stack” selects the whole verified stack. A partial landing requires an explicit boundary and includes every layer from the bottom through that boundary. Do not expand an ambiguous request.

## Merge and verify

Use the repository's documented native stack merge command for the authorized range. Do not bypass merge requirements, fall back to independent per-PR merges, retarget branches manually, or delete branches as part of the merge command. If GitHub reports a blocker, resolve it through the owning PR or stop and report it.

Wait until every selected PR reports `MERGED`; queued is not merged. For a partial landing, re-query the remaining official stack and verify its order, bases, exact heads, reviews, mergeability, and checks.

Branch deletion is a separate explicitly authorized pass. Before deleting any branch, require its PR to be merged and verify that no open PR still uses the branch as a base. Anything other than zero dependents blocks deletion.

## Report

Report the verified stack identity and order, authorized merge range, any rewritten OIDs and validation, merge result for every selected PR, remaining stack state, and any branches intentionally left in place. Never present a queued request or successful command invocation as completed landing evidence.
