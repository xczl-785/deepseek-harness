# Agent Note: Development Harness Research Repository Charter

Status: proposed

English | [中文](2026-08-15-development-harness-research-repository-charter.zh.md)

## Problem

This branch still contains the complete DeepSeek Harness product monorepo even though its intended use is research into the repository's development harness: agent workflows, engineering policy, decision records, documentation practice, validation tools, and representative development cases. Product runtime source, clients, examples, vendored dependencies, release machinery, and product documentation dominate the file count and make that research subject harder to identify and change.

The current tree has 7,412 tracked files and 47,679,648 tracked bytes at source commit `1682b423980637a0103dfb07a22536a98af4bcee`. The obvious product runtime and delivery directories account for 4,786 files and 31,072,823 bytes. Removing them can collapse the repository by about 65 percent before detailed corpus curation, but direct directory deletion would leave active Agent Notes and documentation with broken evidence links, retain product-coupled scripts that no longer run, and erase the provenance needed to interpret case studies.

## Proposal

Turn `research/dsh-development-harness` into a permanently divergent research repository extracted from DeepSeek Harness. The branch studies how the product was developed; it does not remain a buildable, releasable, or merge-back-compatible distribution of the product. `main` and `master` remain the source repositories for current product code, while this branch owns its research corpus and tooling.

The complete target is a small repository with five owned areas: research scope and source provenance, reusable agent skills, curated decision and incident records, development-method references and case studies, and a minimal toolchain that validates only the retained repository. Product source is cited through commit-pinned links or copied as a self-contained case excerpt only when the research corpus requires it.

The conversion follows one integration branch and four result waves. Each wave must leave a coherent checkpoint; a passing deletion count alone does not permit broken retained documents, non-running retained commands, or loss of source provenance.

### Scope rules

Keep an item when it directly defines or executes repository-development behavior, provides durable evidence for a retained development decision, or is required to validate the retained corpus. Delete an item when its primary job is to run, test, package, publish, or explain the DeepSeek Harness product. Curate an item when it is product-specific but demonstrates a reusable development method better than a prose summary can.

Names do not decide ownership. Product packages such as `skill`, `subagent`, `workflow`, `hooks`, and `test-support` remain product source unless a selected excerpt becomes a case study. Conversely, a script under `scripts/` remains only when its dependencies and outputs belong entirely to the research repository after extraction.

Numerical reduction is an ordering tool, not a retention rule. The first destructive wave attacks high-confidence bulk product areas before performing sentence-level or note-level curation. It does not delete a research asset merely to meet a quota.

### Version chain

| Version | Observable result | Todo | Deferred | Constraints | Acceptance criteria | Pending decisions |
| --- | --- | --- | --- | --- | --- | --- |
| R0 — Charter and baseline | The extraction has a reviewable scope, source identity, and measured baseline. | Accept this charter; generate an exact keep/remove/curate manifest; record the product source and upstream identities. | Individual note and document judgments. | No product deletion; no rewrite of root guidance as if the target already existed. | Every top-level area has one disposition and an owner for mixed areas; the deletion candidate count is reproducible. | Final repository name and whether it will eventually leave this fork. |
| R1 — Quantity collapse | Obvious product runtime and delivery planes are absent, and the retained repository has fewer than 3,000 tracked files unless the manifest exposes a justified exception. | Remove `packages/`, `apps/`, `examples/`, `vendor/`, `native/`, `python/`, `website/`, product assets and patches; remove product-only workflows; replace the workspace with the smallest runnable research toolchain; convert retained live references to commit-pinned source links or selected case material. | Fine-grained pruning inside Agent Notes and general documentation. | Preserve source provenance; do not edit frozen archived notes; do not keep dead commands; do not claim the product still builds. | At least 60 percent of baseline files and bytes are removed; every remaining package script runs or is explicitly absent; retained active Markdown has no broken local link; the tree is clean after the focused checks. | Whether archived product history remains locally or is represented only by Git history and source links. |
| R2 — Corpus refinement | Every retained note, document, skill, and script belongs to an explicit research category. | Classify content as method, reusable tool, case study, historical evidence, or removal; consolidate duplicated rationale; reduce product-specific generated and user documentation; establish the language policy. | New research features and generalized automation. | Preserve unique rationale and incident evidence; paired material changes atomically; archived records remain frozen while retained. | No unclassified active corpus remains; each fact has one owner; research navigation reaches every retained category; corpus checks reject dead references and malformed records. | English-only, Chinese-only, or paired active corpus; archive retention policy. |
| R3 — Harness operationalization | A researcher can use the retained skills and tools without the deleted product monorepo. | Generalize product-named skills where useful; create research fixtures; define focused checks; prove fresh-clone setup; add contributor and case-study templates. | Compatibility with the original DSH product tooling. | Reusable workflows must not silently depend on deleted paths, private local state, or the original product build. | Fresh setup installs only declared dependencies; every retained skill has a runnable or inspectable verification path; the focused CI passes on a clean checkout. | Which workflows remain DSH-specific case tools and which become repository-neutral. |
| R4 — Governance closure | Repository identity, branch rules, contribution path, and documentation describe the actual slim tree. | Rewrite root `README.md` and `AGENTS.md`; slim GitHub templates and CI; publish the final structure and maintenance rules; resolve or assign every residual item. | Future studies and new case imports. | Root instructions contain standing orders only; README introduces the research repository rather than the DSH product. | A new researcher can identify purpose, source provenance, layout, setup, validation, contribution flow, and non-goals from the root documents; no retained rule points to a deleted owner. | Long-term synchronization policy for importing selected upstream evidence. |

### R1 deletion contract

R1 is the first implementation priority because it removes high-confidence volume without first spending weeks classifying thousands of records. Its candidate set begins with the 4,786 files under `packages/`, `apps/`, `examples/`, `vendor/`, `native/`, `python/`, `website/`, `assets/`, and `patches/`. The exact manifest may retain a minimal case excerpt, but an exception must name the research question and cannot retain a whole product subtree for convenience.

Before deletion, R1 records the extraction source in a machine-readable source lock and inventories inbound links from retained active files. References needed for research become commit-pinned external links or point to selected local case material. References that merely support deleted product guidance disappear with that guidance. Product build, release, website, platform, snapshot, and runtime-verification commands leave with their owners; a surviving command must have a surviving input, output, and focused check.

R1 may use several commits for reviewability, but every pushed checkpoint must state whether it is operational. A checkpoint that intentionally sits between bulk deletion and toolchain repair stays on the working branch and is not presented as an accepted version result.

### Repository invariants after extraction

- The research branch never merges back into the product `main`; selected research improvements move by an explicit, separately reviewed port when appropriate.
- The original product remains recoverable from the recorded source commit; this repository does not preserve duplicate source merely as a backup.
- Every retained executable has declared dependencies and a focused validation command.
- Every retained case identifies its question, source, selection rationale, and limits; a case does not become current product documentation.
- Root guidance describes only the live research tree. Detailed workflow and rationale live in their owning documents.
- Deferred items retain an owner, reason, and reconsideration trigger; omission from the current wave does not silently delete the decision.

### Result and integrity checks

Each wave reports tracked file count and bytes against the R0 baseline, but validation follows the retained content. R1 checks source-lock integrity, active Markdown links, Agent Note structure for retained active notes, skill metadata, the minimal toolchain, and `git diff --check`. R2 adds corpus classification and navigation checks. R3 adds fresh-checkout setup and focused workflow tests. R4 audits all root instructions and CI paths against the final tree.

Stop the current wave for user judgment when it would delete unique research evidence, change the treatment of frozen history, choose a permanent language policy, weaken source traceability, or expand the repository back into a product implementation. Ordinary broken links, dead script dependencies, and classification mistakes stay inside the current wave as repair work.

## Alternatives considered

**Keep the complete product monorepo and add a research index.** Rejected because the product remains the dominant tree, dependency installation and checks remain product-sized, and the research subject continues to be obscured by more than four thousand product files.

**Copy only the current skills into a new empty repository.** Rejected because skills without their decision records, failure evidence, documentation policies, and real cases lose the context that makes this repository valuable for research.

**Delete by top-level directory and repair damage later.** Rejected because active records rely on product paths as evidence and mixed scripts combine product and development checks. This would create a smaller but internally false repository.

**Finish detailed note-by-note curation before bulk deletion.** Rejected for the first phase because it spends most effort inside a tree whose high-confidence product planes are already known. Bulk removal with provenance and link handling produces an earlier coherent research baseline; detailed curation then operates on the smaller tree.

**Keep the research branch synchronized with product changes.** Rejected because regular merges would repeatedly restore deleted product areas and make research-specific governance subordinate to the product layout. Selected evidence imports are explicit and source-pinned instead.

## Acceptance criteria

- The user accepts the branch purpose, retention rules, version chain, and R1 deletion contract.
- An R0 manifest can classify every tracked top-level area as keep, remove, curate, or mixed without using package names as a shortcut.
- The R1 candidate set reproducibly identifies at least 60 percent of baseline files and bytes while listing every exception.
- Every version states its Todo, Deferred work, constraints, observable acceptance criteria, and pending decisions.
- The plan preserves a traceable route from retained research evidence to the original source commit and does not require the slim repository to build or publish the DSH product.
- Root README and AGENTS rewrites remain an R4 closeout task rather than describing an unbuilt target during R1.

## Risks

Commit-pinned links depend on continued remote availability; selected high-value cases may need self-contained local excerpts with clear licensing and provenance. Keeping all Agent Notes through R1 preserves research value but also preserves most of the remaining file count, so the second reduction will require semantic curation rather than another directory-only deletion.

The existing bilingual and archived-note rules can make broad corpus edits expensive. R2 must decide language and archive policy explicitly instead of using file-count pressure to discard one language or rewrite frozen records. Tool extraction can also reveal hidden imports from product helpers; R1 must delete or replace such commands rather than retain a misleading script name.
