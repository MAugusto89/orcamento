import * as React from "react";
import { View, TextInput, Pressable, Text } from "react-native";

import { style } from "./style";

export const ClienteScreen = ({ navigation, usuario, setUsuario, onSave }) => {
  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        placeholder="Nome Cliente"
        //value={usuario.nomeCliente}
        autoCapitalize="words"
        onChangeText={(text) => setUsuario({ ...usuario, nomeCliente: text })}
      />
      <TextInput
        style={style.input}
        placeholder="Endereço"
        //value={usuario.endereco}
        autoCapitalize="words"
        onChangeText={(text) => setUsuario({ ...usuario, endereco: text })}
      />
      <TextInput
        style={style.input}
        placeholder="Telefone"
        //value={usuario.telefone}
        onChangeText={(text) => setUsuario({ ...usuario, telefone: text })}
        keyboardType="phone-pad"
      />

      <TextInput
        style={style.input}
        placeholder="Serviço"
        //value={usuario.servico}
        autoCapitalize="words"
        onChangeText={(text) => setUsuario({ ...usuario, servico: text })}
      />

      <Pressable
        onPress={() => {
          if (onSave) onSave(); // Adicionei a chamada para onSave se for fornecido
          navigation.navigate("Produto");
        }}
        style={style.saveButton}
      >
        <Text style={style.buttonText}>Avançar</Text>
      </Pressable>
    </View>
  );
};
