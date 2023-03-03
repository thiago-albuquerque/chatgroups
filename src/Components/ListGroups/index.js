import React from 'react';

import {useNavigation} from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather';

import {
  Container,
  TitleContainer,
  NameButton,
  NameGroup,
  DeleteButton,
  LastMessage,
} from './styles';

export default function ListGroups({data, userStatus, deleteRoom}) {
  const navigation = useNavigation();

  return (
    <Container>
      <TitleContainer>
        {userStatus === null ? (
          <NameButton onPress={() => navigation.navigate('Login')}>
            <NameGroup numberOfLines={1}>{data.name}</NameGroup>
            <LastMessage numberOfLines={1}>{data.lastMessage.text}</LastMessage>
          </NameButton>
        ) : (
          <NameButton
            onPress={() => navigation.navigate('ChatRoom', {thread: data})}>
            <NameGroup numberOfLines={1}>{data.name}</NameGroup>
            <LastMessage numberOfLines={1}>{data.lastMessage.text}</LastMessage>
          </NameButton>
        )}
      </TitleContainer>
      {userStatus === null ? (
        <></>
      ) : (
        <DeleteButton onPress={deleteRoom}>
          <Feather name="trash" size={24} color={'#fff'} />
        </DeleteButton>
      )}
    </Container>
  );
}
