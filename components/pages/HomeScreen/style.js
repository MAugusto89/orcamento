import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 60,
    marginBottom: 20,
  },

  contentContainer: {
    flex: 1,
    width: '90%',
  },
  usuarioBotao: {
    backgroundColor: 'lightblue',
    padding: 6,
    marginTop: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  usuarioTexto: {
    fontSize: 20, 
    fontWeight: '700',
  },
  usuarioConteudo: {
    backgroundColor: '#cdcdcd',
    padding: 10,
  }, 
  icon: {
    marginHorizontal: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 4,
  },
  saveButton: {
    backgroundColor: 'blue',
    padding: 10,
    marginVertical: 4,
  },
  buttonText: {
    color:'white',
    textAlign:'center',
  },
  cancelButton: {
    backgroundColor:'grey',
    padding: 10,
    marginVertical: 5,
  },
  iconsContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  actions: {
    flexDirection:'row',
    justifyContent: 'space-around',
    padding:10,
  },
});