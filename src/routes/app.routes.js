import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../pages/login';
import GroupsRoom from '../pages/groupsRoom';
import ChatRoom from '../pages/chatRoom';
import Search from '../pages/search';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="GroupsRoom">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="GroupsRoom"
        component={GroupsRoom}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ChatRoom"
        component={ChatRoom}
        options={({route}) => ({
          title: route.params.thread.name,
          headerStyle: {
            backgroundColor: '#010B1A',
          },
          headerTintColor: '#fff',
        })}
      />

      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Procurando algum grupo?',
          headerStyle: {
            backgroundColor: '#010B1A',
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
}
