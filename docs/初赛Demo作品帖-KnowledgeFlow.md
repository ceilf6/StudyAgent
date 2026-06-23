# 学习工作 | KnowledgeFlow — AI 智能体驱动的学习平台，让知识轻松流入你的脑海

![1782222864788](image/初赛Demo作品帖-KnowledgeFlow/1782222864788.png)

## 一、Demo 简介

### 是什么

事情是这样的。

我在准备技术面试的时候，面对一堆零散的知识点，最大的痛苦不是「找不到资料」，而是资料太多太散，根本不知道该按什么顺序学。好不容易找到一个教程，讲到一半它默认你已经懂某个前置概念了，直接跳过去，然后我就卡在那里，进退两难。

学完之后更崩溃，完全不知道自己到底掌握了没有。

我就想，如果有一个工具，能默认我什么都不懂，一个知识点一个知识点地往前推，不跳步、不假设，每走一步都告诉我「你现在在哪、下一步去哪、走得对不对」，那该多好。

这就是 **KnowledgeFlow**，一个基于 AI 智能体的在线学习平台。

它通过智能提示词工程与知识图谱技术，帮学习者从零基础开始，一个知识点一个知识点地逐点突破。平台默认用户没有任何基础，讲解从前置概念开始，逐步推进，不跳步、不假设，每一步都为用户而走。

- **产品形态**，网站（Web App），已部署到 GitHub Pages，点开就能用
- **技术栈**，React 18 + TypeScript + TailwindCSS 3 + Vite + Zustand + React Router
- **AI 集成**，OpenAI 兼容 API（支持 OpenAI / DeepSeek / 自定义），流式输出
- **仓库地址**，https://github.com/ceilf6/KnowledgeFlow-StudyAgent

### 面向谁

说真的，我觉得这个痛点几乎每个人都遇到过。

学生群体，从小学到大学，课前预习、课后复习、考试备考，谁没被「不知道该先学哪个」折磨过。职场人士，想利用碎片时间学个新技能提升竞争力，但碎片化的资料让人根本没法系统学。终身学习者，对知识有持续追求，享受学习本身的乐趣，但苦于没有顺手的工具。教育工作者，想用 AI 辅助教学，把更多创造力释放出来。

### 主要功能（均可体验）

**1. 智能学习（核心亮点）** — AI 知识点讲解

这是我最想做成的一个功能。输入任意知识点，AI 会按「前置概念 → 核心定义 → 为什么重要 → 学习问法 → 答题模板 → 易错点 → 小练习」七步结构化讲解。默认零基础，不跳步。支持多轮对话追问，哪里不懂就追到哪里。

这七步不是随便拍的，是我自己在踩了无数「学到一半卡住」的坑之后，反推出来的一个完整学习闭环。前置概念解决「跳步」问题，核心定义和为什么重要解决「不知道学这干嘛」的问题，学习问法和答题模板解决「考试不会用」的问题，易错点和小练习解决「不知道掌握了没」的问题。

**2. 学习计划** — AI 知识路线规划

输入学习目标，AI 自动反推知识路线，按知识点维度组织（不写时间安排那种噪音），每个节点标注前置依赖和难度。你一看就知道该先学什么后学什么。

**3. 练习测试** — AI 出题与即时批改

输入知识点，AI 生成 3 道练习题（概念理解 + 简单应用 + 综合提升）。你作答之后 AI 批改，给出每题解析和评分。学完就测，测完就知道自己几斤几两。

**4. 资源管理** — 资料可读化

上传学习资料，TXT/MD/代码文件直接读取，PDF/图片/视频模拟 OCR/ASR 处理，转换为 AI 可读格式。把一堆乱七八糟的资料变成能学的东西。

**5. 设置** — API Key 管理

支持演示模式（无需 API Key 即可体验）和自定义 API（OpenAI / DeepSeek / 任意 OpenAI 兼容服务）。所有数据仅存储在浏览器本地，不上传服务器。

![1782222916310](image/初赛Demo作品帖-KnowledgeFlow/1782222916310.png)

![1782222970205](image/初赛Demo作品帖-KnowledgeFlow/1782222970205.png)

---

## 二、Demo 创作思路

### 灵感来源

这个创意来自我自己的真实学习经历。

准备技术面试那段时间，我面对海量的知识点，最大的困难不是「找不到资料」，而是三个更深层的问题。

资料太多太散，不知道该按什么顺序学。打开十个教程，十个讲的都不一样，有的从基础开始，有的默认你什么都懂，光是在它们之间来回切换就耗掉一半精力。

很多教程默认你有基础，跳过了关键的前置概念，看到一半就卡住。比如你想学「闭包」，它直接开始讲词法作用域，但如果你连「作用域」是什么都不清楚，后面每一步都是折磨。

学完之后不知道自己到底掌握了没有，缺乏有效反馈。看完了觉得都懂了，一做题全废，这种「虚假的掌握感」是最危险的。

我相信这不是我一个人的痛点。在应试教育背景下，学生需要高效的复习方法。职场人士需要持续学习新技能。终身学习者需要一个灵活的学习平台。学习资源碎片化严重，但系统化学习的工具却很稀缺。

### 想解决的问题

| 真实痛点                            | KnowledgeFlow 的解法                   |
| ----------------------------------- | -------------------------------------- |
| 学习资源分散，缺乏系统化整理        | AI 生成知识路线，按依赖关系排序        |
| 学习进度难以追踪和管理              | localStorage 持久化学习记录与练习成绩  |
| 缺乏个性化学习路径推荐              | AI 根据用户水平动态调整，零基础友好    |
| 难以找到适合自己水平的学习内容      | 默认零基础，前置概念补充，不跳步不假设 |
| 学习效果缺乏有效评估                | AI 出题 + 即时批改 + 错题解析          |
| 复杂资料（PDF/图片/扫描件）难以学习 | 资料可读化转换（OCR/ASR 模拟）         |

### 为什么做这个方向

**第一，AI 技术让个性化学习真正成为可能。**

以前个性化学习需要大量人力，一对一辅导成本极高，普通家庭根本负担不起。现在 AI 可以 24 小时随时讲解，根据每个人的水平调整内容，这让「人人可用的个性化学习」从理想变成现实。我有时候觉得，这是教育公平化最实在的一步。

**第二，「零基础友好」是被忽视的蓝海。**

市面上大多数学习平台默认用户有一定基础，导致初学者门槛很高。KnowledgeFlow 反其道而行，默认你什么都不懂，从前置概念开始讲，每次只讲一个最小知识点。这个差异化定位让产品有独特的价值。不是所有人都已经是专家，大多数人都是从一个知识点开始往前摸的。

**第三，「演示模式」降低体验门槛。**

这一点对评审特别重要。评审无需 API Key 即可通过演示模式体验完整产品流程，点开链接就能用。真实用户配置自己的 Key 后解锁无限知识点。这种设计兼顾了「易体验」和「真功能」，不是 demo 壳子，是真的能跑的产品。

---

## 三、Demo 体验地址

**在线体验链接**，https://ceilf6.github.io/KnowledgeFlow-StudyAgent/

> 体验说明，
>
> - 直接点击上方链接即可访问，无需登录
> - **默认演示模式**，无需配置 API Key，可体验「递归」「HTTP 协议」「光合作用」等示例知识点的完整讲解
> - **完整模式**，进入「设置」页配置你自己的 API Key（支持 OpenAI / DeepSeek / 任意 OpenAI 兼容服务），即可学习任意知识点
> - 体验路径，首页 → 智能学习（输入知识点）→ 学习计划（生成路线）→ 练习测试（AI 出题）→ 资源管理（上传资料）
> - 所有学习记录自动保存在浏览器本地

**开源仓库**，https://github.com/ceilf6/KnowledgeFlow-StudyAgent

---

## 四、TRAE 实践过程

> 本 Demo 完全基于 **TRAE IDE** 开发完成。以下是完整的开发流程，从创意生成到最终部署，每一步都深度依赖 TRAE 的 AI 能力。我不是写好代码再让 AI 跑，是从第一行字开始就是跟 TRAE 一起推出来的。

### 阶段 1，用 TRAE 生成创意提案

**任务目标**，把「AI 学习平台」的模糊想法，变成一份结构完整的创意提案。

**TRAE 实践，**

一开始我只有一个模糊的方向，想做一个 AI 驱动的学习平台，但具体做什么功能、面向谁、解决什么问题，全都没想清楚。我就在 TRAE IDE 里打开新项目，把脑子里的想法倒给 AI，「我想做一个 AI 驱动的学习平台，帮助用户从零基础开始系统化学习」。

TRAE 按一个很清晰的结构帮我把想法理顺了，「创意名称+介绍 / 目标用户及痛点 / 价值与意义 / 核心功能 / 技术亮点 / 产品愿景」。它不是简单复述我的话，而是帮我把模糊的想法拆成可执行的模块，逼着我去想「目标用户到底是谁」「痛点到底是什么」。

最后 TRAE 自动生成了 `docs/创意提案.md`，确定了赛道为「学习工作」，创意名称为「KnowledgeFlow」。

**产出文件**，`docs/创意提案.md`

> 【截图位 4，TRAE 生成创意提案的对话截图】
> 建议截图，在 TRAE IDE 中与 AI 对话生成创意提案的过程

**Session ID**，`【请填写 Session ID 1 — 双击 TRAE 对话复制】`

---

### 阶段 2，用 TRAE 生成创意产物 HTML 并重构页面设计

**任务目标**，用 TRAE Work 生成可展示的创意产物 HTML，并用 frontend-design 技能重构页面视觉设计。

**TRAE 实践，**

有了创意提案之后，我让它先生成一份可展示的创意方案 HTML，先把「长什么样」这件事定下来。

然后我调用了 TRAE 的 `frontend-design` 技能，这一步真的让我有点震撼。它不是套个模板完事，而是按高品质前端设计标准重新审视整个页面。设计风格定的是暗色编辑奢华风（Dark editorial luxury），金黑配色（#d4a853 on #0a0a0f），字体选了 Playfair Display + DM Sans。

它还主动实现了滚动渐显动画（IntersectionObserver）、视差光球效果、Hero 装饰环旋转动画这些设计细节。这些不是我提的需求，是它觉得「这样会更好看」自己加的。

**关键决策，**

选择「知识流入脑海」的视觉隐喻，用流动的光球和旋转的环表达「知识流转」。配色刻意避开常见的蓝紫色，选择更有辨识度的金绿配色，传达「知识与成长」的感觉。这个配色后来成了产品的视觉签名，一眼就能认出来。

**产出**，创意产物 HTML（后重命名为 `index.html` 用于 GitHub Pages 部署）

> 【截图位 5，TRAE 重构页面设计的对话截图】
> 建议截图，TRAE 中调用 frontend-design 技能重构页面的对话

**Session ID**，`【请填写 Session ID 2 — 双击 TRAE 对话复制】`

---

### 阶段 3，按 PRD 技术栈转换为 React + TypeScript + Vite 工程

**任务目标**，将单文件 HTML 创意产物，转换为可工程化、可维护的 React + TypeScript + Vite + TailwindCSS 项目。

**TRAE 实践，**

单文件 HTML 做创意展示没问题，但要做成真正的产品，必须工程化。我让 TRAE 先根据创意提案生成完整的 PRD（产品需求文档），包含用户角色、功能模块、页面详情、核心流程、UI 设计、技术架构、数据模型。这一步把「做什么」彻底想清楚了。

然后让 TRAE 按 PRD 技术栈搭建工程，React 18 + TypeScript + TailwindCSS 3 + Vite。它自动拆分了组件，`Nav / Hero / Stats / Features / Workflow / Users / Tech / CTA / Footer`，每个组件职责清晰。滚动渐显动画、视差光球、Hero 装饰环这些交互效果也全部迁移到了 React 组件里。

**产出文件**，完整的 React 工程结构，`src/components/*.tsx`，`vite.config.ts`，`tailwind.config.js`，`tsconfig.json`

> 【截图位 6，TRAE 搭建 React 工程的对话截图】
> 建议截图，TRAE 中按 PRD 生成 React 组件代码、配置 Vite/TailwindCSS 的对话

**Session ID**，`【请填写 Session ID 3 — 双击 TRAE 对话复制】`

---

### 阶段 4，构建功能产品（智能学习 + 练习 + 计划 + 资源 + 设置）

**任务目标**，把营销落地页升级为真正可体验的功能产品。用户可以输入知识点、获得 AI 讲解、生成学习计划、做练习、管理资料。这一步是整个项目的核心，也是最过瘾的一段。

**TRAE 实践，**

**4.1 架构设计**

先让 TRAE 设计前端架构。HashRouter（GitHub Pages 兼容）+ Zustand（状态管理 + localStorage 持久化）+ 自建 AI 客户端（OpenAI 兼容，流式输出）。

TRAE 生成了几个核心模块，`src/lib/ai.ts`（流式 API 客户端）、`src/lib/prompts.ts`（系统提示词，派生自 `docs/agent-prompts/AGENTS.md`）、`src/lib/markdown.ts`（Markdown 渲染器）、`src/lib/demo.ts`（演示模式预置回复）。

**4.2 状态管理**

TRAE 生成了 `src/store/settingsStore.ts`（API 配置，支持 OpenAI/DeepSeek/自定义/演示模式）和 `src/store/studyStore.ts`（学习会话、已学知识点、练习记录，全部 localStorage 持久化）。用户关掉浏览器再打开，学习记录还在。

**4.3 智能学习页（核心亮点）**

这是整个产品我最在意的一块。TRAE 按 AGENTS.md 中的「知识点讲解格式」设计系统提示词，严格遵循七步结构，前置概念 → 核心定义 → 为什么重要 → 学习问法 → 答题模板 → 易错点 → 小练习。

实现了流式输出（打字机效果）、多轮对话、会话管理、停止生成。演示模式预置了「递归」「HTTP 协议」「光合作用」三个完整讲解示例，评审点开就能看到效果，不用配 Key。

**4.4 学习计划页**

TRAE 按「知识点维度组织、不写时间安排噪音」的规则设计计划生成提示词。AI 根据学习目标反推知识路线，每个节点标注前置依赖和难度。你输入「JavaScript 闭包」，它给你排出一条从「变量」到「作用域」到「闭包」的完整路线。

**4.5 练习测试页**

TRAE 设计出题提示词，每次 3 道题（概念理解 + 简单应用 + 综合提升）。用户作答后 AI 批改，给出每题解析和评分，记录到本地。学完就测，测完就知道自己几斤几两。

**4.6 资源管理页**

TRAE 实现文件上传（拖拽 + 点击），文本类文件直接读取，PDF/图片/视频模拟 OCR/ASR 可读化处理。把一堆乱七八糟的资料变成能学的东西。

**4.7 设置页**

TRAE 设计四档服务商选择（演示/OpenAI/DeepSeek/自定义），API Key 安全存储在 localStorage。

**产出文件，**

- `src/pages/StudyPage.tsx`（智能学习）、`PlansPage.tsx`（学习计划）、`PracticePage.tsx`（练习测试）、`ResourcesPage.tsx`（资源管理）、`SettingsPage.tsx`（设置）、`LandingPage.tsx`（落地页）
- `src/components/AppNav.tsx`、`AppLayout.tsx`、`MarkdownView.tsx`
- `src/lib/ai.ts`、`prompts.ts`、`markdown.ts`、`demo.ts`
- `src/store/settingsStore.ts`、`studyStore.ts`

> 【截图位 7，TRAE 构建功能产品的对话截图】
> 建议截图，TRAE 中生成 StudyPage / AI 客户端 / 状态管理的对话

**Session ID**，`【请填写 Session ID 4 — 双击 TRAE 对话复制】`

---

### 阶段 5，配置 CI/CD 自动部署到 GitHub Pages

**任务目标**，让 Demo 每次推送到 main 分支时，自动构建并部署到 GitHub Pages，保证体验链接始终可用。

**TRAE 实践，**

这一步比较顺。让 TRAE 生成 GitHub Actions 工作流 `.github/workflows/deploy.yml`，配置监听 main 分支 push → npm ci → npm run build → 上传 artifact → 部署到 GitHub Pages。

有个细节值得提一下，TRAE 自动处理了 base 路径配置（Vite 的 `base: '/KnowledgeFlow-StudyAgent/'`），确保子路径部署资源加载正常。这个坑它提前帮我避了，省了不少调试时间。

**产出文件**，`.github/workflows/deploy.yml`

> 【截图位 8，TRAE 配置 CI/CD 的对话截图】
> 建议截图，TRAE 中生成 GitHub Actions 部署工作流的对话

**Session ID**，`【请填写 Session ID 5 — 双击 TRAE 对话复制】`

---

### 阶段 6，工程化 Harness 建设

**任务目标**，为项目搭建 OSS Harness（开源工程化框架），保证代码质量与协作规范。

**TRAE 实践，**

这一步我调用了 TRAE 的 superpowers 技能体系，按 SDD（Spec-Driven Development）流程先写设计文档再实现。说实话一开始我还觉得写 spec 是多此一举，但跑下来发现，先想清楚再动手，比边写边改效率高太多了。

TRAE 生成了 `docs/superpowers/specs/` 和 `docs/superpowers/plans/`，实现了 contract rules 脚本保护关键骨架文件，配置了 git hooks 做本地质量门禁，还添加了 PR 模板、Issue 模板、CODEOWNERS、contract-guard CI。

这套 Harness 不是花架子，后来每次改代码它都在帮我拦问题。比如改 AGENTS.md 这种关键文件时，contract rules 会强制要求同步改测试，不然 pre-push 钩子直接拦住。有好几次都是它帮我发现了遗漏。

**产出文件，**

- `scripts/workflows/contract-rules.mjs`、`contract-check.mjs`、`install-hooks.mjs`
- `scripts/tests/workflow-rules.test.mjs`
- `.githooks/pre-commit`、`.githooks/pre-push`
- `.github/PULL_REQUEST_TEMPLATE.md`、`.github/ISSUE_TEMPLATE/*.yml`、`.github/CODEOWNERS`
- `CONTRIBUTING.md`、`docs/workflow.md`、`docs/knowledge-contract.md`

> 【截图位 9，TRAE 建设 Harness 的对话截图】
> 建议截图，TRAE 中按 SDD 流程生成 spec、plan 并实现 contract 脚本的对话

**Session ID**，`【请填写 Session ID 6 — 双击 TRAE 对话复制】`

---

### 开发过程中的踩坑与心得

**踩坑 1，Vite 子路径部署资源 404**

部署到 GitHub Pages 之后，CSS/JS 资源全部 404，页面白屏。我当时就愣住了，本地跑得好好的怎么上线就废了。

排查下来发现，GitHub Pages 是子路径部署（`/KnowledgeFlow-StudyAgent/`），但 Vite 默认 base 是 `/`，资源路径全对不上。让 TRAE 改了 `vite.config.ts`，设置 `base: '/KnowledgeFlow-StudyAgent/'`，一下就好了。这个坑如果不踩一次，下次还是会踩。

**踩坑 2，HashRouter vs BrowserRouter**

BrowserRouter 在 GitHub Pages 上直接访问子路由会 404，因为静态服务器不认识前端路由。改用 HashRouter，URL 带 `#` 丑是丑了点，但完美兼容静态托管。这种取舍在 Demo 阶段是值得的，先跑起来比好看重要。

**踩坑 3，流式输出（SSE）解析**

OpenAI 流式响应需要逐行解析 `data:` 前缀的 SSE 格式，还要处理 buffer 拼接和 `[DONE]` 终止符。自己写很容易漏边界情况。TRAE 帮我实现了完整的流式解析器，把 buffer 拼接、分块解析、终止符处理都考虑到了。打字机效果出来那一刻，感觉太爽了。

**心得，**

**把任务拆小。** 不要一次性让 AI 做整个项目，而是按「创意 → 设计 → 工程 → 功能 → 部署 → 工程化」分阶段推进。每个阶段都有明确的输入和产出，AI 的输出质量也会高很多。

**保留 Session ID。** TRAE 每段对话都是开发过程的证据，双击即可复制。这次参赛我留了 6 个 Session ID，每个都对应一个关键阶段。

**用 superpowers 技能体系。** brainstorming / frontend-design / writing-plans / executing-plans 这些技能让开发流程更规范。特别是 SDD 流程，先写 spec 再实现，看着多一步，实际省了大量返工。

**演示模式是评审利器。** 让评审无需 API Key 就能体验完整流程，大幅降低体验门槛。这一点我觉得对所有参赛作品都适用，别让评审为了体验你的产品还要先去注册个 Key。

---

## 五、社区报名帖链接

> **【请填写】** 报名审核通过的社区报名帖链接
>
> 示例格式，https://forum.trae.cn/t/topic/xxxxx

---

## 附，项目信息

| 项目             | 链接                                               |
| ---------------- | -------------------------------------------------- |
| Demo 体验地址    | https://ceilf6.github.io/KnowledgeFlow-StudyAgent/ |
| 开源仓库         | https://github.com/ceilf6/KnowledgeFlow-StudyAgent |
| 创意提案         | 仓库内 `docs/创意提案.md`                          |
| 产品需求文档     | 仓库内 `.trae/documents/PRD.md`                    |
| 学习智能体提示词 | 仓库内 `docs/agent-prompts/AGENTS.md`              |
| 赛道             | 学习工作                                           |

---

> **发帖前自查清单（对照评审 4 维度），**
>
> - [ ] 标签已选 `学习工作`（与报名赛道一致）
> - [ ] 标题格式，学习工作 | KnowledgeFlow — AI 智能体驱动的学习平台
> - [ ] Demo 简介含产品截图（截图位 1-3）
> - [ ] TRAE 实践过程含关键步骤截图不少于 3 张（截图位 4-9）
> - [ ] Session ID 不少于 3 个（已留 6 个占位，请填写至少 3 个）
> - [ ] 体验链接已自测可访问（演示模式可直接体验）
> - [ ] 已附上报名通过的社区报名帖链接
> - [ ] 内容原创、版权清晰
