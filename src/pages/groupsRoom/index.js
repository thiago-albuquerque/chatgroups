import React, {useState, useEffect} from 'react';
import {FlatList, Modal, Alert, ActivityIndicator} from 'react-native';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {useIsFocused} from '@react-navigation/native';

import Header from '../../Components/Header';
import ListGroups from '../../Components/ListGroups';
import AddButton from '../../Components/AddButton';
import ModalAddGroup from '../../Components/ModalAddGroup';

import {Container, LoadingContainer} from './styles';

export default function GroupsRoom() {
  const [user, setUser] = useState(null);
  const [addGroupModal, setAddGroupModal] = useState(false);
  const [threads, setThreads] = useState([]);
  const [loadingThreads, setLoadingThreads] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    const hasUser = auth().currentUser ? auth().currentUser.toJSON() : null;

    setUser(hasUser);
  }, [isFocused]);

  useEffect(() => {
    let isActive = true;

    async function getGroups() {
      await firestore()
        .collection('MESSAGE_THREADS')
        .orderBy('lastMessage.createdAt', 'desc')
        .limit(10)
        .get()
        .then(snapshot => {
          const threads = snapshot.docs.map(documentSnapshot => {
            return {
              _id: documentSnapshot.id,
              name: '',
              lastMessage: {text: ''},
              ...documentSnapshot.data(),
            };
          });

          if (isActive) {
            setThreads(threads);
            setLoadingThreads(false);
          }
        })
        .catch(error => {
          console.log('Erro: ' + error);
        });
    }
    getGroups();

    return () => {
      isActive = false;
    };
  }, [isFocused, threads]);

  function deleteRoom(ownerId, idRoom) {
    if (ownerId !== user?.uid) {
      alert('Somente quem criou a sala pode deletá-la!');
      return;
    }

    Alert.alert('Atenção!', 'Quer mesmo deletar esta sala?', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Ok',
        onPress: () => handleDeleteRoom(idRoom),
      },
    ]);
  }

  async function handleDeleteRoom(idRoom) {
    await firestore().collection('MESSAGE_THREADS').doc(idRoom).delete();

    setThreads(threads);
  }

  return (
    <Container>
      <Header userStatus={user} />

      {loadingThreads ? (
        <LoadingContainer>
          <ActivityIndicator size={40} color="#13B8A7" />
        </LoadingContainer>
      ) : (
        <>
          <FlatList
            style={{width: '96%', maxWidth: 500}}
            data={threads}
            keyExtractor={item => item._id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <ListGroups
                data={item}
                userStatus={user}
                deleteRoom={() => deleteRoom(item.owner, item._id)}
              />
            )}
          />

          <AddButton
            setAddGroupModal={() => setAddGroupModal(true)}
            userStatus={user}
          />

          <Modal visible={addGroupModal} animationType="slide" transparent>
            <ModalAddGroup
              setAddGroupModal={() => setAddGroupModal(false)}
              userStatus={user}
            />
          </Modal>
        </>
      )}
    </Container>
  );
}
