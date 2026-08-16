# Agent Development Harness 源仓库

本仓库维护可安装到具体项目的开发 Harness Skills、规则和小型工具。当前先把通用 Skills 复制到项目自己的 `.agents/skills/` 试用；稳定后再考虑全局安装。这里不是某个具体项目的配置仓库，也不提供可运行、可构建或可发布的产品代码。

通用源码保存在当前分支，项目分支模型、检查命令、目录和团队政策留在项目自己的 `AGENTS.md`。项目试用发现通用问题时，同时修正本仓库源码和仍在试用的项目副本；不要把一个项目的特例提升为 Harness 默认。

## 从哪里开始

1. 阅读 [`.agents/skills/`](.agents/skills/) 中可安装的通用 Skills。
2. 阅读[项目级 Skill 试用决定](.agents/notes/implemented/process/2026-08-16-project-local-skill-staging.md)，了解源仓库、项目副本和后续全局安装的边界。
3. 需要追溯设计来源时再进入[研究导航](research/README.md)和 [source lock](research/source-lock.json)。

## 仓库内容

- `.agents/skills/`：已删除明显项目绑定、可安装到项目中筛选的通用 Skill 源码。
- `.agents/notes/`：当前 Harness 提案和已经采用的治理决定。
- `docs/cookbook/`：仍有研究价值的研发操作方法。
- `docs/postmortem/`：开发门禁或运行机制失效的事故案例。
- `docs/i18n/`：翻译提示词、术语和语体校准材料。
- `research/cases/`：保留的历史 Notes、Skills、脚本和翻译样本；它们是来源证据，不是当前规则。
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

仓库不提供产品 CLI、构建、测试、网站或发布命令。需要查看来源产品源码时，使用 [source lock](research/source-lock.json) 中的固定提交，在临时 checkout 中读取或重放，不把完整产品目录复制回来。

## 研究原则

Harness 先通过项目级安装接受真实任务检验。Skill 只保存跨项目稳定的判断和工作流，项目事实由作用域规则提供；误触发、缺失输入和实际摩擦优先通过使用反馈修正，只有证据冲突、高风险约束或试用失败时才深挖历史现场。

## 非目标

- 开发或分发来源产品。
- 保存完整产品源码作为备份。
- 为研究材料建设展示站点、依赖图、知识图谱或任务平台。
- 把项目命令、分支模型或团队政策写进通用 Skill。

## 来源与许可

本 Harness 最初从 DeepSeek Harness 的开发工作流中提取。固定来源、研究提交和 R0–R4 结果集中记录在 [research/source-lock.json](research/source-lock.json)；活跃 Skill 不重复讲述来源历史。仓库使用 [MIT License](LICENSE)，历史案例保留原始语境和固定来源链接。
