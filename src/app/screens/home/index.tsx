import React, { useEffect } from 'react';
import {
  Container,
  FixedNavBar,
  PaginationContainer,
  PageButton,
  PageButtonText,
  ScrollableContent,
  NavigationButtons,
  NavigationText,
  FloatingAddButton,
  FloatingAddIcon,
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../api/api';
import NavBar from '@/src/components/NavBar/NavBar';
import Card from '@/src/components/Card/Card';
import { useSearch } from '@/src/context/SearchContext';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/types/NavigationTypes';
import { RootState } from '@/src/store';
import { setPosts } from '@/src/store/slices/postsSlice';

const ItemsPage = 10;

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts.posts);

  const [filteredPosts, setFilteredPosts] = React.useState(posts.slice(0, ItemsPage));
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(Math.ceil(posts.length / ItemsPage));
  const { searchText } = useSearch();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        dispatch(setPosts(response.data));
      } catch (error) {
        console.error('Erro ao carregar posts:', error);
      }
    };

    if (!posts.length) {
      fetchPosts();
    }
  }, [dispatch, posts.length]);

  useEffect(() => {
    const filtered = searchText
      ? posts.filter(
          (post) =>
            post.title.toLowerCase().includes(searchText.toLowerCase()) ||
            post.body.toLowerCase().includes(searchText.toLowerCase())
        )
      : posts;

    setTotalPages(Math.ceil(filtered.length / ItemsPage));
    setFilteredPosts(filtered.slice((currentPage - 1) * ItemsPage, currentPage * ItemsPage));
  }, [searchText, posts, currentPage]);

  const navigateToCreatePost = () => {
    navigation.navigate('screens/create-post/index');
  };

  return (
    <Container>
      <ScrollableContent>
        {filteredPosts.map((post) => (
          <Card key={post.id} id={post.id} title={post.title} body={post.body} userId={post.userId} />
        ))}
      </ScrollableContent>

      <PaginationContainer>
        <NavigationButtons
          onPress={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
        >
          <NavigationText disabled={currentPage === 1}>Anterior</NavigationText>
        </NavigationButtons>

        {Array.from({ length: totalPages }).map((_, index) => (
          <PageButton
            key={index}
            isSelected={currentPage === index + 1}
            onPress={() => setCurrentPage(index + 1)}
          >
            <PageButtonText isSelected={currentPage === index + 1}>{index + 1}</PageButtonText>
          </PageButton>
        ))}

        <NavigationButtons
          onPress={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
          disabled={currentPage === totalPages}
        >
          <NavigationText disabled={currentPage === totalPages}>Próxima</NavigationText>
        </NavigationButtons>
      </PaginationContainer>

      <FloatingAddButton onPress={navigateToCreatePost}>
        <FloatingAddIcon>+</FloatingAddIcon>
      </FloatingAddButton>

      <FixedNavBar>
        <NavBar />
      </FixedNavBar>
    </Container>
  );
};

export default Home;
