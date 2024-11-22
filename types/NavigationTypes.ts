import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  'screens/home/index': undefined;
  'screens/favorites/index': undefined;
  'screens/create-post/index': undefined;
  'screens/publication/index': { postId: number };
  'screens/profile/index': { userId: number };
};

export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'screens/home/index'>;
export type FavoritesScreenRouteProp = RouteProp<RootStackParamList, 'screens/favorites/index'>;
export type CreatePostScreenRouteProp = RouteProp<RootStackParamList, 'screens/create-post/index'>;
