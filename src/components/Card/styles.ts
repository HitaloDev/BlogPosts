import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../../styles/colors';

export const Container = styled.View`
  background-color: ${colors.background};
  padding: 20px;
  border-radius: 20px;
  margin: 5px 10px;
`;

export const HeaderRow = styled.View`
  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const UserInfo = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const Username = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.primaryText};
`;

export const UserHandle = styled.Text`
  font-size: 14px;
  color: ${colors.subtitleText};
`;

export const StarIcon = styled(AntDesign)`
  position: absolute;
  top: 0;
  right: 0;
`;

export const ContentContainer = styled.View`
  margin-top: 10px;
`;

export const ContentTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.primaryText};
`;

export const ContentText = styled.Text`
  margin-top: 8px;
  font-size: 16px;
  color: ${colors.subtitleText};
`;