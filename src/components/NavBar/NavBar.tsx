import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import { NavBarContainer, NavBarItem, NavBarText } from './styles';
import { TouchableOpacity } from 'react-native';
import { RootStackParamList } from '@/types/NavigationTypes';

const NavBar = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute();

  const isHome = route.name === 'screens/home/index';
  const isFavorites = route.name === 'screens/favorites/index';

  const goToHome = () => navigation.navigate('screens/home/index');
  const goToFavorites = () => navigation.navigate('screens/favorites/index');

  return (
    <NavBarContainer>
      <TouchableOpacity onPress={goToHome}>
        <NavBarItem>
          <AntDesign name="home" size={24} color={isHome ? '#0F90D9' : '#000'} />
          <NavBarText style={{ color: isHome ? '#0F90D9' : '#000' }}>Início</NavBarText>
        </NavBarItem>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToFavorites}>
        <NavBarItem>
          <AntDesign name="staro" size={24} color={isFavorites ? '#0F90D9' : '#000'} />
          <NavBarText style={{ color: isFavorites ? '#0F90D9' : '#000' }}>Favoritos</NavBarText>
        </NavBarItem>
      </TouchableOpacity>
    </NavBarContainer>
  );
};

export default NavBar;
