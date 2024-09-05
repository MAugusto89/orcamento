import * as React from 'react';
import { Button, View } from 'react-native';

import {style} from './style'

export default function ClienteScreen({ navigation }) {
  return (
    <View style={style.container}>
      <Button
        title="Avançar Produtos"
        onPress={() => navigation.navigate('Produtos')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}