import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Posts } from '@/types/Posts';

interface FavoritesContextProps {
  favorites: Posts[];
  toggleFavorite: (post: Posts) => void;
  isFavorite: (postId: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(undefined);

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<Posts[]>([]);

  const toggleFavorite = (post: Posts) => {
    setFavorites((prev) => {
      const exists = prev.some((favorite) => favorite.id === post.id);
      if (exists) {
        return prev.filter((favorite) => favorite.id !== post.id);
      }
      return [...prev, post];
    });
  };

  const isFavorite = (postId: number) => {
    return favorites.some((post) => post.id === postId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
