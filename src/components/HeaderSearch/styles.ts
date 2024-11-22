import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const HeaderContainer = styled(SafeAreaView)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 25px;
  background-color: #fff;
`;

export const HeaderText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;

export const HeaderButton = styled(TouchableOpacity)`
  padding: 5px;
`;

export const SearchInputContainer = styled.View`
  flex: 1;
  padding: 10px;
  background-color: #f1f1f1;
  border-radius: 8px;
  margin-right: 10px;
`;