import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    maxWidth: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginVertical: 60,
    marginBottom: 20,
  },
  usuarioBotao: {
    backgroundColor: "lightblue",
    padding: 6,
    marginTop: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  usuarioTexto: {
    fontSize: 20,
    fontWeight: "700",
  },
  usuarioConteudo: {
    backgroundColor: "#cdcdcd",
    padding: 10,
  },
  icon: {
    marginHorizontal: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginVertical: 4,
    width: "95%",
    borderRadius: 15,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    marginVertical: 4,
    width: "80%",
    borderRadius: 15,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  iconsContent: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
