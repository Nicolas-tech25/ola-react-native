import { StyleSheet } from "react-native";
const estilos = StyleSheet.create({
  container: {
    backgroundColor: "lightyellow",
    flex: 1,
    fontSize: 1,
  },
  cabecalho: {
    backgroundColor: "lightblue",
    flex: 0.6,
  },
  conteudo: {
    backgroundColor: "darkorange",
    flex: 4,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "4",
    marginBottom: "4",
    borderRadius: 10,
  },
  rodape: {
    backgroundColor: "lightgreen",
    flex: 0.7,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default estilos;
