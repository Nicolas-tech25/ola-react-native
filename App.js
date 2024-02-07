import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Button,
  Alert,
  StyleSheet,
} from "react-native";

export default function App() {
  const vai = () => {
    Alert.alert("Titulo da janela", "VAI CORINTHIANSSS");
  };
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={estilos.container}>
        <View style={estilos.cabecalho}>
          <Text>Topo/cabeçalho</Text>
        </View>
        <View style={estilos.conteudo}>
          <Text>Conteúdo</Text>
        </View>
        <View style={estilos.rodape}>
          <Text>Rodapé</Text>
        </View>
        <Button title="Dá uma tocada" color="red" onPress={vai} />
      </SafeAreaView>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "lightyellow",
    flex: 1,
  },
  cabecalho: {
    backgroundColor: "lightblue",
    flex: 0.6,
  },
  conteudo: {
    backgroundColor: "darkorange",
    flex: 4,
  },
  rodape: {
    backgroundColor: "lightgreen",
    flex: 0.7,
  },
});
