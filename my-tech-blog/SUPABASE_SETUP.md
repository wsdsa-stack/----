# Supabase 数据设置指南

## 1. 添加示例数据

根据截图，你的 Supabase 已经创建了 3 张表，现在需要添加示例数据。

### profiles 表

在 Supabase 表编辑器中，点击 `profiles` 表，然后点击 "Insert row" 添加以下数据：

| name | slug |
|------|------|
| 张三 | 全栈开发工程师，5年开发经验，热爱技术分享 |
| 李四 | 前端开发专家，专注 React 生态 |
| 王五 | 后端架构师，擅长系统设计 |

### categories 表

点击 `categories` 表，添加以下数据：

| name | slug |
|------|------|
| 前端开发 | 前端技术、框架、工具等相关内容 |
| 后端开发 | 后端技术、数据库、API 设计等 |
| DevOps | 运维、部署、CI/CD、云服务等 |
| 数据库 | 数据库设计、优化、最佳实践 |

### posts 表

点击 `posts` 表，添加以下示例文章：

**文章 1：**
- name: `React Hooks 完全指南`
- slug: `React Hooks 是 React 16.8 引入的新特性，它让我们在不编写 class 的情况下使用 state 和其他 React 特性。本文将深入探讨 useState、useEffect、useContext 等常用 Hooks 的使用方法和最佳实践。通过学习本文，你将掌握如何使用 Hooks 编写更简洁、更易维护的 React 组件。我们还会讨论自定义 Hooks 的创建，以及如何避免常见的陷阱。`

**文章 2：**
- name: `Supabase 快速入门教程`
- slug: `Supabase 是一个开源的 Firebase 替代品，提供数据库、认证、存储和实时订阅等功能。本教程将带你从零开始搭建一个基于 Supabase 的应用。我们会学习如何创建数据表、设置 Row Level Security、使用 JavaScript 客户端进行 CRUD 操作，以及如何实现实时数据同步。Supabase 基于 PostgreSQL，为开发者提供了强大而灵活的数据管理能力。`

**文章 3：**
- name: `使用 Netlify 部署前端应用`
- slug: `Netlify 是一个现代化的前端部署平台，提供持续部署、表单处理、无服务器函数等功能。本文介绍如何将 React、Vue 等前端应用部署到 Netlify。我们会学习如何配置构建设置、管理环境变量、设置自定义域名，以及如何使用 Netlify CLI 进行快速部署。Netlify 的自动化部署流程可以大大提升开发效率。`

**文章 4：**
- name: `现代 CSS 布局技巧`
- slug: `CSS 在过去几年发生了巨大变化，Flexbox 和 Grid 让布局变得前所未有的简单。本文将介绍现代 CSS 布局的最佳实践，包括响应式设计、Grid 布局系统、Flexbox 的使用技巧，以及如何使用 CSS 变量提升代码的可维护性。我们还会探讨 Container Queries、:has() 等新特性，帮助你构建更灵活的布局。`

**文章 5：**
- name: `TypeScript 进阶指南`
- slug: `TypeScript 为 JavaScript 添加了类型系统，帮助开发者在编译时发现错误。本文深入探讨 TypeScript 的高级特性，包括泛型、装饰器、命名空间、声明文件等。我们会学习如何使用 TypeScript 编写类型安全的代码，如何为第三方库编写类型声明，以及如何配置 tsconfig.json 以获得最佳的开发体验。`

## 2. 获取 Supabase 配置信息

1. 登录 [Supabase](https://supabase.com/)
2. 选择你的项目
3. 点击左侧菜单的 "Project Settings"（齿轮图标）
4. 选择 "API" 标签
5. 复制以下信息：
   - **Project URL**（在 Configuration → URL 下）
   - **anon public key**（在 Project API keys → anon public 下）

## 3. 配置本地环境

在项目根目录创建 `.env` 文件：

```env
VITE_SUPABASE_URL=你的Project URL
VITE_SUPABASE_ANON_KEY=你的anon public key
```

示例：
```env
VITE_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## 4. 验证数据

添加数据后，可以在 Supabase 表编辑器中查看：
- profiles 表应该有 3 条记录
- categories 表应该有 4 条记录
- posts 表应该有 5 条记录

## 注意事项

1. **创建时间**：`created_at` 字段会自动填充当前时间
2. **ID 字段**：`id` 字段会自动递增，不需要手动填写
3. **文本字段**：确保 `name` 和 `slug` 字段都填写了内容
4. **字符限制**：如果文本太长，可以适当缩短

## 下一步

完成数据添加后，就可以：
1. 在本地测试网站（`npm run dev`）
2. 部署到 Netlify（参考 DEPLOYMENT_GUIDE.md）
