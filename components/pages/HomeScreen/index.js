import { useState, useEffect } from 'react';
import { 
  Alert, 
  FlatList, 
  Pressable, 
  StyleSheet, 
  Text, 
  TextInput, 
  View,
} from 'react-native';

import { style } from '../HomeScreen/style';


///////////////////////////////////////////////////////////////////////////////////////////
// Função utilizada para criar o BD ao iniciar a aplicação.
// Caso BD já exista, não será criado novamente, portanto os dados permanecerão
/*const iniciarBancoDeDados = async (db) => {
  try {
    await db.execAsync(`
      PRAGMA journal_mode = WAL;
      -- DROP TABLE usuario;
      CREATE TABLE IF NOT EXISTS usuario (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        email TEXT,
        telefone TEXT
      );
    `)
    console.log('Banco de Dados inicializado')
  } catch (error) {
    console.log('Erro ao iniciar o Banco de Dados. ', error);
  }
}


///////////////////////////////////////////////////////////////////////////////////////////
// Componente Usuario
// Este componente é utilizado para renderizar os dados do FlatList/BD
const UsuarioBotao = ({usuario, excluirUsuario, atualizarUsuario}) => {

  const [usuarioSelecionado, setUsuarioSelecionado] = useState(null);
  const [estaEditando, setEstaEditando] = useState(false);
  const [usuarioEditado, setUsuarioEditado] = useState({
    nome: usuario.nome,
    email: usuario.email,
    telefone: usuario.telefone,
  });


  // função para confirmar a exclusão de um usuário
  const confirmarExcluir = () => {
    Alert.alert(
      "Atenção!",
      'Deseja excluir o usuário?',
      [
        { text: 'Não', onPress: () => { }, style: 'cancel' },
        { text: 'Sim', onPress: () => excluirUsuario(usuario.id) },
      ],
      { cancelable: true }
    );
  }


  // função para confirmar edição
  const handleEditar = () => {
    atualizarUsuario(usuario.id, usuarioEditado.nome, usuarioEditado.email, usuarioEditado.telefone);
    setEstaEditando(false);
  }


  return (
    <View>
      <Pressable 
        style={styles.usuarioBotao}
        onPress={() => setUsuarioSelecionado(usuarioSelecionado === usuario.id ? null : usuario.id)}
      >
        <Text style={styles.usuarioTexto}>{usuario.id} - {usuario.nome}</Text>
        {usuarioSelecionado === usuario.id && (
          <View style={styles.actions}>
            <AntDesign 
              name='edit'
              size={18}
              color='blue'
              onPress={() => setEstaEditando(true)}
              style={styles.icon}
            />
            <AntDesign 
              name='delete'
              size={18}
              color='red'
              onPress={confirmarExcluir}
              style={styles.icon}
            />
          </View>
        )}
      </Pressable>

      {usuarioSelecionado === usuario.id && !estaEditando && (

      <View style={styles.usuarioConteudo}>
        <Text>Nome: {usuario.nome}</Text>
        <Text>Email: {usuario.email}</Text>
        <Text>Telefone: {usuario.telefone}</Text>
      </View>
      )}

      {usuarioSelecionado === usuario.id && estaEditando && (
        <UsuarioFormulario usuario={usuarioEditado} setUsuario={setUsuarioEditado} onSave={handleEditar} setMostrarFormulario={setEstaEditando} />
      )}
    </View>
  )
};
*/

///////////////////////////////////////////////////////////////////////////////////////////
// Componente Usuario Formulário
// Este componente é utilizado para mostrar o formulário que será utilizado para
// criar ou atualizar um registro no BD
export const HomeScreen = ({ usuario, setUsuario, onSave, setMostrarFormulario }) => {
  return (
    <View>
      <TextInput 
        style={style.input}
        placeholder='Nome'
        //value={usuario.nome}
        autoCapitalize='words'
        onChangeText={(text) => setUsuario({...usuario, nome: text})}
      />
      <TextInput 
        style={style.input}
        placeholder='Email'
        //value={usuario.email}
        onChangeText={(text) => setUsuario({...usuario, email: text})}
        autoCapitalize='none'
        keyboardType='email-address'
      />
      <TextInput 
        style={style.input}
        placeholder='Telefone'
        //value={usuario.telefone}
        onChangeText={(text) => setUsuario({...usuario, telefone: text})}
        keyboardType='phone-pad'
      />
 
      <Pressable
        onPress={onSave}
        style={style.saveButton}
      >
        <Text style={style.buttonText}>Salvar</Text>
      </Pressable>

      <Pressable
        onPress={() => {setMostrarFormulario(false)}}
        style={style.cancelButton}
      >
        <Text style={style.buttonText}>Cancelar</Text>
      </Pressable>
    </View>
  );
}


///////////////////////////////////////////////////////////////////////////////////////////
// Função principal do aplicativo
// Primeira função executada ao abrir o aplicativo


/*
///////////////////////////////////////////////////////////////////////////////////////////
// Componente para mostrar todo o conteúdo do BD
// Este componente contém toda a parte de manipulação (CRUD) com o BD
export const Conteudo = () => {
  const db = useSQLiteContext();
  const [usuarios, setUsuarios] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [usuario, setUsuario] = useState({ id: 0, nome: '', email: '', telefone: '' });

  // função para obter todos os funcion
  const getUsuarios = async () => {
    try {
      // consultar a tabela
      const todosRegistros = await db.getAllAsync('SELECT * FROM usuario');
      // armazenar os dados da tabela no hook
      setUsuarios(todosRegistros);
    } catch (error) {
      console.log('Erro ao ler os dados dos usuários: ', error)
    }
  };

  // CREATE / INSERT
  const confirmarSalvar = () => {
    if (usuario.nome.length === 0 || usuario.email.length === 0 || usuario.telefone.length === 0) {
      Alert.alert('Atenção!', 'Por favor, preencha todos os dados!');
    } else {
      Alert.alert('Atenção!', 'Usuário salvo com sucesso!')
      adicionarUsuario(usuario);

      // limpart os campos do formulár
      setUsuario({nome: '', email: '', telefone: ''});

      // ocultar o formulario
      setMostrarFormulario(false);
    }
  }

  // função para adicionar um usuário
  const adicionarUsuario = async (novoUsuario) => {
    try {
      // montar a query de inserção
      const query = await db.prepareAsync('INSERT INTO usuario (nome, email, telefone) VALUES (?, ?, ?)')
      await query.executeAsync([novoUsuario.nome, novoUsuario.email, novoUsuario.telefone]);
      await getUsuarios();
    } catch (error) {
      console.log('Erro ao adicionar o usuário', error)
    }
  }

  // UPDATE
  // função para atualizar um usuário
  const atualizarUsuario = async (usuarioId, novoUsuarioNome, novoUsuarioEmail, novoUsuarioTelefone) => {
    try {
      a = await db.runAsync('UPDATE usuario SET nome = ?, email = ?, telefone = ? WHERE id = ?', [novoUsuarioNome, novoUsuarioEmail, novoUsuarioTelefone, usuarioId]);
      Alert.alert('Atenção!', 'Usuário salvo com sucesso!')
      await getUsuarios();
    } catch (error) {
      console.log('Erro ao atualizar o estudante.', error);
    }
  };


  // DELETE
  // função para confirmar exclusão de todos os usuários
  const confirmarExcluirTodos = () => {
    Alert.alert(
      'Atenção', 
      'Deseja excluir todos os usuários', 
      [
        { text: 'Não', onPress: () => { }, style: 'cancel' },
        { text: 'Sim', onPress: excluirTodosUsuarios },
      ],
      { cancelable: true }
    );
  }
  
  // função para excluir todos os usuários
  const excluirTodosUsuarios = async () => {
    try {
      await db.runAsync('DELETE FROM usuario');
      await getUsuarios();
    } catch (error) {
      console.log('Erro ao excluir os usuários : ', error);
    }
  };

  // função para excluir um usuário
  const excluirUsuario = async (id) => {
    try {
      await db.runAsync('DELETE FROM usuario WHERE id = ?', [id]);
      await getUsuarios();
    } catch (error) {
      console.log('Erro ao excluir o usuário: ', error);
    }
  }

  // obter todos os usuários ao abrir o aplicativo
  useEffect(() => {
    getUsuarios();
  }, []);

  // parte visual do componente
  return (
    <View style={styles.contentContainer}>
      {usuarios.length === 0 ? (
        <Text>Não existem usuários</Text>
      ) : (
        <FlatList 
          data={usuarios}
          renderItem={({ item }) => (<UsuarioBotao usuario={item} excluirUsuario={excluirUsuario} atualizarUsuario={atualizarUsuario} />)}
          keyExtractor={(item) => item.id.toString()}
        />
      )}

      {mostrarFormulario && (<UsuarioFormulario usuario={usuario} setUsuario={setUsuario} onSave={confirmarSalvar} setMostrarFormulario={setMostrarFormulario} />)}

      <View style={styles.iconsContent}>
        <AntDesign 
            name='pluscircleo'
            size={24}
            color='blue'
            onPress={() => setMostrarFormulario(true)}
            style={styles.icon}
          />
          
          <AntDesign 
            name='deleteusergroup'
            size={24}
            color='red'
            onPress={confirmarExcluirTodos}
            style={styles.icon}
          />
      </View>
    </View>
  );
}*/