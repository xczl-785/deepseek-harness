---
name: review-prose
description: Use when writing, reviewing, restoring, trimming, or auditing prose in a repository, including Markdown, API documentation, comments, tests, prompts, diagnostics, configuration descriptions, and CLI or UI strings where wording carries behavior or a technical contract.
---

# Review Prose

Write enough to preserve the contract, then remove repetition, narration, and decoration. A contract is an obligation, invariant, precondition, postcondition, side effect, failure mode, compatibility promise, or other fact a reader relies on.

## Inputs and authority

Require an explicit scope. If none is available, ask for it rather than inferring a repository-wide audit. Distinguish review-only requests from requests that authorize edits.

Read applicable `AGENTS.md` files and the owner of the prose before judging it. Follow project-defined exclusions, generated-file rules, terminology, language policy, and validation commands. Do not assume specific directories, package tooling, translation structure, or document lifecycle.

## Preserve the complete proposition

Before changing a passage, identify every relevant proposition:

- actor and action;
- condition, timing, and ordering;
- modality such as must, may, or never;
- negative guarantee and exception;
- ownership, side effect, failure, and consequence.

Shorten only when all required facts survive and become clearer. Keep a complete local contract at the point of use; link to an owning document for extended rationale, architecture, algorithms, history, and examples. Keep non-obvious rationale when omitting it could cause misuse or an incorrect simplification.

Technical terms are not automatically jargon. Prefer the exact rule, API, type, field, validation, timing point, component, or failure state when it says more.

## Judge prose by its surface

- **Public API documentation:** cover caller-visible return distinctions, failures, side effects, ownership, timing, cancellation, and durability when they are not obvious from types.
- **Internal comments:** explain invariants, races, ownership, security boundaries, and surprising failure behavior. Remove control-flow narration and code restatement.
- **Module documentation:** state role, dependencies, responsibilities, and non-obvious design choices.
- **Tests:** explain only non-obvious fixture choices, real entry paths, platform accommodations, indirect observations, or regression constraints.
- **Procedures:** include prerequisites, required actions, observable verification, failure handling, and concise warnings.
- **Repository or package guides:** cover configuration, semantics, failures, limitations, extension points, and maintainer traps appropriate to their audience.
- **Decision and incident records:** preserve unique rationale, alternatives, consequences, evidence, causal sequence, and named gaps. Remove obsolete planning or persuasion unless the project's lifecycle rules retain it.
- **Agent instructions and Skills:** state behavioral guardrails, authority boundaries, and scope limitations concisely.
- **Prompts, diagnostics, CLI, and UI strings:** treat wording as behavior. Name the failing subject and correction when useful, and validate observable output.

## Workflow

1. Confirm scope, edit authority, current change base when relevant, and applicable instructions.
2. Inspect all requested surfaces, not only the largest files. Use searches and counts to find candidates, then judge them semantically.
3. Classify each candidate as keep, add, trim, restore, restructure, or defer.
4. Update the owning source before generated or copied artifacts.
5. Re-check analogous passages after discovering a new rule.
6. Run narrow relevant prose, documentation, formatting, snapshot, or behavior checks from project configuration.
7. Report the inspected scope, edits, deliberate keeps, deferred cases, and checks run.

Use `$govern-docs` for document placement and corpus structure. Use `$trim-reasoning-residue` for prose tied to an authoring session, draft, review, or change narrative.

When two proposition-preserving versions have a real tradeoff, recommend one and state the difference. Do not offer weaker alternatives merely to create a choice.
