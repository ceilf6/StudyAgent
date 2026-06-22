# KnowledgeFlow - 工程开发提示词

本文件用于指导开发者开发 KnowledgeFlow 学习智能体平台本身。学习智能体的行为提示词已收纳至 `docs/agent-prompts/`。

## 项目概述

KnowledgeFlow 是一个 AI 智能体驱动的学习平台，让知识轻松流入用户的脑海。

- **官网**: https://ceilf6.github.io/KnowledgeFlow-StudyAgent/
- **仓库**: https://github.com/ceilf6/KnowledgeFlow-StudyAgent
- **赛道**: 学习工作
- **版本**: 1.0.0

## 技术栈

- **前端**: React@18 + TypeScript + TailwindCSS@3 + Vite
- **状态管理**: Zustand
- **路由**: React Router DOM
- **后端**: Express@4 + TypeScript
- **数据库**: PostgreSQL + Prisma ORM
- **文件存储**: Supabase Storage
- **AI集成**: OpenAI API / Claude API

## 项目结构

```
StudyAgent/
├── docs/                    # 文档与提示词
│   ├── agent-prompts/       # 学习智能体行为提示词（产品运行时使用）
│   │   ├── AGENTS.md
│   │   └── CLAUDE.md
│   ├── 创意提案.md
│   └── superpowers/         # 开发流程计划
├── src/                     # 前端源码（React + TS + Vite）
├── .github/workflows/       # CI/CD 与部署
├── .trae/documents/         # PRD 等需求文档
├── templates/               # 仓库模板
├── AGENTS.md                # 本文件：工程开发提示词
├── CLAUDE.md                # Claude 开发提示词
└── README.md
```

## 开发规则

### 代码规范
1. 使用 TypeScript 严格模式。
2. 组件使用函数式组件，优先使用 Hooks。
3. 样式使用 TailwindCSS，避免内联样式。
4. 提交前运行 `npm run lint` 和 `npm run build` 确保无错误。

### 分支策略
- `main`: 生产分支，保护分支
- `dev`: 开发主分支
- `feature/*`: 功能分支
- `fix/*`: 修复分支

### 部署
- 前端通过 GitHub Actions 自动部署到 GitHub Pages。
- 部署触发：推送到 `main` 分支。

## 学习智能体提示词

学习智能体（产品运行时）的行为提示词位于 `docs/agent-prompts/`：
- [`docs/agent-prompts/AGENTS.md`](docs/agent-prompts/AGENTS.md): 学习智能体核心行为规则
- [`docs/agent-prompts/CLAUDE.md`](docs/agent-prompts/CLAUDE.md): Claude 学习智能体配置

开发时请勿修改这些文件，除非明确需要调整学习智能体行为。
