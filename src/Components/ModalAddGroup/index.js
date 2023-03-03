import React, {useState} from 'react';

import firestore from '@react-native-firebase/firestore';

import Feather from 'react-native-vector-icons/Feather';

import Loading from '../../Components/Loading';

import {
  Container,
  BackButton,
  TitleModal,
  InputLabel,
  ModalInput,
  CreateRoomButton,
  CreateRoomText,
} from './styles';

export default function ModalAddGroup({setAddGroupModal, userStatus}) {
  const [nameGroup, setNameGroup] = useState('');
  const [loadingNewGroup, setLoadingNewGroup] = useState(false);

  async function createNewRoom() {
    if (nameGroup === '') {
      alert('Digite primeiro um nome para o grupo!');
      return;
    }

    setLoadingNewGroup(true);

    await firestore()
      .collection('MESSAGE_THREADS')
      .add({
        name: nameGroup,
        owner: userStatus.uid,
        lastMessage: {
          text: `Grupo "${nameGroup}" criado. Bem vindo(a)!`,
          createdAt: firestore.FieldValue.serverTimestamp(),
        },
      })
      .then(docRef => {
        docRef
          .collection('MESSAGES')
          .add({
            text: `Grupo "${nameGroup}" criado. Bem vindo(a)!`,
            createdAt: firestore.FieldValue.serverTimestamp(),
            system: true,
          })
          .then(() => {
            setLoadingNewGroup(false);
            setAddGroupModal();
          });
      })
      .catch(error => {
        setLoadingNewGroup(false);
        console.log('Erro: ' + error);
      });
  }

  return (
    <Container>
      {loadingNewGroup ? (
        <Loading />
      ) : (
        <>
          <BackButton onPress={setAddGroupModal}>
            <Feather name="arrow-left" size={32} color="#fff" />
          </BackButton>

          <TitleModal>Crie uma nova sala</TitleModal>

          <InputLabel>Nome</InputLabel>
          <ModalInput
            value={nameGroup}
            onChangeText={value => {
              setNameGroup(value);
            }}
          />

          <CreateRoomButton onPress={createNewRoom}>
            <CreateRoomText>Criar Sala</CreateRoomText>
          </CreateRoomButton>
        </>
      )}
    </Container>
  );
}
