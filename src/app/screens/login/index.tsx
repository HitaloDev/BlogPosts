import React, { useState } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Container,
  Input,
  InputContainer,
  Label,
  LoginButton,
  LoginButtonText,
  Title,
} from "./styles";
import { Text, TouchableOpacity } from "react-native";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const userData = await AsyncStorage.getItem("user");
      if (userData) {
        const user = JSON.parse(userData);

        if (user.email === email && user.password === password) {
          router.push("/screens/home");
        } else {
          alert("E-mail ou senha inválidos!");
        }
      } else {
        alert("Nenhum usuário encontrado. Por favor, registre-se.");
      }
    } catch (error) {
      console.error("Erro ao realizar login:", error);
      alert("Erro ao realizar login!");
    }
  };

  return (
    <Container>
      <Title>LOGIN</Title>

      <InputContainer>
        <Label>E-mail</Label>
        <Input
          placeholder="Endereço de e-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          editable={true}
          textAlignVertical="center"
          value={email}
          onChangeText={setEmail}
        />
      </InputContainer>

      <InputContainer>
        <Label>Senha</Label>
        <Input
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </InputContainer>

      <LoginButton onPress={handleLogin}>
        <LoginButtonText>Entrar</LoginButtonText>
      </LoginButton>

      <TouchableOpacity onPress={() => router.push("/screens/register")}>
        <Text style={{ color: "#0F90D9", marginTop: 20 }}>Criar nova conta</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Login;

