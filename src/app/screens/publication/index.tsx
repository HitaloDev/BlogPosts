import React, { useEffect, useState } from 'react';
import {
  Container,
  HeaderRow,
  ProfileImage,
  UserInfo,
  Username,
  UserHandle,
  StarIcon,
  ContentContainer,
  ContentTitle,
  ContentText,
  CommentsContainer,
  CommentsTitle,
  CommentItem,
  CommentText,
  CommentInputContainer,
  CommentInput,
  CommentIcon,
  CommentsTitleWrapper,
} from './styles';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '@/types/NavigationTypes';
import api from '../../api/api';
import { Comment, Post, User } from '@/types/PublicationProps';
import { FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type PublicationRouteProp = RouteProp<RootStackParamList, 'screens/publication/index'>;

const Publication = () => {
  const route = useRoute<PublicationRouteProp>();
  const { postId } = route.params;

  const [post, setPost] = useState<Post | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>('');
  const [loggedUser, setLoggedUser] = useState<{ name: string; email: string; id: number } | null>(null);

  const getUserImage = (id: number) => {
    return { uri: `https://robohash.org/${id}?set=set5` };
  };

  useEffect(() => {
    const fetchPostAndUser = async () => {
      try {
        const postResponse = await api.get<Post>(`/posts/${postId}`);
        setPost(postResponse.data);

        const userResponse = await api.get<User>(`/users/${postResponse.data.userId}`);
        setUser(userResponse.data);

        const commentsResponse = await api.get<Comment[]>(`/posts/${postId}/comments`);
        setComments(commentsResponse.data);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };

    const fetchLoggedUser = async () => {
      try {
        const userData = await AsyncStorage.getItem('user');
        if (userData) {
          const parsedUser = JSON.parse(userData);
          setLoggedUser({
            name: parsedUser.username || 'Usuário Anônimo',
            email: parsedUser.email || 'usuario@anonimo.com',
            id: parsedUser.id || 0,
          });
        }
      } catch (error) {
        console.error('Erro ao carregar dados do usuário logado:', error);
      }
    };

    fetchPostAndUser();
    fetchLoggedUser();
  }, [postId]);

  const handleCommentChange = (text: string) => {
    setNewComment(text);
  };

  const handleSubmitComment = async () => {
    if (!newComment.trim()) return;

    const newCommentData = {
      postId,
      id: Date.now(),
      name: loggedUser?.name || "Usuário Soffia",
      email: loggedUser?.email || "usuario@soffia.com",
      body: newComment,
    };

    try {
      await api.post(`/posts/${postId}/comments`, newCommentData);

      setComments((prevComments) => [...prevComments, newCommentData]);

      setNewComment('');
    } catch (error) {
      console.error("Erro ao adicionar comentário:", error);
      alert("Não foi possível adicionar o comentário. Tente novamente.");
    }
  };

  if (!post || !user) {
    return null;
  }

  return (
    <Container>
      <HeaderRow>
        <ProfileImage source={getUserImage(user.id)} />
        <UserInfo>
          <Username>{user.name}</Username>
          <UserHandle>@{user.username}</UserHandle>
        </UserInfo>
        <StarIcon name="staro" size={22} color="#5E6064" />
      </HeaderRow>
      <ContentContainer>
        <ContentTitle>{post.title}</ContentTitle>
        <ContentText>{post.body}</ContentText>
      </ContentContainer>

      <CommentsContainer>
        <CommentsTitleWrapper>
          <CommentsTitle>Comentários</CommentsTitle>
        </CommentsTitleWrapper>
        <FlatList<Comment>
          data={comments}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CommentItem>
              <ProfileImage source={getUserImage(loggedUser?.id || 0)} />
              <UserInfo>
                <Username>{item.name}</Username>
                <CommentText>{item.body}</CommentText>
              </UserInfo>
            </CommentItem>
          )}
          style={{ flexGrow: 1, marginBottom: 80 }}
        />
      </CommentsContainer>

      <CommentInputContainer>
        <CommentInput
          placeholder="Adicione um comentário"
          placeholderTextColor="black"
          value={newComment}
          onChangeText={handleCommentChange}
        />
          <CommentIcon
            name="arrowright"
            size={24}
            onPress={handleSubmitComment}
          />
      </CommentInputContainer>
    </Container>
  );
};

export default Publication;