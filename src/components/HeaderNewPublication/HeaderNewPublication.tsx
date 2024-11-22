import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { HeaderNewPublicationProps } from '@/types/HeaderNewPublicationProps';
import { useRouter } from 'expo-router';
import { HeaderButton, HeaderContainer, HeaderText } from './styles';

const HeaderNewPublication = ({ title }: HeaderNewPublicationProps) => {

  const router = useRouter();
  
  const onClosePress = () => {
    router.push('/screens/home');
  };

    return (
      <HeaderContainer>
        <HeaderButton onPress={onClosePress}>
          <AntDesign name="close" size={24} color="#000" />
        </HeaderButton>
        <HeaderText>{title}</HeaderText>
      </HeaderContainer>
    );
  };
  
  export default HeaderNewPublication;