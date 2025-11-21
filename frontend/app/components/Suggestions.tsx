import { useEffect, useState } from 'react';
import Image from 'next/image';

interface SuggestedUser {
  id: number;
  username: string;
  avatar: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

const isValidUrl = (url: string | null | undefined): boolean => {
  if (!url || typeof url !== 'string') return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export default function Suggestions() {
  const [users, setUsers] = useState<SuggestedUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/users`);
        if (!response.ok) throw new Error('Erreur lors de la récupération des utilisateurs');
        const data: SuggestedUser[] = await response.json();
        // Limiter à 5 utilisateurs et les mélanger aléatoirement
        const shuffled = data.sort(() => Math.random() - 0.5).slice(0, 5);
        setUsers(shuffled);
      } catch (err) {
        console.error('Erreur:', err);
        // Afficher une liste vide en cas d'erreur
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);
  return (
    <div className="hidden lg:block sticky top-24 w-80 bg-white rounded-lg p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <p className="font-semibold text-gray-500 text-sm">Suggestions pour vous</p>
          <a href="#" className="text-xs text-blue-500 font-semibold hover:text-blue-600">
            Voir tout
          </a>
        </div>

        <div className="space-y-4">
          {loading ? (
            <p className="text-gray-500 text-sm text-center py-4">Chargement...</p>
          ) : users.length > 0 ? (
            users.map((user) => (
              <div key={user.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                    {isValidUrl(user.avatar) ? (
                      <Image
                        src={user.avatar}
                        alt={user.username}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
                        {user.avatar ? user.avatar.substring(0, 2) : '?'}
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-xs text-black">{user.username}</p>
                  </div>
                </div>
                <button className="text-blue-500 font-semibold text-xs hover:text-blue-600 transition">
                  Suivre
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm text-center py-4">Aucun utilisateur trouvé</p>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="pt-6 border-t border-gray-200">
        <div className="flex flex-wrap gap-2 text-xs text-gray-500">
          <a href="#" className="hover:text-gray-700">À propos</a>
          <a href="#" className="hover:text-gray-700">Aide</a>
          <a href="#" className="hover:text-gray-700">Presse</a>
          <a href="#" className="hover:text-gray-700">API</a>
          <a href="#" className="hover:text-gray-700">Emplois</a>
          <a href="#" className="hover:text-gray-700">Confidentialité</a>
          <a href="#" className="hover:text-gray-700">Conditions</a>
          <a href="#" className="hover:text-gray-700">Emojis</a>
          <a href="#" className="hover:text-gray-700">Langue</a>
        </div>
        <p className="text-xs text-gray-500 mt-4">© 2024 InstaClone. Tous droits réservés.</p>
      </div>
    </div>
  );
}
