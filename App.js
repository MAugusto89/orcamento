import * as React from 'react';
import { Button, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ProdutoScreen from './components/pages/ProdutoScreen';
import { HomeScreen } from './components/pages/HomeScreen';
import ClienteScreen from './components/pages/ClienteScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Cliente" component={ClienteScreen} />
      <Stack.Screen name="Produtos" component={ProdutoScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}