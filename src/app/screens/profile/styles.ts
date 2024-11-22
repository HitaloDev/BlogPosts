import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const HeaderContainer = styled.View`
  padding: 20px;
  background-color: white;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const HeaderRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const ProfileImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

export const UserInfo = styled.View`
  flex-direction: column;
`;

export const Username = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;

export const UserHandle = styled.Text`
  font-size: 15px;
  color: gray;
`;

export const InfoSection = styled.View`
  margin-top: 15px;
  gap: 10px;
`;

export const InfoRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InfoText = styled.Text`
  margin-left: 10px;
  font-size: 15px;
  color: #1c1f24;
`;

export const ScrollableContent = styled.ScrollView`
  flex: 1;
  margin-top: 10px;
  padding-bottom: 60px;
`;

export const PostCardTouchable = styled.TouchableOpacity`
  margin-bottom: 10px;
`;
