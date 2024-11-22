import { colors } from '@/src/styles/colors';
import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 16px;
  background-color: white;
  height: 100%;
`;

export const HeaderRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
`;

export const UserInfo = styled.View`
  flex-direction: column;
`;

export const Username = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const UserHandle = styled.Text`
  color: gray;
`;

export const StarIcon = styled(AntDesign)`
  margin-left: auto;
`;

export const ContentContainer = styled.View`
  margin-top: 16px;
`;

export const ContentTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export const ContentText = styled.Text`
  margin-top: 8px;
  font-size: 14px;
  color: #333;
  line-height: 20px;
`;

export const CommentsContainer = styled.View`
  flex: 1;
  margin-top: 24px;
`;

export const CommentsTitleWrapper = styled.View`
  width: 100vw;
  margin-left: -16px;
  margin-right: -16px;
  background-color: white;
  padding: 15px 5px;
  margin-bottom: 16px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: ${colors.subtitleText};
`;

export const CommentsTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  padding-left: 16px;
`;

export const ScrollableComments = styled.FlatList`
  flex-grow: 1;
  margin-bottom: 80px;
`;

export const CommentItem = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-top: 12px;
  padding-bottom: 12px;
  border-bottom-width: 1px;
  border-color: ${colors.subtitleText};
`;

export const CommentText = styled.Text`
  font-size: 14px;
  color: #333;
`;

export const CommentInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  margin: 16px;
  width: 85%;
  gap: 10px;
  height: 60px;
  border-radius: 10px;
  border-color: #e0e0e0;
  background-color: ${colors.inputBackground};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const CommentInput = styled.TextInput`
  width: 100%;
  border-radius: 8px;
  font-size: 16px;
`;

export const CommentIcon = styled(AntDesign)`
  background-color: ${colors.buttonBackground};
  color: white;
  border-radius: 200px;
  padding: 14px;
`;
