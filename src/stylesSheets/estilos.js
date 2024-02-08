import { StyleSheet } from "react-native";
const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    fontSize: 1,
  },
  cabecalho: {
    backgroundColor: "black",
    flex: 0.6,
  },
  conteudo: {
    backgroundColor: "#d21404",
    flex: 4,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "4",
    marginBottom: "4",
    borderRadius: 10,
  },
  rodape: {
    backgroundColor: "#0492c2",
    flex: 0.7,
  },
  textTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    margin: 10,
  },
  texto: {
    color: "black",
    padding: 5,
    margin: 10,
  },
  botao: {
    backgroundColor: "white",
    color: "black",
  },
});
export default estilos;
