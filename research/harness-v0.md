# 最小开发 Harness v0

Harness v0 把当前仓库已经运行的规则、范围报告、决策记录、文档检查、Git hook 和 CI 连接成一条轻量开发链。它先服务本研究仓库；历史 DSH Skills 只提供设计证据，不会被自动调用或原样复制。

## 场景地图

| 阶段 | Harness 场景 | 当前资产 | 等级 | 当前处置 |
| --- | --- | --- | --- | --- |
| 任务进入 | 读取仓库身份、当前规则、历史证据边界 | 根与作用域 `AGENTS.md`、`research/README.md` | L1 | v0 |
| 开始或完成改动 | 核验仓库、分支、真实 base 和四层变更范围 | `change-scope` 及测试 | L1 | v0 |
| 形成非机械性决定 | 判断是否新增或更新 Agent Note | `.agents/notes/README.md`、分类与格式门禁 | L1 | v0 |
| 修改文档 | 决定唯一归属，检查链接、fragment、段落和预算 | `docs/AGENTS.md`、Markdown 门禁 | L1 | v0 |
| 选择验证 | 根据范围和行为选择最窄 owning check，记录未运行项 | 根 `AGENTS.md`、`package.json` 叶子命令 | L1 | v0 |
| commit | 检查 staged diff 的空白错误 | Lefthook pre-commit 与 pre-merge-commit | L1 | v0 |
| push 与 CI | 当前 pre-push 运行完整研究检查；CI 对远端 SHA 重复验证 | `lefthook.yml`、`research-ci.yml` | L1 | v0，H2 观察重复成本 |
| PR 证据 | 保存来源、执行的检查、未验证和 Deferred | PR 模板、持久引用规则 | L1/L2 | v0 采用最小字段 |
| 普通或 stacked PR 评审 | 验证评论、修复归属、逐层传播和重新审计 | cookbook、历史 Skills 与 Notes | L2/L3 | H3 按真实需求加入 |
| 远端 stack、Project 和浏览器证据 | 修改共享 GitHub 状态或发布可视化证据 | 历史 stack、review、browser 材料 | L4 | H4 先核验再使用 |
| 事故反馈 | 从失败中判断需要规则、测试、Skill 还是机制修正 | postmortem 与历史 Notes | L3/L4 | 由实际失败触发 |

L1 可以直接使用；L2 需要删除 DSH 假设后轻量适配；L3 只作研究材料；L4 涉及高风险状态或证据冲突，需要按需恢复现场和重放。

## 运行方式

### 1. 建立当前事实

先阅读作用域内规则，再确认 checkout 和分支。base 必须来自当前远端或 PR/stack 事实，不能根据当前分支名猜测。

```sh
git status --short --branch
git rev-parse --show-toplevel
pnpm --silent run change-scope --base <verified-base-ref>
```

`change-scope` 不 fetch、不查询托管平台、不选择测试。它返回固定 base、head、merge base，以及 committed、staged、unstaged、untracked 四组路径；调用者负责提供正确 base，并根据报告解释受影响行为。

### 2. 决定是否保存依据

非机械性的研究方法、工具、测试策略或治理变化需要新增或更新 Agent Note。纯机械编辑不需要空 Note。新增前先搜索同主题记录；取代旧决定时吸收仍有效的独有依据并修复入链，不能把旧决定改写成相反决定。

文档内容先决定归属：常驻规则进 `AGENTS.md`，决策依据进 Agent Note，操作方法进 cookbook，事故因果进 postmortem，导航进 `research/README.md`，历史产品材料进 `research/cases/`。

### 3. 选择最小证据

范围报告只提供路径事实，验证选择仍需判断改动能够影响什么。选择会因该回归而失败的最窄检查；共享机制或跨切面变化才扩大范围。已经通过且后续改动未触及其输入的检查不重复运行。

| 改动表面 | 最小起点 |
| --- | --- |
| `scripts/` 行为 | owning Vitest 文件；按影响增加 typecheck 或 lint |
| Agent Note | `pnpm run verify-agent-notes` |
| 语料增删或分类 | `pnpm run verify-corpus-classification` |
| Markdown 路径或标题 | `pnpm run verify-md-links` |
| Markdown 行文或常驻入口 | `pnpm run verify-md-wrap` 与 `pnpm run verify-doc-budgets` |
| Mermaid、公开来源链接、Skill 元数据或翻译提示词 | 对应的单项 `verify-*` 命令 |
| 无法可信缩小的跨仓库变化 | `pnpm run check` |

验证记录至少说明命令、结果、所覆盖行为，以及有意未运行的检查和理由。push 成功不等于 CI 已通过；pending 必须报告为 pending。

### 4. 提交与推送

提交前检查 staged diff，而不是用整个 worktree 代替索引：

```sh
git diff --cached --check
```

当前研究仓库的 pre-push 会运行 `pnpm run check`。这是当前小型仓库的真实配置，不等于历史 DSH 的“窄 hook、CI 全量”设计。H2 在两次真实任务后根据重复耗时、失败相关性和反馈价值决定是否缩窄；在此之前不静默替换。

普通 push 使用 Git。改写远端历史必须获得明确授权并使用精确 lease，禁止裸 `--force`。推送后核对远端 ref 与本地 `HEAD`，再读取 CI 状态；旧 SHA 上的检查、批准和行内锚点不是当前证据。

## 安装、验证与移除

新 checkout 安装依赖；需要 Git hook 时显式安装：

```sh
pnpm install --frozen-lockfile
pnpm run hooks:install
```

验证核心范围能力和当前组合：

```sh
pnpm exec vitest run scripts/change-scope.spec.ts
pnpm run check
```

移除 hook 前先记录当前归属，然后使用 Lefthook 的非强制移除路径：

```sh
git config --show-origin --get core.hooksPath
pnpm exec lefthook uninstall
pnpm exec lefthook check-install
```

不要使用 `lefthook uninstall --force`，也不要在未确认归属时手工清空 `core.hooksPath`。若要从其他仓库完全移除这套能力，还需同步删除新增的 package scripts、脚本、依赖、CI 和规则引用，并验证原有流程不再调用它们。

## v0 不包含

- 自动从文件路径生成测试清单或判断变更是否实质性的工具。
- 历史 DSH pre-push、文档、prose、stack 或 browser Skill 的完整复制。
- 产品 build、coverage、E2E、provider、package、vendor 或 Node 平台矩阵。
- worktree-local hook 安装器、Git 仓库格式迁移和自定义锁协议。
- GitHub stack 关联、同步、合并、分支删除、Project 状态或 PR 正文自动修改。
- codemap、文档依赖图、研究数据库、展示站点或通用门禁平台。

这些内容只有出现真实使用需求、冲突或失败时才进入 H3/H4，不作为 v0 投入使用的前置工作。

## 首次实际使用

H0/H1 章程调整使用 `origin/research/dsh-development-harness` 作为已核验 base 调用了 `change-scope`。报告固定了 base/head/merge-base SHA，分别列出旧章程删除、现有入口修改和新章程文件，命令前后工作树状态保持不变。随后按改动表面运行 Agent Note、语料分类、Markdown 链接、段落和预算检查；这些检查均通过。该结果证明 v0 已经能够在真实研究变更中提供范围反馈和验证选择，push 与 CI 反馈留到本检查点交付时完成。
