import React from 'react';
import { Container, Input, InputContainer, Label, PublishButton, PublishButtonTextContainer, PublishButtonText, Icone } from './styles';
import { ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const CreatePost = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
        <InputContainer>
          <Label>Título da Publicação</Label>
          <Input
            placeholder="Adicione um título"
            autoCapitalize="sentences"
            editable={true}
            textAlignVertical="center"
          />
        </InputContainer>

        <InputContainer>
          <Label>Texto da Publicação</Label>
          <Input
            placeholder="O que gostaria de compartilhar?"
            multiline={true}
            textAlignVertical="top"
            style={{ height: 150 }}
          />
        </InputContainer>

        <PublishButton onPress={() => alert('Publicação criada!')}>
          <PublishButtonTextContainer>
            <Icone>
              <FontAwesome name="paper-plane" size={15} color="white" />
            </Icone>
            <PublishButtonText>Publicar</PublishButtonText>
          </PublishButtonTextContainer>
        </PublishButton>
      </Container>
    </ScrollView>
  );
};

export default CreatePost;