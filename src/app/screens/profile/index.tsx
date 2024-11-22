import React, { useEffect, useState } from 'react';
import {
  Container,
  HeaderContainer,
  HeaderRow,
  ProfileImage,
  UserInfo,
  Username,
  UserHandle,
  InfoSection,
  InfoRow,
  InfoText,
  ScrollableContent,
  PostCardTouchable,
} from './styles';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Fontisto, SimpleLineIcons, Ionicons, Feather } from '@expo/vector-icons';
import Card from '@/src/components/Card/Card';
import { RootStackParamList } from '@/types/NavigationTypes';
import { Posts } from '@/types/Posts';
import api from '../../api/api';

type ProfileRouteProp = RouteProp<RootStackParamList, 'screens/profile/index'>;

const Profile = () => {
  const route = useRoute<ProfileRouteProp>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const { userId } = route.params;

  const [user, setUser] = useState<{ name: string; username: string; email: string; phone: string; address: string } | null>(null);
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await api.get(`/users/${userId}`);
        const userData = userResponse.data;
        setUser({
          name: userData.name,
          username: userData.username,
          email: userData.email,
          phone: userData.phone,
          address: `${userData.address.city}, ${userData.address.street}`,
        });

        const postsResponse = await api.get(`/posts?userId=${userId}`);
        setPosts(postsResponse.data);
      } catch (error) {
        console.error('Erro ao carregar dados do perfil:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  const goToPublication = (postId: number) => {
    navigation.navigate('screens/publication/index', { postId });
  };

  if (!user) {
    return <Container><InfoText>Carregando...</InfoText></Container>;
  }

  return (
    <Container>
      <HeaderContainer>
        <HeaderRow>
          <ProfileImage source={{ uri: `https://robohash.org/${userId}?set=set5` }} />
          <UserInfo>
            <Username>{user.name}</Username>
            <UserHandle>@{user.username}</UserHandle>
          </UserInfo>
        </HeaderRow>
        <InfoSection>
          <InfoRow>
            <Fontisto name="email" size={16} color="#1C1F24" />
            <InfoText>{user.email}</InfoText>
          </InfoRow>
          <InfoRow>
            <SimpleLineIcons name="location-pin" size={16} color="#1C1F24" />
            <InfoText>{user.address}</InfoText>
          </InfoRow>
          <InfoRow>
            <Ionicons name="briefcase-outline" size={16} color="#1C1F24" />
            <InfoText>Lorem Ipsum</InfoText>
          </InfoRow>
          <InfoRow>
            <Feather name="phone" size={16} color="#1C1F24" />
            <InfoText>{user.phone}</InfoText>
          </InfoRow>
        </InfoSection>
      </HeaderContainer>
      <ScrollableContent>
        {posts.map((post) => (
          <PostCardTouchable key={post.id} onPress={() => goToPublication(post.id)}>
            <Card id={post.id} title={post.title} body={post.body} userId={post.userId} />
          </PostCardTouchable>
        ))}
      </ScrollableContent>
    </Container>
  );
};

export default Profile;