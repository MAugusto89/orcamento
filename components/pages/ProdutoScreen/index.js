import * as React from 'react';
import { Button, View } from 'react-native';

import {style} from './style'

export default function ProdutoScreen({ navigation }) {
  return (
    <View style={style.container}>
      <Button
        title="Exportar"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}