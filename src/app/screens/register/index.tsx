import React, { useState } from "react";
import {
  Container,
  Input,
  InputContainer,
  Label,
  LoginButton,
  LoginButtonText,
} from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleRegister = async () => {
    if (!username || !email || !password) {
      alert("Todos os campos são obrigatórios!");
      return;
    }

    try {
      const user = { username, email, password };
      await AsyncStorage.setItem("user", JSON.stringify(user));
      alert("Conta criada com sucesso!");

      setUsername("");
      setEmail("");
      setPassword("");

      router.push("/screens/login");
    } catch (error) {
      console.error("Erro ao salvar usuário:", error);
      alert("Erro ao criar conta!");
    }
  };

  return (
    <Container>
      <InputContainer>
        <Label>Nome de Usuário</Label>
        <Input
          placeholder="Nome de usuário"
          autoCapitalize="none"
          editable={true}
          textAlignVertical="center"
          value={username}
          onChangeText={setUsername}
        />
      </InputContainer>

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

      <LoginButton onPress={handleRegister}>
        <LoginButtonText>Criar conta</LoginButtonText>
      </LoginButton>
    </Container>
  );
};

export default Register;