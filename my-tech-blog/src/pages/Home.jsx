import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

function Home() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('posts')
        .select(`
          *,
          categories (name),
          profiles (name)
        `)
        .order('created_at', { ascending: false })

      if (error) throw error
      setPosts(data || [])
    } catch (error) {
      console.error('Error fetching posts:', error)
      setError('加载文章失败，请稍后重试')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="container loading">加载中...</div>
  }

  if (error) {
    return <div className="container error">{error}</div>
  }

  return (
    <div className="container">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#667eea' }}>
        最新文章
      </h1>
      <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
        探索技术世界，分享编程心得
      </p>

      {posts.length === 0 ? (
        <div className="card">
          <p style={{ textAlign: 'center', color: '#666', padding: '2rem' }}>
            暂无文章，请先在 Supabase 中添加数据
          </p>
        </div>
      ) : (
        <div className="posts-grid">
          {posts.map((post) => (
            <div
              key={post.id}
              className="card post-card"
              onClick={() => navigate(`/post/${post.id}`)}
            >
              <h2>{post.name}</h2>
              <div className="meta">
                {post.categories && (
                  <span className="category">{post.categories.name}</span>
                )}
                {post.profiles && (
                  <span>作者: {post.profiles.name}</span>
                )}
                <span>{new Date(post.created_at).toLocaleDateString('zh-CN')}</span>
              </div>
              <p className="excerpt">
                {post.slug && post.slug.length > 150
                  ? post.slug.substring(0, 150) + '...'
                  : post.slug || '暂无简介'}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
