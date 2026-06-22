# KnowledgeFlow

> AI智能体驱动的学习平台，让知识轻松流入你的脑海

[![Deploy to GitHub Pages](https://github.com/ceilf6/KnowledgeFlow-StudyAgent/actions/workflows/deploy.yml/badge.svg)](https://github.com/ceilf6/KnowledgeFlow-StudyAgent/actions/workflows/deploy.yml)

- **官网**: https://ceilf6.github.io/KnowledgeFlow-StudyAgent/
- **仓库**: https://github.com/ceilf6/KnowledgeFlow-StudyAgent
- **赛道**: 学习工作
- **版本**: 1.0.0

## 项目简介

KnowledgeFlow 是一个面向所有有学习需求人群的 AI 辅助学习平台。通过智能提示词工程和知识图谱技术，帮助用户高效掌握知识，构建完整的学习体系。

从知识点维度，一个点一个点帮助用户学习。默认用户没有基础，讲解从前置概念开始，逐步推进，不跳步、不假设。

## 核心功能

- **学习计划管理**: 创建个性化学习计划，知识路线可视化展示，学习进度追踪
- **智能复习**: AI 驱动的知识点讲解，前置概念补充，题目练习与即时反馈，错题分析
- **资源管理**: 多格式文件上传，自动可读化转换（OCR、文本提取），多语言翻译
- **学习统计**: 学习时长统计，知识点掌握度分析，成就徽章系统

## 适用人群

- **学生群体**: 从小学到大学，应对考试与学业挑战
- **职场人士**: 利用碎片时间学习新技能，提升职业竞争力
- **终身学习者**: 对知识有持续追求，享受学习乐趣
- **教育工作者**: AI 辅助教学，提升教学效果

## 技术栈

| 层级 | 技术 |
|------|------|
| 前端 | React@18 + TypeScript + TailwindCSS@3 + Vite |
| 状态管理 | Zustand |
| 路由 | React Router DOM |
| 后端 | Express@4 + TypeScript |
| 数据库 | PostgreSQL + Prisma ORM |
| 文件存储 | Supabase Storage |
| AI 集成 | OpenAI API / Claude API |

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
├── AGENTS.md                # 工程开发提示词
├── CLAUDE.md                # Claude 开发提示词
└── README.md
```

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 部署

前端通过 GitHub Actions 自动部署到 GitHub Pages。推送到 `main` 分支即触发部署。

## 相关文档

- [创意提案](docs/创意提案.md)
- [产品需求文档 (PRD)](.trae/documents/PRD.md)
- [学习智能体提示词](docs/agent-prompts/)
- [工程开发提示词](AGENTS.md)
