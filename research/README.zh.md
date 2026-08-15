# 研究仓库提取

[English](README.md) | 中文

本目录管理 `research/dsh-development-harness` 从 DeepSeek Harness 产品 monorepo 改造成独立开发 Harness 研究仓库的过程。

- [`source-lock.json`](source-lock.json) 记录不可变的提取来源、产品来源和规模基线。
- [`extraction-manifest.json`](extraction-manifest.json) 为每个受 Git 管理的顶层路径指定 R1 处置方式。
- [研究仓库章程](../.agents/notes/proposed/process/2026-08-15-development-harness-research-repository-charter.md) 定义目标仓库、结果波次、限制和验收标准。

提取工作以 manifest 为准。删除目标不能授权移除唯一研究证据；每个例外都必须说明研究问题，并且只保留能够回答该问题的最小案例材料。
