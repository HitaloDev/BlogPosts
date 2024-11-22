import { Stack } from 'expo-router';
import React from 'react';
import HeaderSearch from '../components/HeaderSearch/HeaderSearch';
import HeaderNewPublication from '../components/HeaderNewPublication/HeaderNewPublication';
import { FavoritesProvider } from '../context/FavoritesContext';
import { SearchProvider } from '../context/SearchContext';

export default function RootLayout() {
  return (
    <FavoritesProvider>
      <SearchProvider>
        <Stack>
          <Stack.Screen 
            name="index"
            options={{
              headerShown: false,
            }} 
          />
          <Stack.Screen
            name="screens/register/index"
            options={{
              title: 'Criar nova conta',
              headerBackTitle: 'Voltar',
              headerShown: true,
            }} 
          />
          <Stack.Screen
            name="screens/home/index"
            options={{
              header: () => <HeaderSearch title="Início" />,
            }}
          />
          <Stack.Screen
            name="screens/favorites/index"
            options={{
              header: () => <HeaderSearch title="Favoritos" />,
            }}
          />
          <Stack.Screen
            name="screens/create-post/index"
            options={{
              header: () => <HeaderNewPublication title="Nova publicação" />,
            }}
          />
          <Stack.Screen
            name="screens/publication/index"
            options={{
              title: 'Publicação',
              headerBackTitle: 'Voltar',
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="screens/profile/index"
            options={{
              title: 'Perfil',
              headerBackTitle: 'Voltar',
              headerShown: true,
            }}
          />
        </Stack>
      </SearchProvider>
    </FavoritesProvider>
  );
}
