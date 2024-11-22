import React, { useEffect, useState } from 'react';
import { Container, FixedNavBar, ScrollableContent } from './styles';
import NavBar from '@/src/components/NavBar/NavBar';
import Card from '@/src/components/Card/Card';
import { useFavorites } from '@/src/context/FavoritesContext';
import { useSearch } from '@/src/context/SearchContext';
import { PostCardTouchable } from '../profile/styles';

const Favorites = () => {
  const { favorites } = useFavorites();
  const [filteredFavorites, setFilteredFavorites] = useState(favorites);
  const { searchText } = useSearch();

  useEffect(() => {
    if (searchText) {
      const filtered = favorites.filter((post) =>
        post.title.toLowerCase().includes(searchText.toLowerCase()) ||
        post.body.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredFavorites(filtered);
    } else {
      setFilteredFavorites(favorites);
    }
  }, [searchText, favorites]);

  return (
    <Container>
      <ScrollableContent>
        {filteredFavorites.map((post) => (
          <PostCardTouchable key={post.id}>
            <Card title={post.title} body={post.body} userId={post.userId} id={post.id} />
          </PostCardTouchable>
        ))}
      </ScrollableContent>
      <FixedNavBar>
        <NavBar />
      </FixedNavBar>
    </Container>
  );
};

export default Favorites;