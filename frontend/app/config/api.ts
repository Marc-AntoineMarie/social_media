// Configuration de l'API backend
export const API_CONFIG = {
  // Changez le port si votre serveur NestJS utilise un port différent
  // Par défaut, NestJS s'exécute sur le port 3000, mais vous pouvez le configurer
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
};
