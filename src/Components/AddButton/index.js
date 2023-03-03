import React from 'react';

import {useNavigation} from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather';

import {Container} from './styles';

export default function AddButton({setAddGroupModal, userStatus}) {
  const navigation = useNavigation();

  function addGroup() {
    userStatus ? setAddGroupModal() : navigation.navigate('Login');
  }

  return (
    <Container onPress={addGroup}>
      <Feather
        name={userStatus ? 'plus' : 'message-square'}
        size={32}
        color="#fff"
      />
    </Container>
  );
}
