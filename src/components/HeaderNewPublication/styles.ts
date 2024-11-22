import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const HeaderContainer = styled(SafeAreaView)`
  flex-direction: row;
  align-items: center;
  padding: 15px 25px;
  background-color: #fff;
`;

export const HeaderText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-left: 10px;
  color: #000;
`;

export const HeaderButton = styled(TouchableOpacity)`
  padding: 5px;
`;