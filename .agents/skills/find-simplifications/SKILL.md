---
name: find-simplifications
description: Use when auditing a codebase or change for evidence-backed simplification opportunities, especially dead or duplicated surfaces, speculative generality, redundant lifecycle machinery, unused APIs, test-only contracts, or hand-rolled infrastructure that a maintained dependency or platform feature could replace.
---

# Find Simplifications

Turn broad requests to simplify into a small set of well-supported candidates. Prefer net removal of concepts, behavior, code, tests, and maintenance burden over cosmetic rewrites.

## Establish project context

Read applicable `AGENTS.md` files, architecture and testing guidance, decision records, dependency policy, and the owning code. Obtain repository paths, accepted planning artifacts, commands, and protected design choices from the project itself. Tests and existing decisions are evidence, not infallible truth, but overturn them only with stronger evidence.

Do not assume a particular package layout, note system, issue tracker, language, dependency manager, or release stance.

## Recognize strong candidates

Look for surfaces whose cost exceeds their demonstrated value:

- public methods, events, configuration, helpers, packages, or hooks with no production consumer;
- behavior used only by tests or documentation without a load-bearing contract;
- multiple representations of the same fact;
- interface methods every implementation supports but no caller uses;
- support packages or abstractions that add more boundaries than capability;
- speculative generality without a current owner or use case;
- validators, rollback paths, expected-output inventories, or special cases that protect an unused API;
- hand-rolled parsers, retry loops, matchers, diffing, framing, or similar infrastructure already covered by a maintained dependency or platform feature;
- several flags, promises, sentinels, or callbacks mirroring one lifecycle state.

Do not elevate a typo, style preference, one unused local, or vague complexity complaint into a design proposal.

## Survey and prove

1. Start with the requested scope and the largest relevant production surfaces.
2. Search exact symbols, wire strings, configuration keys, package names, event names, and both member and direct call forms with `rg`.
3. Classify each consumer as production, non-production, or ambiguous. Read ambiguous examples, scripts, dynamic registrations, and configuration loaders before deciding.
4. Trace ownership across trust and lifecycle boundaries. Values from parsers, queues, files, workers, processes, model output, or wire protocols may require validation or ownership transfer that same-process typed calls do not.
5. For asynchronous code, map each state flag, cancellation path, disposer, readiness promise, and terminal outcome to an owner or transition. Consolidate only genuinely duplicated state.
6. Check existing decisions and current public contracts before proposing removal.

Reject or downgrade a candidate when a production caller exists, the change is actually an unrequested feature decision, strong recorded rationale remains valid, or the churn does not reduce public behavior or conceptual burden.

## Evaluate dependency substitutions

For a proposed dependency or platform replacement:

- identify the exact hand-rolled surface it covers;
- identify residual semantics and glue it does not cover;
- check maintenance, adoption, compatibility, security, and transitive footprint using authoritative sources when needed;
- compare net deletion: removed implementation, tests, and docs minus retained glue and new operational burden.

A wrapper that relocates the same complexity is not a simplification.

## Produce the right artifact

Follow the project's own planning and decision conventions.

- Use a durable proposal for changes to public behavior, architecture, compatibility, or meaningful maintenance policy.
- Use a short actionable TODO only for local, clearly useful cleanup.
- Report a finding without creating an artifact when the request is review-only or the evidence is incomplete.
- Consolidate overlapping proposals into the artifact that already owns the decision.

For every durable candidate, state the current surface, production and non-production consumer evidence, exact removal or consolidation, strongest reason to keep it, behavior given up, risks, and observable acceptance conditions.

## Validate and report

Run relevant validators declared by project instructions or configuration plus final diff hygiene when edits are authorized. Report areas surveyed, candidates accepted and rejected, intentional exclusions, evidence strength, and checks run. A credible audit may conclude that no worthwhile simplification is currently proven.
