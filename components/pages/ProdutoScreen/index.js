import * as React from "react";
import { View, TextInput, Pressable, Text } from "react-native";

import { style } from "./style";

export const ProdutoScreen = ({ usuario, setUsuario, onSave }) => {
  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        placeholder="Nome Produto"
        //value={usuario.nomeProduto}
        autoCapitalize="words"
        onChangeText={(text) => setUsuario({ ...usuario, nomeProduto: text })}
      />
      <TextInput
        style={style.input}
        placeholder="Marca/Modelo"
        //value={usuario.marcaModelo}
        autoCapitalize="words"
        onChangeText={(text) => setUsuario({ ...usuario, marcaModelo: text })}
      />
      <TextInput
        style={style.input}
        placeholder="Quantidade"
        //value={usuario.quantidade}
        onChangeText={(text) => setUsuario({ ...usuario, quantidade: text })}
        keyboardType="numeric"
      />
      <TextInput
        style={style.input}
        placeholder="Valor"
        //value={usuario.valor}
        onChangeText={(text) => setUsuario({ ...usuario, valor: text })}
        keyboardType="numeric"
      />

      <Pressable onPress={onSave} style={style.button}>
        <Text style={style.buttonText}>Salvar</Text>
      </Pressable>
      <Pressable style={style.button}>
        <Text style={style.buttonText}>Exportar</Text>
      </Pressable>
    </View>
  );
};
