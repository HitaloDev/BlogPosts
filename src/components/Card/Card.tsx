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
} from './styles';
import { CardProps } from '@/types/CardProps';
import { useFavorites } from '@/src/context/FavoritesContext';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import api from '@/src/app/api/api';
import { RootStackParamList } from '@/types/NavigationTypes';

const Card = ({ title, body, userId, id }: CardProps) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const [user, setUser] = useState<{ name: string; username: string } | null>(null);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get(`/users/${userId}`);
        setUser({
          name: response.data.name,
          username: response.data.username,
        });
      } catch (error) {
        console.error('Erro ao carregar dados do usuário:', error);
      }
    };

    fetchUser();
  }, [userId]);

  const handleToggleFavorite = () => {
    toggleFavorite({ id, title, body, userId });
  };

  const handleNavigateToProfile = () => {
    navigation.navigate('screens/profile/index', { userId });
  };

  const handleNavigateToPublication = () => {
    navigation.navigate('screens/publication/index', { postId: id });
  };

  const getUserImage = (userId: number) => {
    return { uri: `https://robohash.org/${userId}?set=set5` };
  };

  return (
    <TouchableOpacity onPress={handleNavigateToPublication}>
      <Container>
        <HeaderRow>
          <TouchableOpacity onPress={handleNavigateToProfile}>
            <ProfileImage source={getUserImage(userId)} />
          </TouchableOpacity>
          <UserInfo>
            <Username>{user?.name}</Username>
            <UserHandle>@{user?.username}</UserHandle>
          </UserInfo>
          <StarIcon
            name={id && isFavorite(id) ? 'star' : 'staro'}
            size={22}
            color={id && isFavorite(id) ? '#FFD700' : '#5E6064'}
            onPress={handleToggleFavorite}
          />
        </HeaderRow>
        <ContentContainer>
          <ContentTitle>{title}</ContentTitle>
          <ContentText>{body}</ContentText>
        </ContentContainer>
      </Container>
    </TouchableOpacity>
  );
};

export default Card;