# 我的技术博客

一个使用 React + Supabase + Netlify 构建的现代化技术博客网站。

## 功能特性

- ✅ 3个独立页面：首页、文章详情页、关于页面
- ✅ Supabase 数据库：3张数据表（profiles、categories、posts）
- ✅ 响应式设计，适配各种设备
- ✅ 现代化 UI 设计
- ✅ 自动部署到 Netlify

## 技术栈

- **前端框架**：React 18
- **路由**：React Router v6
- **后端服务**：Supabase
- **构建工具**：Vite
- **部署平台**：Netlify

## 本地开发

### 1. 安装依赖

```bash
npm install
```

### 2. 配置环境变量

复制 `.env.example` 为 `.env` 并填写你的 Supabase 配置：

```bash
VITE_SUPABASE_URL=你的Supabase项目URL
VITE_SUPABASE_ANON_KEY=你的Supabase匿名密钥
```

### 3. 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:5173` 查看网站。

### 4. 构建生产版本

```bash
npm run build
```

## Supabase 数据库结构

### profiles 表
- `id` (int8) - 主键
- `created_at` (timestamptz) - 创建时间
- `name` (text) - 作者名称
- `slug` (text) - 作者简介

### categories 表
- `id` (int8) - 主键
- `created_at` (timestamptz) - 创建时间
- `name` (text) - 分类名称
- `slug` (text) - 分类描述

### posts 表
- `id` (int8) - 主键
- `created_at` (timestamptz) - 创建时间
- `name` (text) - 文章标题
- `slug` (text) - 文章内容

## 部署到 Netlify

### 方法一：通过 Netlify CLI（推荐）

1. 安装 Netlify CLI：
```bash
npm install -g netlify-cli
```

2. 登录 Netlify：
```bash
netlify login
```

3. 初始化并部署：
```bash
netlify init
```

4. 在 Netlify 控制台设置环境变量：
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

### 方法二：通过 GitHub 自动部署

1. 将代码推送到 GitHub
2. 在 Netlify 控制台导入 GitHub 仓库
3. 配置构建设置：
   - Build command: `npm run build`
   - Publish directory: `dist`
4. 添加环境变量
5. 点击 Deploy

## 添加示例数据

在 Supabase 表编辑器中添加数据：

### profiles 表
```sql
INSERT INTO profiles (name, slug) VALUES
('张三', '全栈开发工程师，热爱技术分享'),
('李四', '前端开发专家，React 爱好者');
```

### categories 表
```sql
INSERT INTO categories (name, slug) VALUES
('前端开发', '前端技术、框架、工具等'),
('后端开发', '后端技术、数据库、API等'),
('DevOps', '运维、部署、CI/CD等');
```

### posts 表
```sql
INSERT INTO posts (name, slug) VALUES
('React Hooks 深入解析', '本文将深入探讨 React Hooks 的原理和最佳实践...'),
('Supabase 快速入门', '学习如何使用 Supabase 构建现代化应用...');
```

## 作者

你的名字

## 许可证

MIT
