# Agent Notes

Agent Note 记录开发工具、研究方法和治理规则中无法仅由脚本表达的决策依据、落选方案、后果与验证要求。本研究分支只维护中文主语料。

## 目录与分类

活跃记录位于 `{lifecycle}/{class}/yyyy-mm-dd-topic-title.md`：

- `proposed/`：尚未实施或只实施了一部分的提案。
- `implemented/`：已经实施且仍能指导研究仓库工作的决策。
- `rejected/`：仍能阻止一种现实误用的落选方案。

分类是 `feature`、`bug-fix`、`simplification`、`architecture`、`process`、`testing`。研究仓库优先使用 `process` 和 `testing`；只有研究工具本身的结构或行为确实需要时，才使用其他分类。

## 语料生命周期

活跃记录必须对当前研究仓库仍有决策价值。产品实现记录、已经失去现实误用风险的拒绝方案，以及不再约束任何保留工具的过程记录直接退出工作树；不要为了数量目标删除不可替代依据。

退出内容由 Git 历史和 [source lock](../../research/source-lock.json) 追溯，不建立本地 archive。需要引用产品决策时，链接到 source lock 固定的官方提交。不要把历史材料重新复制成活跃权威。

新增 Agent Note 时应检查同主题记录。完全取代旧决定时，把仍有价值的依据、落选方案、后果和验证要求合并到新权威，再删除旧记录；部分取代时保留并交叉链接。

## 文件格式

前三行固定为：

```markdown
# Agent Note: <标题>

Status: <状态>
```

状态必须与目录一致：`proposed`、`implemented`，或 `rejected — <原因>`。

`proposed` 使用 `## Problem`、`## Proposal`、`## Alternatives considered`、`## Acceptance criteria`、`## Risks`。`implemented` 使用 `## Problem`、`## Decision`、`## Alternatives considered`、`## Consequences`。`rejected` 至少保留 `## Problem`、`## Proposal` 和 `## Alternatives considered`。

每份记录都必须写出真实考虑过的替代方案和落选原因。2026-07-05 之前且无法从记录恢复替代方案的文件可以使用既有的 `alternatives-not-recorded` 格式注释。

## 何时新增 Agent Note

非机械性的研究工具、流程、测试策略或治理变更必须新增或更新一份 Agent Note。`pnpm run verify-agent-notes` 检查目录分类和格式。
