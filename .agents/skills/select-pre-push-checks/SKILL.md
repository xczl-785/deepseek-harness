---
name: select-pre-push-checks
description: Select and run the smallest credible evidence for an outgoing Git change. Use before pushing or force-pushing, marking a GitHub pull request ready, claiming checks pass, or immediately after a stack operation rewrites and publishes branches.
---

# Select pre-push checks

Build evidence for the actual outgoing change without reflexively running every repository check. Read commands, base rules, branch policy, and required gates from the current project's `AGENTS.md`, package scripts, hook configuration, CI workflows, and live GitHub state.

## Inspect the outgoing change

1. Confirm the repository root, checkout, branch, worktree status, and configured remotes.
2. Verify the live PR base, stack parent, upstream, or project-defined comparison ref. Fetch it explicitly. Never infer a base from names such as `main` or `master`.
3. Resolve the merge base and inspect committed paths against it. Inspect staged, unstaged, and untracked paths separately.
4. Use the repository's documented change-scope tool when available; otherwise use Git directly. Re-establish the scope after a base change, merge, rebase, or stack rewrite.
5. Identify which behavior, public contract, generated artifact, documentation surface, or deployment path the complete scope can affect.

## Select evidence

Choose the narrowest check that would fail for each plausible regression. Derive exact commands from the repository rather than carrying commands from another project.

- Run owning unit or integration tests for changed behavior.
- Expand to adjacent consumers when a shared contract changes.
- Check documentation, links, generated files, schemas, snapshots, or formatting only when their owning surfaces changed.
- Exercise the real built or packaged entry path when manifests, exports, commands, workers, loaders, or build configuration change.
- Run credentialed or remote tests only when required credentials are available; never print secrets.
- Use the full local suite only when project rules require it, the change is genuinely cross-cutting, the user requests it, or a CI failure needs local reproduction.

Treat test selection and coverage selection as separate decisions. Do not weaken thresholds, ignore missing tests, or narrow measured sources merely to obtain a green result. Do not rerun a passing check solely because commit or push is the next step unless later edits invalidated it.

## Protect rewritten history

Normal push authorization does not authorize a history rewrite. Before any standalone force-push:

1. obtain explicit user authorization for the rewrite and exact target branch;
2. fetch the current remote branch and record its full observed OID;
3. use `--force-with-lease=<remote-ref>:<observed-oid>` or the equivalent exact lease;
4. stop if the remote advanced; never use raw `--force`.

After a rewritten push, fetch live heads again and re-check unresolved review threads, approvals, mergeability, and Actions checks. Previous commit OIDs and inline anchors are stale evidence.

When an authorized stack command necessarily publishes cascading rebases before validation, require a clean worktree and record the exact remote heads first. Immediately afterward, inspect every rewritten layer against its live base and run its selected checks. Do not claim the stack ready or merge it until that evidence passes.

## Push and verify

1. Stop on a relevant failure unless the user explicitly accepts a documented bypass. Record the exact command and failure; prove rather than assume an environment-specific cause.
2. Inspect files changed by commit hooks before continuing.
3. Push with Git for ordinary pushes. Use only the authorized exact-lease procedure for rewritten history.
4. Fetch or query the remote and verify that the target ref resolves to local `HEAD`.
5. For a GitHub PR, inspect current Actions or required checks. Report pending checks as pending and inspect failures before attributing them to the change or environment.

Report the verified base, outgoing scope, checks run and results, push mode, remote SHA, and remote check state. Do not say “all checks pass” when only selected local evidence has passed.
