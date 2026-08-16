---
name: sync-doc-site
description: Synchronize repository-owned documentation with a generated or projected documentation website. Use when publishing, updating, moving, or removing site pages; editing documentation mappings or navigation; diagnosing missing pages or broken projected links; or validating a documentation-site build.
---

# Synchronize a Documentation Site

Keep canonical documentation separate from disposable site output. Adapt this workflow to the repository's actual site generator, content mapping, locale model, and validation commands.

## Discover the site contract

Read the repository and documentation `AGENTS.md` files, then identify:

- the canonical editable content roots;
- the site generator and configuration;
- any page manifest, collection, routing, locale, or navigation schema;
- generated, cache, and build-output directories;
- link rewriting and asset-copying behavior;
- preview, focused build, link, and content-freshness commands.

Read current types and configuration before editing them. Do not assume that a manifest exists or that fields from another project apply.

## Classify the change

- **Edit an existing page:** change its canonical source. Change mappings only when route or navigation metadata changes.
- **Publish a new page:** place it in the repository-defined content tier and add the smallest mapping or navigation entry the current system requires.
- **Rename, move, or remove a page:** update the source, mappings, redirects when supported, and active inbound links atomically.
- **Publish generated content:** change the generator or its source data rather than editing generated output.
- **Change site structure:** prefer the existing configuration model; expand it only when it cannot express the required information architecture.

Keep the public site allowlist intentional. Do not publish internal plans, postmortems, maintainer instructions, or generated inventories merely because they are available in the repository.

## Preserve the source boundary

Never hand-edit or commit generated, cache, or build-output directories unless project rules explicitly designate them as versioned artifacts. Write normal canonical links in source documentation unless the projector contract requires another form.

For every changed link or asset, determine how the actual toolchain handles:

- mapped and unmapped repository pages;
- fragments and heading identifiers;
- images and other static assets;
- missing targets;
- locale counterparts and fallback pages, when present.

Fix source or configuration rather than inserting site-only paths into canonical prose as a shortcut.

## Preview and validate

Use the project's declared commands. A typical sequence is:

1. run local preview while editing when visual behavior matters;
2. run the focused projection or site-build check;
3. run repository link, formatting, and generated-content freshness checks affected by the change;
4. inspect the built route or rendered page when the failure surface is visual.

If a command, mapping file, or output policy is absent, report that fact instead of inventing a replacement during an ordinary content change.

Report canonical files changed, mappings or navigation entries changed, public routes affected, generated output intentionally left untouched, and exact checks run.

## Keep deployment separate

Synchronizing source into a successful site build does not necessarily publish it. Do not add hosting permissions, deployment workflows, domains, or external publication unless the user requested deployment and the repository's hosting policy is known.
