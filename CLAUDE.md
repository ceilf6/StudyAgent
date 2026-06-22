# KnowledgeFlow - Claude 开发提示词

本文件用于指导 Claude 协助开发 KnowledgeFlow 学习智能体平台。

## 项目信息

- **项目名称**: KnowledgeFlow
- **口号**: AI智能体驱动的学习平台，让知识轻松流入你的脑海
- **官网**: https://ceilf6.github.io/KnowledgeFlow-StudyAgent/
- **仓库**: https://github.com/ceilf6/KnowledgeFlow-StudyAgent

## 技术栈

- 前端: React@18 + TypeScript + TailwindCSS@3 + Vite
- 状态管理: Zustand
- 路由: React Router DOM
- 后端: Express@4 + TypeScript
- 数据库: PostgreSQL + Prisma ORM
- 文件存储: Supabase Storage
- AI集成: OpenAI API / Claude API

## 开发指引

1. 遵循 [AGENTS.md](AGENTS.md) 中的工程开发规则。
2. PRD 位于 `.trae/documents/PRD.md`，开发前务必阅读。
3. 学习智能体行为提示词位于 `docs/agent-prompts/`，不要与工程开发提示词混淆。
4. 前端代码放在 `src/` 目录，使用 Vite 构建。
5. 部署通过 GitHub Actions 自动推送到 GitHub Pages。

## 设计规范

- **主色调**: 清新蓝绿色系 (#10B981, #06B6D4)
- **辅助色**: 温暖橙色 (#F59E0B)
- **字体**: Inter（标题 Bold，正文 Regular）
- **图标**: Lucide 图标库
- **布局**: 卡片式布局，清晰的信息层级

## 路由

| 路由 | 用途 |
|------|------|
| `/` | 首页 - 学习概览 |
| `/plans` | 学习计划列表 |
| `/plans/:id` | 学习计划详情 |
| `/study` | 智能复习页面 |
| `/resources` | 资源管理 |
| `/profile` | 个人中心 |
