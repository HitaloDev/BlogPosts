import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { TextInput, TouchableOpacity, Text } from 'react-native';
import { useSearch } from '@/src/context/SearchContext';
import { HeaderButton, HeaderContainer, HeaderText, SearchInputContainer } from './styles';
import { colors } from '@/src/styles/colors';

const HeaderSearch = ({ title }: { title: string }) => {
  const { searchText, setSearchText } = useSearch();
  const [searchVisible, setSearchVisible] = useState(false);

  const handleSearchToggle = () => {
    setSearchVisible(!searchVisible);
    if (!searchVisible) {
      setSearchText('');
    }
  };

  const handleTextChange = (text: string) => {
    setSearchText(text);
  };

  return (
    <HeaderContainer>
      {searchVisible ? (
        <SearchInputContainer>
          <TextInput
            placeholder="Buscar publicação"
            style={{ fontSize: 16 }}
            value={searchText}
            onChangeText={handleTextChange}
            autoFocus
          />
        </SearchInputContainer>
      ) : (
        <HeaderText>{title}</HeaderText>
      )}
      {searchVisible ? (
        <TouchableOpacity onPress={handleSearchToggle}>
          <Text style={{ fontSize: 16, color: colors.buttonBackground }}>Cancelar</Text>
        </TouchableOpacity>
      ) : (
        <HeaderButton onPress={handleSearchToggle}>
          <AntDesign name="search1" size={24} color="#000" />
        </HeaderButton>
      )}
    </HeaderContainer>
  );
};

export default HeaderSearch;
