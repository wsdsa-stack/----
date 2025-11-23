function About() {
  return (
    <div className="container">
      <div className="card about-content">
        <h1>关于我的技术博客</h1>
        
        <p>
          欢迎来到我的技术博客！这是一个专注于分享编程知识、技术心得和开发经验的平台。
        </p>

        <h2>技术栈</h2>
        <p>本站采用以下现代化技术构建：</p>
        <ul>
          <li><strong>前端框架：</strong>React 18 - 构建用户界面</li>
          <li><strong>路由管理：</strong>React Router - 实现页面导航</li>
          <li><strong>后端服务：</strong>Supabase - 提供数据库和API服务</li>
          <li><strong>构建工具：</strong>Vite - 快速的开发构建体验</li>
          <li><strong>部署平台：</strong>Netlify - 自动化部署和托管</li>
        </ul>

        <h2>主要功能</h2>
        <ul>
          <li>📝 文章展示 - 浏览所有技术文章</li>
          <li>🔍 文章详情 - 查看完整文章内容</li>
          <li>🏷️ 分类管理 - 按分类组织文章</li>
          <li>👤 作者信息 - 展示文章作者</li>
          <li>📱 响应式设计 - 完美适配各种设备</li>
        </ul>

        <h2>数据库设计</h2>
        <p>使用 Supabase PostgreSQL 数据库，包含以下数据表：</p>
        <ul>
          <li><strong>profiles</strong> - 存储作者信息</li>
          <li><strong>categories</strong> - 管理文章分类</li>
          <li><strong>posts</strong> - 保存文章内容</li>
        </ul>

        <h2>联系方式</h2>
        <p>
          如有任何问题或建议，欢迎通过以下方式联系我：
        </p>
        <ul>
          <li>Email: your-email@example.com</li>
          <li>GitHub: github.com/yourusername</li>
        </ul>

        <p style={{ marginTop: '2rem', textAlign: 'center', color: '#667eea' }}>
          <strong>感谢您的访问！</strong>
        </p>
      </div>
    </div>
  )
}

export default About
