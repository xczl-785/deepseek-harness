# 开发 Harness 研究导航

本分支研究开发 DSH 时使用的方法、Skill、自动化和证据组织方式，不提供可运行或可发布的 DSH 产品。活跃语料使用中文；英文只作为明确标记的模型输入或历史样本。

## 当前规则与研究议程

- [改造章程](../.agents/notes/proposed/process/2026-08-15-development-harness-research-repository-charter.md)定义 R0–R4 的完整路线。
- [中文主语料决策](../.agents/notes/implemented/process/2026-08-15-chinese-primary-research-corpus.md)定义语言、历史和分类政策。
- [活跃提案](../.agents/notes/proposed/)保存仍值得研究的方法问题；`implemented/` 只保存当前研究仓库的已实施决定。

## 可复用工具

- [`scripts/`](../scripts/)保存分类、链接、Markdown、提示词、变更范围和静态检查工具；运行 `pnpm run check` 验证当前集合。
- [翻译提示词](../docs/i18n/translation-prompt.md)、[术语表](../docs/i18n/terminology.md)和[语体样例](../docs/i18n/style-samples.md)是仍可执行的翻译研究工具。
- 当前没有活跃仓库 Skill。原 DSH Skills 作为研究现场证据保存在 [`cases/skills/`](cases/skills/)，不会被自动调用。

## 方法与案例

- [文档方法](../docs/cookbook/)保存评审和 stacked PR 操作方法。
- [事故案例](../docs/postmortem/)保存能够解释开发门禁失效原因的完整因果记录。
- [`cases/notes/`](cases/notes/)保存从官方产品开发中筛选出的高价值决策样本，但不作为当前权威。
- [`cases/skills/`](cases/skills/)和 [`cases/scripts/`](cases/scripts/)保存产品绑定工具的历史现场；只有具体研究证明具有复用价值时，才另行提取。
- [`cases/translation/gold/`](cases/translation/gold/)保存翻译提示词测试使用的英中 gold pair；这些英文文件属于模型行为输入，不代表双语维护政策。

## 来源与分类证据

- [`source-lock.json`](source-lock.json)记录不可变来源、规模基线和各波次结果。
- [`extraction-manifest.json`](extraction-manifest.json)记录 R1 顶层处置。
- [`r2-corpus-plan.json`](r2-corpus-plan.json)记录 R2 审核过的保留名单；[`r2-corpus-manifest.json`](r2-corpus-manifest.json)分类当前每份 Note、文档、Skill 和脚本。
- [`r1-source-link-rewrite.json`](r1-source-link-rewrite.json)与 [`r2-source-link-rewrite.json`](r2-source-link-rewrite.json)记录固定到官方源码提交的链接转换。

R3 只核验现有工具的最低可用性，不为历史案例建设通用框架。R4 将重写根 `README.md` 与 `AGENTS.md` 并完成新 checkout 验收；在此之前，根文件中的产品正文只是待清理历史材料。
