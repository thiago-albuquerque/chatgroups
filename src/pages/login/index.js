import React, {useState} from 'react';
import {ScrollView} from 'react-native';

import auth from '@react-native-firebase/auth';

import {useNavigation} from '@react-navigation/native';

import Loading from '../../Components/Loading';

import {
  Container,
  Logo,
  Title,
  InputLabel,
  Input,
  Button,
  ButtonText,
  SignUpButton,
  SignUpText,
  SignUpTextBold,
} from './styles';

export default function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState(false);

  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  async function handleLogin() {
    if (type) {
      if (name === '' || email === '' || password === '') {
        alert('Preencha todos os campos!');
        return;
      }

      setLoading(true);

      await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(value => {
          value.user
            .updateProfile({
              displayName: name,
            })

            .then(() => {
              navigation.goBack();
              setLoading(false);
            });
        })
        .catch(error => {
          setLoading(false);

          if (error.code === 'auth/email-already-in-use') {
            alert('Este e-mail já existe!');
            console.log('Erro: ' + error);
          }

          if (error.code === 'auth/invalid-email') {
            alert('Este e-mail não é válido!');
            console.log('Erro: ' + error);
          }
        });
    } else {
      if (email === '' || password === '') {
        alert('Preencha todos os campos!');
        return;
      }

      setLoading(true);

      await auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          navigation.goBack();
          setLoading(false);
        })
        .catch(error => {
          setLoading(false);

          if (error.code === 'auth/invalid-email') {
            alert('Este e-mail não é válido!');
            console.log('Erro: ' + error);
          }
        });
    }
  }

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Logo source={require('../../assets/logo.png')} />
          <Title>Chat Groups</Title>

          {type && (
            <>
              <InputLabel>Nome</InputLabel>
              <Input
                value={name}
                onChangeText={value => {
                  setName(value);
                }}
              />
            </>
          )}

          <InputLabel>Email</InputLabel>
          <Input
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={value => {
              setEmail(value);
            }}
          />

          <InputLabel>Senha</InputLabel>
          <Input
            keyboardType="numeric"
            secureTextEntry={true}
            value={password}
            onChangeText={value => {
              setPassword(value);
            }}
          />

          <Button onPress={handleLogin}>
            <ButtonText>{type ? 'Cadastrar' : 'Entrar'}</ButtonText>
          </Button>

          <SignUpButton onPress={() => setType(!type)}>
            <SignUpText>
              {type ? 'Já possui uma conta? ' : 'Não tem uma conta? '}
              <SignUpTextBold>
                {type ? 'Faça Login.' : 'Clique Aqui.'}
              </SignUpTextBold>
            </SignUpText>
          </SignUpButton>
        </ScrollView>
      )}
    </Container>
  );
}
