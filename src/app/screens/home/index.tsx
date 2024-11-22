import React, { useEffect, useState } from 'react';
import {
  Container,
  FixedNavBar,
  PaginationContainer,
  PageButton,
  PageButtonText,
  ScrollableContent,
  NavigationButtons,
  NavigationText,
} from './styles';
import Card from '@/src/components/Card/Card';
import { Posts } from '@/types/Posts';
import api from '../../api/api';
import { useSearch } from '@/src/context/SearchContext';
import NavBar from '@/src/components/NavBar/NavBar';


const Home = () => {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Posts[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { searchText } = useSearch();
  
  const ItemsPage = 10;
  const MaxVisiblePages = 4;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        const data = response.data;
        setPosts(data);
        setTotalPages(Math.ceil(data.length / ItemsPage));
        setFilteredPosts(data.slice(0, ItemsPage));
      } catch (error) {
        console.error('Erro ao carregar posts:', error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (searchText) {
      const filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(searchText.toLowerCase()) ||
        post.body.toLowerCase().includes(searchText.toLowerCase())
      );
      setTotalPages(Math.ceil(filtered.length / ItemsPage));
      setFilteredPosts(filtered.slice((currentPage - 1) * ItemsPage, currentPage * ItemsPage));
    } else {
      setFilteredPosts(posts.slice((currentPage - 1) * ItemsPage, currentPage * ItemsPage));
    }
  }, [searchText, posts, currentPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getVisiblePages = () => {
    const startPage = Math.max(currentPage - Math.floor(MaxVisiblePages / 2), 1);
    const endPage = Math.min(startPage + MaxVisiblePages - 1, totalPages);

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <Container>
      <ScrollableContent>
        {filteredPosts.map((post) => (
          <Card key={post.id} id={post.id} title={post.title} body={post.body} userId={post.userId} />
        ))}
      </ScrollableContent>

      <PaginationContainer>
        <NavigationButtons onPress={handlePrevPage} disabled={currentPage === 1}>
          <NavigationText disabled={currentPage === 1}>Anterior</NavigationText>
        </NavigationButtons>

        {getVisiblePages().map((page) => (
          <PageButton
            key={page}
            onPress={() => handlePageChange(page)}
            isSelected={currentPage === page}
          >
            <PageButtonText isSelected={currentPage === page}>{page}</PageButtonText>
          </PageButton>
        ))}

        {currentPage < totalPages && (
          <NavigationButtons onPress={handleNextPage}>
            <NavigationText>Próxima</NavigationText>
          </NavigationButtons>
        )}
      </PaginationContainer>

      <FixedNavBar>
        <NavBar />
      </FixedNavBar>
    </Container>
  );
};

export default Home;
