'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PostProps {
  id: number;
  author: {
    id: number;
    username: string;
    avatar: string;
  };
  caption: string;
  imageUrl: string;
  location?: string;
  createdAt: string;
  likes: number;
  comments: number;
  isLiked?: boolean;
  isSaved?: boolean;
}

const isValidUrl = (url: string | null | undefined): boolean => {
  if (!url || typeof url !== 'string') return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export default function Post({
  id,
  author,
  caption,
  imageUrl,
  location,
  createdAt,
  likes: initialLikes,
  comments,
  isLiked: initialIsLiked = false,
  isSaved: initialIsSaved = false,
}: PostProps) {
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [likeCount, setLikeCount] = useState(initialLikes);
  const [isSaved, setIsSaved] = useState(initialIsSaved);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  const formatDate = (date: string) => {
    const postDate = new Date(date);
    const now = new Date();
    const diffMs = now.getTime() - postDate.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'À l\'instant';
    if (diffMins < 60) return `${diffMins}m`;
    if (diffHours < 24) return `${diffHours}h`;
    if (diffDays < 7) return `${diffDays}j`;
    
    return postDate.toLocaleDateString('fr-FR');
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg mb-6 max-w-2xl">
      {/* Header du post */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200">
            {isValidUrl(author.avatar) ? (
              <Image
                src={author.avatar}
                alt={author.username}
                fill
                className="object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
                {author.avatar || 'N/A'}
              </div>
            )}
          </div>
          <div>
            <p className="font-semibold text-sm text-black">{author.username}</p>
            {location && <p className="text-xs text-gray-500">{location}</p>}
          </div>
        </div>
        <button className="text-gray-500 hover:text-black transition" title="Options">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="19" r="2" />
          </svg>
        </button>
      </div>

      {/* Image du post */}
      <div className="relative w-full bg-black post-image-container">
        {isValidUrl(imageUrl) ? (
          <Image
            src={imageUrl}
            alt="Post"
            fill
            className="object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        ) : (
          <div className="w-full h-96 flex items-center justify-center text-gray-400">
            {imageUrl ? `Image invalide: ${imageUrl}` : 'Pas d\'image'}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4">
          <button
            onClick={handleLike}
            className="text-gray-700 hover:text-gray-500 transition"
            title="Like"
          >
            <svg
              className={`w-6 h-6 transition ${isLiked ? 'fill-red-500 text-red-500' : ''}`}
              fill={isLiked ? 'currentColor' : 'none'}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>

          <button
            onClick={() => setShowComments(!showComments)}
            className="text-gray-700 hover:text-gray-500 transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </button>

            <button className="text-gray-700 hover:text-gray-500 transition" title="Share">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v8h16v-8m-2-4l-8-4-8 4m0 0v8h16v-8"
              />
            </svg>
          </button>
        </div>

        <button
          onClick={() => setIsSaved(!isSaved)}
          className="text-gray-700 hover:text-gray-500 transition"
          title="Save"
        >
          <svg
            className={`w-6 h-6 transition ${isSaved ? 'fill-black' : ''}`}
            fill={isSaved ? 'currentColor' : 'none'}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 5a2 2 0 012-2h6a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
        </button>
      </div>

      {/* Likes */}
      <div className="px-4 py-2">
        <p className="font-semibold text-sm text-black">
          {likeCount > 0 && `${likeCount.toLocaleString()} j'aime`}
        </p>
      </div>

      {/* Caption */}
      <div className="px-4 pb-2">
        <p className="text-sm text-black">
          <span className="font-semibold mr-2">{author.username}</span>
          {caption}
        </p>
      </div>

      {/* Comments count */}
      {comments > 0 && (
        <button
          onClick={() => setShowComments(!showComments)}
          className="px-4 pb-2 text-xs text-gray-500 hover:text-gray-700 transition"
        >
          Voir les {comments} commentaires
        </button>
      )}

      {/* Date */}
      <div className="px-4 py-2 border-t border-gray-100">
        <p className="text-xs text-gray-500 uppercase">{formatDate(createdAt)}</p>
      </div>

      {/* Comment input */}
      <div className="px-4 py-3 border-t border-gray-100 flex items-center gap-3">
        <input
          type="text"
          placeholder="Ajouter un commentaire..."
          className="flex-1 bg-transparent text-sm text-black placeholder-gray-500 focus:outline-none"
        />
        <button className="text-blue-500 font-semibold text-sm hover:text-blue-600 transition">
          Publier
        </button>
      </div>
    </div>
  );
}
