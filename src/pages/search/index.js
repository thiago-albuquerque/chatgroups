import React, {useState, useEffect} from 'react';
import {FlatList, Keyboard} from 'react-native';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {useIsFocused} from '@react-navigation/native';

import ListGroups from '../../Components/ListGroups';

import Feather from 'react-native-vector-icons/Feather';

import {
  Container,
  SearchContainer,
  InputContainer,
  InputLabel,
  Input,
  Button,
} from './styles';

export default function Search() {
  const isFocused = useIsFocused();

  const [input, setInput] = useState('');
  const [user, setUser] = useState(null);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const hasUser = auth().currentUser ? auth().currentUser.toJSON() : null;
    setUser(hasUser);
  }, [isFocused]);

  async function handleSearch() {
    if (input === '') {
      alert('Digite primeiro o nome de um grupo!');
      return;
    }

    const responseSearch = await firestore()
      .collection('MESSAGE_THREADS')
      .where('name', '>=', input)
      .where('name', '<=', input + '\uf8ff')
      .get()
      .then(querySnapshot => {
        const threads = querySnapshot.docs.map(documentSnapshot => {
          return {
            _id: documentSnapshot.id,
            name: '',
            lastMessage: {text: ''},
            ...documentSnapshot.data(),
          };
        });

        setGroups(threads);
        setInput('');
        Keyboard.dismiss();
      });
  }

  return (
    <Container>
      <SearchContainer>
        <InputLabel>Digite o nome de um grupo</InputLabel>

        <InputContainer>
          <Input value={input} onChangeText={value => setInput(value)} />
          <Button onPress={handleSearch}>
            <Feather name="search" size={24} color="#fff" />
          </Button>
        </InputContainer>
      </SearchContainer>

      <FlatList
        style={{width: '96%', maxWidth: 500}}
        keyExtractor={item => item._id}
        data={groups}
        renderItem={({item}) => <ListGroups data={item} userStatus={user} />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
