# Agent Note: 孵化基于真实任务证据的 Harness 调整 Skill

Status: proposed

## Problem

真实试用中，Agent 曾把“以普通项目 Agent 视角核对 Harness”偏移成安装、分发和副本维护审计，也曾把远端或 PR 的比较基准语境推广为通用项目前提。现有 `govern-docs`、`review-prose`、`find-simplifications` 和 Skill 边界方法分别拥有局部表面，但没有一个结果契约负责跨规则、Skills、工具和集成判断 Harness 是否帮助真实任务。

## Proposal

在 `.agents/skills/refine-project-harness/` 孵化一个只允许显式调用的通用判断 Skill。它从真实任务路径和可观察摩擦出发，区分 Agent 使用面、维护面、项目事实、外部硬边界和历史证据，再形成保留、收窄、修改、移除或继续观察结论。Skill 只拥有判断路径；项目规则拥有项目事实，权限与集成拥有外部副作用边界，测试和实时状态拥有结果证明。

第一版只包含 `SKILL.md` 和 `agents/openai.yaml`，不增加脚本、参考资料、固定 Thread、同步流程或强制审计文档。当前工作区也保存同名试用包，这是用户明确指定的发现位置；Skill 正文不携带这两个仓库的路径或维护过程。

## Alternatives considered

- **只在根规则增加一条从真实任务评估 Harness 的原则**：更薄且没有新路由成本，但尚不能证明它能稳定处理跨表面 Owner、触发质量和结果契约；前向测试将把它作为 component-minus 基线。
- **扩展 `govern-docs` 或 `find-simplifications`**：会把跨 Harness 判断塞进只拥有文档或简化问题的 Skill，扩大原有触发面并混淆结果契约。
- **立即提升为用户全局 Skill并允许隐式触发**：缺少跨项目复用和误触发证据，也可能让一个旨在减少注意力负担的 Skill 自身成为常驻负担。

## Acceptance criteria

- 两个项目位置中的 Skill 包内容一致，且通过各自仓库声明检查；若通用快速校验器不支持目标宿主要求的调用元数据，明确记录不兼容而不削弱手动调用边界。
- Skill 能在隔离的真实任务材料中回到 Agent 使用路径，正确区分 Owner、授权与结果证明。
- 与无 Skill 和较薄根规则基线相比，独立 Skill 在视角、范围、Owner 或结果契约上显示可观察增益。
- 普通任务无 Harness 问题、问题只属于单一文档或 Skill 边界时，不产生仓库级 Harness 审计。
- 如果较薄方案达到同等结果，或独立 Skill 的路由与 Context 成本超过收益，则合并或删除候选包。

## Risks

- Harness 一词覆盖面过宽，可能造成误触发、无证据清理或研究化偏航。
- 两个项目位置可能发生内容漂移；当前只验证本次用户指定的双位置，不把同步流程写入使用侧 Skill。
- 一次成功不能证明跨项目稳定性，H2 前向测试后仍需保留孵化状态和显式调用策略。
