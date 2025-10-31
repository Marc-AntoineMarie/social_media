export default async function Home() {
  // Fetch les posts depuis votre API NestJS
  const res = await fetch('http://localhost:3000/posts')
  const res1 = await fetch('http://localhost:3000/likes')
  const res2 = await fetch('http://localhost:3000/users')
  const res3 = await fetch('http://localhost:3000/comments')
  const posts: any[] = await res.json()
  const likes: any[] = await res1.json()
  const users: any[] = await res2.json()
  const comments: any[] = await res3.json()

  const getLikesCount = (postId: number) => {
    return likes.filter(like=>like.postId===postId).length
  }

  const getCommentCount = (postId: number) => {
    return comments.filter(comment=>comment.postId===postId).length
  }

  const getPostAuthor = (userId: number) => {
    return users.find(user=>user.id===userId)
    }

  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })
    console.log("getPostAuthor",getPostAuthor)
    // console.log("posts", posts)
    // console.log("users", users)
    // console.log("likes",likes)    const author = getPostAuthor(post.userId)
    // console.log("comment",comments)
    console.log("getLikeCount",getLikesCount(3))
    console.log("getCommentCount",getCommentCount(3))

    return (
  <div className="min-h-screen bg-gray-100 py-8">
    <div className="max-w-2xl mx-auto px-4">
      {/* Container pour tous les posts */}
      <div className="space-y-6">
        {sortedPosts.map((post) => {
          const author = getPostAuthor(post.authorId)
          if (!author) {
            console.warn(`Post ${post.id} : auteur ${post.authorId} introuvable`)
            return null
          }
          return (
            <div key={post.id} className="max-w-md mx-auto bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              {/* En-tête du post */}
              <div className="p-4">
                <span className="text-white text-xs font-bold rounded-lg bg-green-500 inline-block py-1.5 px-4">
                  {post.location || '📍 Localisation'}
                </span>
                <h2 className="text-xl mt-2 font-bold text-gray-800">
                  {post.caption || 'Sans titre'}
                </h2>
              </div>
              {/* Image du post */}
              <img className="w-full cursor-pointer" src={post.imageUrl} alt={post.caption || 'Post'} />
              {/* Pied du post avec auteur et interactions */}
              <div className="flex p-4 justify-between">
                <div className="flex items-center space-x-2">
                  <img className="w-10 h-10 rounded-full object-cover" src={author.avatar} alt={author.username}/>
                  <h3 className="text-gray-800 font-bold cursor-pointer">
                    {author.username}
                  </h3>
                </div>
                <div className="flex space-x-2">
                  {/* Commentaires */}
                  <div className="flex space-x-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="text-gray-800 font-semibold">
                      {getCommentCount(post.id)}
                    </span>
                  </div>
                  {/* Likes */}
                  <div className="flex space-x-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-500 hover:text-red-400 transition duration-100 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    <button className="text-gray-800 font-semibold">
                      {getLikesCount(post.id)}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </div>
)
}