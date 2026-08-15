# AGENTS.md — 研究文档规范

`docs/` 只保留可复用方法、事故案例和机器执行确实需要的翻译资料。产品用户文档、运行时参考、生成目录和已删除源码的教程不属于研究语料，通过 [source lock](../research/source-lock.json) 指向的官方版本查阅。

## 文档结构

每份文档只能完整解释自己的主题。教程按完成可观察结果所需的顺序组织；参考资料明确查询范围，不要求顺序阅读。设计依据归 Agent Note，事故因果归 postmortem，操作方法归 cookbook，仓库导航归 `research/README.md`。

每个事实只有一个主要归属；其他位置用链接引用。不要保留手写文件目录、测试清单、迁移过程、评审经过或已经由脚本表达的状态。

## 语言政策

活跃研究语料以中文为唯一维护版本，不创建 `.zh.md` 和 `.i18n.yaml` 副本。Skill、提示词、协议样例或校准语料只有在英文直接影响模型或工具行为时才可保留英文；例外必须在 [语料清单](../research/r2-corpus-manifest.json)中标为 `execution-language`。

## 写作规则

- 每个 Markdown 段落使用一条物理行。
- 写当前事实、约束、失败方式和后果，不记录推导过程。
- 使用明确的操作、类型、字段或检查名称，避免空泛术语。
- 不手工修补生成物；修改来源后重新生成。
- 移动或删除文档时同步修复所有活跃入链。

`pnpm run verify-md-links`、`pnpm run verify-md-wrap`、`pnpm run verify-mermaid` 和 `pnpm run verify-doc-budgets` 是文档基础检查。

## 字数预算

[doc-budgets.manifest.json](../scripts/doc-budgets.manifest.json) 记录常驻文档上限。超限时依次选择归位、压缩、最后才是有依据地提高上限；字数不是删除有效内容的目标。
