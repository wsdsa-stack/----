# Netlify 部署指南

## 快速部署步骤

### 第一步：准备 Supabase

1. 登录你的 Supabase 项目
2. 获取以下信息：
   - Project URL（项目设置 → API）
   - Anon/Public Key（项目设置 → API）

### 第二步：在本地测试

1. 创建 `.env` 文件：
```bash
VITE_SUPABASE_URL=你的Supabase项目URL
VITE_SUPABASE_ANON_KEY=你的Supabase匿名密钥
```

2. 安装依赖：
```bash
npm install
```

3. 启动开发服务器：
```bash
npm run dev
```

4. 确认网站可以正常运行

### 第三步：部署到 Netlify

#### 选项 A：使用 Netlify CLI（最快）

1. 安装 Netlify CLI：
```bash
npm install -g netlify-cli
```

2. 登录：
```bash
netlify login
```

3. 初始化并部署：
```bash
netlify init
```
按照提示操作：
- 选择 "Create & configure a new site"
- 选择你的团队
- 输入网站名称（可选）
- Build command: `npm run build`
- Publish directory: `dist`

4. 设置环境变量：
```bash
netlify env:set VITE_SUPABASE_URL "你的Supabase项目URL"
netlify env:set VITE_SUPABASE_ANON_KEY "你的Supabase匿名密钥"
```

5. 部署：
```bash
netlify deploy --prod
```

#### 选项 B：使用 GitHub + Netlify（推荐）

1. 在 GitHub 上创建新仓库

2. 推送代码到 GitHub：
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/你的仓库名.git
git push -u origin main
```

3. 登录 [Netlify](https://app.netlify.com/)

4. 点击 "Add new site" → "Import an existing project"

5. 选择 "GitHub" 并授权

6. 选择你的仓库

7. 配置构建设置：
   - Branch to deploy: `main`
   - Build command: `npm run build`
   - Publish directory: `dist`

8. 点击 "Show advanced" → "New variable"，添加环境变量：
   - `VITE_SUPABASE_URL`: 你的Supabase项目URL
   - `VITE_SUPABASE_ANON_KEY`: 你的Supabase匿名密钥

9. 点击 "Deploy site"

#### 选项 C：拖拽部署（最简单）

1. 先在本地构建：
```bash
npm install
npm run build
```

2. 创建 `.env` 文件并添加 Supabase 配置

3. 重新构建（包含环境变量）：
```bash
npm run build
```

4. 将 `dist` 文件夹拖拽到 [Netlify Drop](https://app.netlify.com/drop)

**注意**：此方法需要在本地 `.env` 文件中配置环境变量后再构建。

### 第四步：验证部署

1. 访问 Netlify 提供的网址
2. 检查网站是否正常显示
3. 测试所有页面功能

### 第五步：自定义域名（可选）

1. 在 Netlify 控制台选择你的网站
2. 进入 "Domain settings"
3. 点击 "Add custom domain"
4. 按照提示配置 DNS

## 常见问题

### 1. 页面刷新后 404

确保 `netlify.toml` 文件已正确配置重定向规则。

### 2. 环境变量未生效

- 确认环境变量名称正确（必须以 `VITE_` 开头）
- 在 Netlify 控制台重新触发部署

### 3. 构建失败

检查：
- `package.json` 中的依赖是否完整
- Node.js 版本是否兼容
- 构建命令是否正确

## 获取 Netlify 链接

部署完成后，你的网站链接格式为：
```
https://网站名称.netlify.app
```

或者在 Netlify 控制台的 "Site overview" 页面查看。

## 提交作业

将 Netlify 链接（例如：`https://my-tech-blog-xxx.netlify.app`）提交给老师。
