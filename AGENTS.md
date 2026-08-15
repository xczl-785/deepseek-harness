# AGENTS.md

本仓库研究 DSH 开发时使用的 Harness，包括 Agent 工作流、工程规则、决策记录、质量门禁、评审方式和证据组织。这里不是 DSH 产品源码；不要恢复产品构建、运行、发布、网站或完整 monorepo。

## 阅读顺序与事实来源

开始工作时先阅读[研究导航](research/README.md)。开展专题研究或提取 Harness 时同时阅读[场景驱动研究与采用章程](.agents/notes/implemented/process/2026-08-15-scenario-driven-development-harness-adoption.md)。

当前研究规则以根 `AGENTS.md`、作用域内的 `AGENTS.md` 和 `.agents/notes/implemented/` 为准。`.agents/notes/proposed/` 是待研究或待实施内容，不是已采用结论。`research/cases/` 和 `docs/postmortem/` 是历史证据，不是当前产品事实或仓库规则。

关于 DSH 产品的事实必须回到 [source lock](research/source-lock.json) 固定的官方仓库提交核验。需要运行原产品代码时使用临时 checkout，不把完整产品目录复制到本仓库。

## 研究方式

研究以 Harness 使用场景为单位，说明触发条件、参与者、输入、动作、反馈、输出、失败方式和适用限制。每个场景同时判断现有资产属于直接可用、轻量适配、研究材料还是需要深挖，并优先交付能在真实任务中验证的最小切片。

快速理解不能把推断写成事实，也不能把 DSH 的一次做法直接写成通用最佳实践。历史现场还原只用于材料冲突、高风险约束、实际试用失败或重要替换决策；普通场景不以完整考据作为采用前置条件。

默认让 subagent 并行处理不同场景，主线程统一场景地图、复用等级和正式产出。只有当前使用价值明确时才新增 Skill、脚本、fixture 或自动化；不要为导航、展示或材料依赖关系开发工具。

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
