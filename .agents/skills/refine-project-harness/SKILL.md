---
name: refine-project-harness
description: "Use when the user explicitly asks to audit, refine, simplify, or change a project's development Harness, or when a real task has exposed Harness trigger, scope, duplication, coordination, or attention-cost problems across project instructions, Skills, tools, optional modules, or integrations. Do not use for ordinary project work merely because Harness files exist, for a change confined to one Skill's own design boundary, or for installation, publication, or synchronization-only work."
disable-model-invocation: true
---

# Refine Project Harness

Treat a project Harness as the feedback system around real development work, not as a package to study for its own sake. Start from an observed task effect and produce an evidence-backed decision or an authorized, verified adjustment.

## Establish task evidence

Read the applicable project instructions, current Harness entrypoints, implementation, configuration, and declared validation commands. Record:

- the real task, user feedback, or observed behavior that triggered the request;
- how the agent actually entered, decided, acted, paused, and verified;
- the user's read-only, edit, external-state, and cross-repository authorization;
- which claims are observed, project-supported, inferred, or still untested.

If no concrete friction, alignment need, or consequential risk is visible, report that no Harness change is proven. Do not manufacture a repository-wide audit merely because Harness files exist.

## Reconstruct the task path

Trace the smallest relevant path:

```text
task entry
  -> applicable project instructions
  -> triggered Skills, tools, modules, and integrations
  -> agent decision and action
  -> project or external feedback
  -> claimed result
```

For each candidate, state how it changes agent behavior: routing, scope, attention, authorization, action, feedback, or result confidence. Presence in the repository is not evidence that a component triggered or helped.

Check that surfaces declared as default are actually reachable from the project's active entrypoints, and that formal adoption rules and examples direct agents through the same path.

## Assign the owning surface

Place each fact or control with its real owner:

| Need | Owner |
| --- | --- |
| Project facts, commands, branches, ownership, or policy | Project instructions, configuration, or owned documentation |
| Cross-project judgment or specialized procedure | A focused Skill |
| Optional governance used only after demonstrated need | The project's optional Harness layer |
| External mutation, approval, or irreversible boundary | Permission system, integration, hook, policy, or code with authority |
| Correctness or completion proof | Tests, checks, runtime evidence, or live external state |
| Historical explanation or extraction evidence | The project's provenance or historical evidence area |

If one existing surface owns the whole problem, keep the work there and use its focused workflow. Do not preserve a broad Harness review after the question has reduced to ordinary documentation, code simplification, Skill-boundary design, or decision-record maintenance.

## Judge the candidate

Choose one outcome for each supported candidate: retain, narrow, condition, move on demand, modify, remove, or wait for more evidence.

Before changing it:

1. State the protected function separately from its current wording, file, role, phase, or thread topology.
2. Identify the strongest current reason to keep it, including low-frequency severe failure prevention.
3. Check active consumers, analogous rules, overlapping Skills, and current project contracts.
4. Compare the current form with the smallest credible alternative.
5. Refuse to generalize one lightweight success across high-risk, long-running, irreversible, poorly observable, or tightly coupled tasks.

A credible result may retain the current Harness or conclude that evidence is insufficient.

## Apply only authorized changes

When edits are authorized:

1. Update the file or mechanism that owns the fact or control.
2. Search active analogous wording, inbound links, manifests, metadata, and validation inputs.
3. Preserve permissions, failure handling, recovery, negative guarantees, and result-evidence contracts.
4. Leave frozen history, provenance cases, generated output, and other repositories unchanged unless they are explicitly in scope.
5. Keep installation, distribution, version tracking, and repository synchronization out of agent-facing guidance unless the user specifically requests those maintenance tasks.

Do not treat prose containing `must` or `never` as mechanical enforcement. If the required gate, permission, test, or live-state check does not exist, report the gap.

## Verify the result

Use the target project's declared checks and the narrowest evidence that could fail for the affected behavior. Re-read modified entrypoints and inspect the final diff. Verify external claims from current external state when that state is in scope.

Do not claim that:

- a Skill loaded merely because its files exist;
- a boundary is enforced merely because prose describes it;
- tests prove user acceptance or remote completion;
- a local change updates another repository or installed copy.

## Return the Harness result

For review-only work, report:

- observed friction and its task impact;
- affected surface and owner;
- evidence strength;
- recommended outcome and strongest reason to keep the current form;
- unresolved hypotheses or user decisions.

For authorized edits, additionally report:

- files or mechanisms changed;
- contracts deliberately preserved;
- checks run and actual results;
- unverified or deferred items.

Do not require a new audit report, observation log, decision record, fixed thread topology, or cross-repository update unless the target project or user explicitly requires it.
