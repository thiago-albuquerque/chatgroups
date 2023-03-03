import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import ListMessages from '../../Components/ListMessages';

import Feather from 'react-native-vector-icons/Feather';

import {Container, ImageBg, InputContainer, Input, SendButton} from './styles';

export default function ChatRoom({route}) {
  const {thread} = route.params;

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const [dateMessage, setDateMessage] = useState('');

  const user = auth().currentUser.toJSON();

  useEffect(() => {
    const unsubscribeListener = firestore()
      .collection('MESSAGE_THREADS')
      .doc(thread._id)
      .collection('MESSAGES')
      .orderBy('createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        const messages = querySnapshot.docs.map(doc => {
          const firebaseData = doc.data();

          const data = {
            _id: doc.id,
            text: '',
            createdAt: firestore.FieldValue.serverTimestamp(),
            ...firebaseData,
          };

          if (!firebaseData.system) {
            data.user = {
              ...firebaseData.user,
              name: firebaseData.user.displayName,
            };
          }

          return data;
        });

        setMessages(messages);
      });

    return () => unsubscribeListener();
  }, []);

  async function handleSendMessage() {
    if (input === '') {
      alert('Digite primeiro sua mensagem!');
      return;
    }

    await firestore()
      .collection('MESSAGE_THREADS')
      .doc(thread._id)
      .collection('MESSAGES')
      .add({
        text: input,
        createdAt: firestore.FieldValue.serverTimestamp(),
        user: {
          _id: user.uid,
          displayName: user.displayName,
        },
      });

    await firestore()
      .collection('MESSAGE_THREADS')
      .doc(thread._id)
      .set(
        {
          lastMessage: {
            text: input,
            createdAt: firestore.FieldValue.serverTimestamp(),
          },
        },
        {
          merge: true,
        },
      );

    setInput('');
  }

  return (
    <Container>
      <ImageBg source={require('../../assets/roomBg.png')} resizeMode="cover">
        <FlatList
          style={{width: '96%', maxWidth: 500}}
          data={messages}
          keyExtractor={item => item._id}
          renderItem={({item}) => <ListMessages data={item} />}
          inverted
          showsVerticalScrollIndicator={false}
        />

        <InputContainer>
          <Input
            multiline={true}
            placeholder="Digite aqui sua mensagem"
            value={input}
            onChangeText={value => setInput(value)}
          />
          <SendButton onPress={handleSendMessage}>
            <Feather name="send" size={24} color={'#fff'} />
          </SendButton>
        </InputContainer>
      </ImageBg>
    </Container>
  );
}
