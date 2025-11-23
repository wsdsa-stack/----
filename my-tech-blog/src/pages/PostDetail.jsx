import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'

function PostDetail() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchPost()
  }, [id])

  async function fetchPost() {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('posts')
        .select(`
          *,
          categories (name),
          profiles (name)
        `)
        .eq('id', id)
        .single()

      if (error) throw error
      setPost(data)
    } catch (error) {
      console.error('Error fetching post:', error)
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

  if (!post) {
    return <div className="container error">文章不存在</div>
  }

  return (
    <div className="container">
      <Link to="/" className="back-button">
        ← 返回首页
      </Link>

      <div className="card post-detail">
        <h1>{post.name}</h1>
        <div className="meta">
          {post.categories && (
            <span className="category">{post.categories.name}</span>
          )}
          {post.profiles && <span>作者: {post.profiles.name}</span>}
          <span>{new Date(post.created_at).toLocaleDateString('zh-CN')}</span>
        </div>
        <div className="content">
          {post.slug ? (
            post.slug.split('\n').map((paragraph, index) => (
              <p key={index} style={{ marginBottom: '1rem' }}>
                {paragraph}
              </p>
            ))
          ) : (
            <p>暂无内容</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default PostDetail
