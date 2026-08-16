---
name: record-browser-gif
description: Record a browser or Web UI interaction as a short, optimized, verified GIF using state-based frame capture and deterministic encoding. Use when asked to make, record, or generate a GIF demonstrating a browser workflow; publish or attach it remotely only when the user explicitly authorizes that action and project rules define the destination.
---

# Record a Browser GIF

Produce a truthful local demonstration from a single evidence run. Keep recording separate from any remote publication.

## Establish the claim

Before interacting with the application, identify:

- the exact behavior the GIF must demonstrate;
- the source tree or commit being demonstrated when provenance matters;
- the application origin, build or development mode, transport, and any fixture or mock mode;
- the repository's start, build, cleanup, artifact, and privacy rules.

Do not silently substitute fixtures, mocks, synthetic events, or test-only hooks for a requested real flow. If credentials or a required service are unavailable, report the limitation. Never read or expose credential values.

## Isolate one evidence run

Use the cleanest isolation the project supports: fresh scratch state, a dedicated port, a known workspace, and a fresh browser context when practical. If the user's existing browser state is required, say so in the provenance.

Every published frame for one storyboard must come from the same application process, state roots, workspace, browser context, and scenario run. If capture automation fails in a way that invalidates continuity, discard the frames and repeat the run. Stop processes by PID or an exact command match; avoid broad kill patterns.

## Capture semantic states

1. Use an available browser-control capability that fits the requested browser state.
2. Choose three to six states that tell one story, such as initial, entered, running, settled, and detail.
3. Keep one viewport and crop. Name frames lexically: `00-initial.png`, `01-running.png`, and so on.
4. Store frames and the local GIF only in a project-approved ignored or temporary path. Create the directory before capture.
5. Before each screenshot, wait for a concrete UI condition such as an exact label, enabled control, changed title, stable status, or exact completed output. Do not use a fixed delay as proof of state.
6. Require locators to identify the intended element unambiguously. Prefer exact accessible names or exact trimmed text over body substring checks that can match echoed input.
7. When the claim concerns a tool call, rejection, or recovery, include a frame showing its identity and stable status together with the downstream result.
8. Capture no secrets, personal information, unrelated tabs, or transient notifications.

Use the browser's screenshot API and save returned image bytes directly.

## Encode deterministically

Require `python3`, `ffmpeg`, and `ffprobe`. Report missing dependencies rather than installing them without authorization.

Run the bundled encoder from this Skill's absolute directory:

```sh
export BROWSER_GIF_SKILL_DIR=/absolute/path/to/record-browser-gif
python3 "$BROWSER_GIF_SKILL_DIR/scripts/encode_gif.py" \
  /absolute/path/to/frames \
  /absolute/path/to/demo.gif \
  --durations 1.5,1.5,1.5,3.5 \
  --fps 10 \
  --max-width 1200 \
  --colors 128
```

One duration applies to every frame; otherwise provide one positive duration per frame and hold the final state longest. The encoder rejects fewer than two frames, mismatched dimensions or durations, invalid limits, accidental overwrite, unexpected duration, and output over `--max-bytes`.

For an oversized artifact, reduce width first, then colors or frame rate, while preserving readable text. Use `--force` only after resolving the exact output path.

## Verify the artifact

1. Check the encoder's JSON summary: path, source and encoded frame counts, dimensions, duration, and byte size.
2. Inspect the encoded GIF itself for order, legibility, final hold, and sensitive content. Decode representative GIF frames when the viewer cannot show animation.
3. Check repository status and confirm frames and output exist only in approved ignored or temporary paths.
4. Return the absolute local GIF path and state the demonstrated tree or commit, application mode, transport, browser-state exception, and whether real or fixture-backed services were used.

Stop after local verification unless remote publication is both requested and authorized.

## Publish only under project rules

Remote publication is not a built-in assets-branch workflow. Before any push, upload, pull-request edit, or other remote mutation:

1. Confirm the user explicitly requested or authorized publication.
2. Read the project's artifact storage, branch, pull-request, and retention rules.
3. Revalidate that the artifact still demonstrates the current target tree or pull-request head.
4. Verify the destination will not pollute a long-lived source branch or expose private content.
5. Publish with the project's approved mechanism, then verify the remote checksum, content type, visibility, and rendered embed when those checks are available.

If the project provides no publication policy or safe destination, return the verified local artifact and ask where it should be published. Never invent an assets branch, force-push media history, or edit a pull request merely because recording succeeded.
