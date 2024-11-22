import React, { useState } from 'react';
import {
  Container,
  Input,
  InputContainer,
  Label,
  PublishButton,
  PublishButtonTextContainer,
  PublishButtonText,
  Icone,
} from './styles';
import { ScrollView, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import api from '../../api/api';
import { useDispatch } from 'react-redux';
import { addPost } from '@/src/store/slices/postsSlice';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (!title.trim() || !body.trim()) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    setIsSubmitting(true);
    try {
      const newPost = {
        title: title.trim(),
        body: body.trim(),
        userId: 1,
        id: Date.now(),
      };

      const response = await api.post('/posts', newPost);

      if (response.status === 201) {
        dispatch(addPost(newPost));
        Alert.alert('Sucesso', 'Postagem criada com sucesso!');
        setTitle('');
        setBody('');
      } else {
        Alert.alert('Erro', 'Algo deu errado. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao criar postagem:', error);
      Alert.alert('Erro', 'Não foi possível criar a postagem.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
        <InputContainer>
          <Label>Título da Publicação</Label>
          <Input
            placeholder="Adicione um título"
            autoCapitalize="sentences"
            editable={!isSubmitting}
            value={title}
            onChangeText={setTitle}
          />
        </InputContainer>

        <InputContainer>
          <Label>Texto da Publicação</Label>
          <Input
            placeholder="O que gostaria de compartilhar?"
            multiline={true}
            textAlignVertical="top"
            style={{ height: 150 }}
            editable={!isSubmitting}
            value={body}
            onChangeText={setBody}
          />
        </InputContainer>

        <PublishButton onPress={handleSubmit} disabled={isSubmitting}>
          <PublishButtonTextContainer>
            <Icone>
              <FontAwesome name="paper-plane" size={15} color="white" />
            </Icone>
            <PublishButtonText>
              {isSubmitting ? 'Publicando...' : 'Publicar'}
            </PublishButtonText>
          </PublishButtonTextContainer>
        </PublishButton>
      </Container>
    </ScrollView>
  );
};

export default CreatePost;