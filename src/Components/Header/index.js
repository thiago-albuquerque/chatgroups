import React from 'react';

import auth from '@react-native-firebase/auth';

import {useNavigation} from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather';

import {Container, SignOutButton, Title, SearchButton} from './styles';

export default function Header({userStatus}) {
  const navigation = useNavigation();

  async function SignOut() {
    await auth()
      .signOut()
      .then(() => {
        navigation.navigate('Login');
      })
      .catch(error => {
        console.log('Erro: ' + error);
      });
  }

  return (
    <Container>
      {userStatus && (
        <SearchButton onPress={() => navigation.navigate('Search')}>
          <Feather name="search" size={24} color="#fff" />
        </SearchButton>
      )}

      <Title numberOfLines={1}>Grupos</Title>

      {userStatus && (
        <SignOutButton onPress={SignOut}>
          <Feather name="log-out" size={24} color="#fff" />
        </SignOutButton>
      )}
    </Container>
  );
}
