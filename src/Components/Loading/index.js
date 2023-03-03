import React from 'react';
import {View, Image, ActivityIndicator} from 'react-native';

export default function Loading() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={require('../../assets/logo.png')}
        style={{
          width: 120,
          height: 120,
          marginBottom: 16,
        }}
      />
      <ActivityIndicator color={'#13b8a7'} size={40} />
    </View>
  );
}
