import styled from 'styled-components/native';
import { colors } from '../../../styles/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px;
  background-color: ${colors.background};
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${colors.primaryText};
  margin-top: 100px;
  margin-bottom: 40px;
  text-align: center;
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
  border: none;
  background-color: ${colors.inputBackground};
  font-size: 16px;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  border-radius: 100px;
  background-color: ${colors.buttonBackground};
  align-items: center;
  margin-top: 20px;
`;

export const LoginButtonText = styled.Text`
  color: ${colors.buttonText};
  font-size: 18px;
  font-weight: bold;
`;

export const CreateAccountText = styled.Text`
  font-size: 16px;
  color: ${colors.secondaryText};
  margin-top: 20px;
  text-align: center;
  text-decoration: underline;
`;
