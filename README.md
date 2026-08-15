# DSH 开发 Harness 研究仓库

本仓库从 DeepSeek Harness（DSH）的真实开发历史中提取研究材料，用于理解 Agent 工作流、工程规则、决策记录、质量门禁、评审方式和证据组织如何共同支撑软件开发。它不是可运行、可构建或可发布的 DSH 产品仓库。

研究分支独立演进，不整体合回产品 `main` 或 `master`。适合产品采用的结论或工具需要经过单独评审后显式移植。

## 从哪里开始

1. 阅读[研究导航](research/README.md)，了解当前材料、工具和案例。
2. 阅读[现场还原研究章程](.agents/notes/implemented/process/2026-08-15-scene-reconstruction-driven-development-harness-research.md)，了解如何开展研究。
3. 通过 [source lock](research/source-lock.json)确认研究材料对应的官方仓库和固定提交。

## 仓库内容

- `.agents/notes/`：当前研究提案和已经采用的研究治理决定。
- `docs/cookbook/`：仍有研究价值的研发操作方法。
- `docs/postmortem/`：开发门禁或运行机制失效的事故案例。
- `docs/i18n/`：翻译提示词、术语和语体校准材料。
- `research/cases/`：从 DSH 开发历史中保留的 Notes、Skills、脚本和翻译样本；它们是现场证据，不是当前规则。
- `research/`：来源锁、提取清单、语料分类和研究导航。
- `scripts/`：只验证当前研究语料和保留工具的定向检查。

## 安装与验证

需要 Node.js `^22.19.0` 或 `>=24.0.0`，以及 pnpm `11.7.0`。

```sh
pnpm install --frozen-lockfile
pnpm run check
```

如需本地 Git hook，可运行：

```sh
pnpm run hooks:install
```

仓库不提供 DSH CLI、产品构建、产品测试、网站或发布命令。需要查看原产品源码时，使用 [source lock](research/source-lock.json) 中的官方仓库和固定提交，在临时 checkout 中读取或重放，不把完整产品目录复制回来。

## 研究原则

研究从真实开发现场出发：先固定任务、源码、规则、工具、操作和结果，再区分直接事实、证据支持的还原与研究推断。一个现场只产生暂定结论；需要跨现场验证后，才能提升为稳定方法。研究默认只写必要记录，只有重复使用价值已经得到证明时才提取 Skill 或脚本。

## 非目标

- 继续开发或分发 DSH 产品。
- 保存完整产品源码作为备份。
- 为研究材料建设展示站点、依赖图、知识图谱或任务平台。
- 把所有历史 Skills 和脚本通用化。

## 来源与许可

提取来源、固定提交和 R0–R4 结果见 [research/source-lock.json](research/source-lock.json)。仓库使用 [MIT License](LICENSE)；历史案例仍保留其 DSH 来源语境和固定来源链接。
