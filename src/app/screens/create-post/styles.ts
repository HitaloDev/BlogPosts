import styled from 'styled-components/native';
import { colors } from '../../../styles/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px;
  background-color: ${colors.background};
`;

export const InputContainer = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  font-size: 16px;
  margin-bottom: 8px;
  color: ${colors.primaryText};
`;

export const Input = styled.TextInput`
  width: 100%;
  padding: 12px 20px;
  border-radius: 8px;
  background-color: ${colors.inputBackground};
  font-size: 16px;
`;

export const PublishButton = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  position: absolute;
  bottom: 10px;
  border-radius: 100px;
  background-color: ${colors.buttonBackground};
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const PublishButtonTextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PublishButtonText = styled.Text`
  color: ${colors.buttonText};
  font-size: 18px;
  font-weight: bold;
`;

export const Icone = styled.View`
  margin-right: 8px;
`;
