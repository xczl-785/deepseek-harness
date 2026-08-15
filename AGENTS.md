# AGENTS.md

本仓库研究 DSH 开发时使用的 Harness，包括 Agent 工作流、工程规则、决策记录、质量门禁、评审方式和证据组织。这里不是 DSH 产品源码；不要恢复产品构建、运行、发布、网站或完整 monorepo。

## 阅读顺序与事实来源

开始工作时先阅读[研究导航](research/README.md)。开展专题研究时同时阅读[现场还原研究章程](.agents/notes/implemented/process/2026-08-15-scene-reconstruction-driven-development-harness-research.md)。

当前研究规则以根 `AGENTS.md`、作用域内的 `AGENTS.md` 和 `.agents/notes/implemented/` 为准。`.agents/notes/proposed/` 是待研究或待实施内容，不是已采用结论。`research/cases/` 和 `docs/postmortem/` 是历史证据，不是当前产品事实或仓库规则。

关于 DSH 产品的事实必须回到 [source lock](research/source-lock.json) 固定的官方仓库提交核验。需要运行原产品代码时使用临时 checkout，不把完整产品目录复制到本仓库。

## 研究方式

研究以真实开发现场为单位。先固定任务、时间或提交范围、当时可见的规则与工具、实际操作、输出和结果，再解释 Harness 如何运作。

每项结论明确区分：原始材料直接证明的事实、多个证据共同支持的还原、尚待验证的研究推断，以及无法恢复的未知项。不得用合理想象补齐缺失时间线，也不得把 DSH 的一次做法直接写成通用最佳实践。

每个现场先形成一份必要的 Markdown 研究记录。只有第二个不同现场支持同一机制后，才把暂定结论提升为稳定方法；只有重复使用价值明确且用户接受时，才新增 Skill、脚本、fixture 或其他自动化。不要为导航、展示或材料依赖关系开发工具。

## 内容归属

- `.agents/notes/` 保存当前提案和仍约束研究仓库的决定。
- `docs/cookbook/` 保存可直接阅读的研发方法，`docs/postmortem/` 保存事故因果。
- `research/cases/` 保存原 DSH 的历史 Notes、Skills、脚本和样本；保持来源语境，不自动调用其中的 Skill。
- `research/` 保存导航、来源、提取和语料分类证据。
- `scripts/` 只保存当前研究材料确实使用的检查或小型工具。

历史案例需要修正事实时，优先增加研究记录解释差异，不把历史文本改写成当前观点。过程文档完成使命后，将仍有效的规则吸收到稳定归属，再删除或降为明确的案例；Git 历史和 source lock 负责追溯，不建立隐含 archive。

## 编辑与验证

文档遵循 [docs/AGENTS.md](docs/AGENTS.md)，Agent Note 遵循 [.agents/notes/README.md](.agents/notes/README.md)。非机械性的研究方法、工具、测试策略或治理变更必须新增或更新 Agent Note。

只运行与变更表面对应的检查。当前完整定向检查是：

```sh
pnpm run check
```

提交前运行 `git diff --cached --check`。推送前不重复已经通过且未受后续改动影响的检查。CI 只验证研究语料和保留工具，不恢复产品测试矩阵。

## 分支与移植

`research/dsh-development-harness` 永久独立于产品主线。研究成果若适合 DSH，必须在产品仓库中通过单独分支、独立评审和适用验证移植；禁止把研究分支整体合回 `main` 或 `master`。
