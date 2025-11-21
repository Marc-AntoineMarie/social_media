'use client';

import { useEffect, useState } from 'react';
import Post from './Post';

interface User {
  id: number;
  username: string;
  avatar: string;
}

interface PostData {
  id: number;
  caption: string;
  imageUrl: string;
  location?: string;
  authorId: number;
  createdAt: string;
}

interface Like {
  id: number;
  postId: number;
  userId: number;
}

interface Comment {
  id: number;
  postId: number;
  userId: number;
  content: string;
}

interface PostWithDetails extends PostData {
  author: User;
  likes: number;
  comments: number;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export default function Feed() {
  const [posts, setPosts] = useState<PostWithDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Récupérer les données de l'API
        const [postsRes, usersRes, likesRes, commentsRes] = await Promise.all([
          fetch(`${API_BASE_URL}/posts`),
          fetch(`${API_BASE_URL}/users`),
          fetch(`${API_BASE_URL}/likes`),
          fetch(`${API_BASE_URL}/comments`),
        ]);

        if (!postsRes.ok || !usersRes.ok || !likesRes.ok || !commentsRes.ok) {
          throw new Error('Erreur lors de la récupération des données');
        }

        const postsData: PostData[] = await postsRes.json();
        const usersData: User[] = await usersRes.json();
        const likesData: Like[] = await likesRes.json();
        const commentsData: Comment[] = await commentsRes.json();

        // Créer une map des utilisateurs pour un accès rapide
        const usersMap = new Map(usersData.map(user => [user.id, user]));

        // Transformer les posts avec les détails
        const enrichedPosts: PostWithDetails[] = postsData
          .map(post => {
            const author = usersMap.get(post.authorId);
            if (!author) return null;

            const likesCount = likesData.filter(like => like.postId === post.id).length;
            const commentsCount = commentsData.filter(comment => comment.postId === post.id).length;

            return {
              ...post,
              author,
              likes: likesCount,
              comments: commentsCount,
            };
          })
          .filter((post): post is PostWithDetails => post !== null)
          // Trier par date décroissante
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

        setPosts(enrichedPosts);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
        setError(errorMessage);
        console.error('Erreur:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <p className="text-red-500 mb-4">⚠️ Erreur: {error}</p>
          <p className="text-gray-500 text-sm">Assurez-vous que le serveur NestJS est en cours d'exécution sur {API_BASE_URL}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 max-w-2xl">
      <div className="space-y-6">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              caption={post.caption}
              imageUrl={post.imageUrl}
              location={post.location}
              createdAt={post.createdAt}
              likes={post.likes}
              comments={post.comments}
              isLiked={false}
              isSaved={false}
            />
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">Aucune publication pour le moment</p>
          </div>
        )}
      </div>
    </div>
  );
}
