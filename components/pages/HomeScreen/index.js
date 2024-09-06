import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { style } from "../HomeScreen/style";
import { adicionarEmpresa, excluirUsuario } from "../../../db";

export const HomeScreen = ({
  navigation,
  empresa,
  setEmpresa,
  onSave,
  setMostrarFormulario,
}) => {
  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        placeholder="Empresa"
        value={empresa.nome}
        autoCapitalize="words"
        onChangeText={(text) => setEmpresa({ ...empresa, nome: text })}
      />
      <TextInput
        style={style.input}
        placeholder="CNPJ"
        value={empresa.cnpj}
        onChangeText={(text) => setEmpresa({ ...empresa, cnpj: text })}
        keyboardType="number-pad"
      />
      <TextInput
        style={style.input}
        placeholder="Email"
        value={empresa.email}
        onChangeText={(text) => setEmpresa({ ...empresa, email: text })}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={style.input}
        placeholder="Telefone"
        value={empresa.telefone}
        onChangeText={(text) => setEmpresa({ ...empresa, telefone: text })}
        keyboardType="phone-pad"
      />

      <Pressable
        onPress={(adicionarEmpresa, () => navigation.navigate("Cliente"))}
        style={style.saveButton}
      >
        <Text style={style.buttonText}>Entrar</Text>
      </Pressable>

      <Pressable onPress={excluirUsuario} style={style.cancelButton}>
        <Text style={style.buttonText}>Cancelar</Text>
      </Pressable>
    </View>
  );
};
