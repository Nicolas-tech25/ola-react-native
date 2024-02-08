import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";
import estilos from "./src/stylesSheets/estilos";
export default function App() {
  const vai = () => {
    Alert.alert("Titulo da janela", "VAI CORINTHIANSSS");
  };
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={estilos.container}>
        <View style={estilos.cabecalho}>
          <Text style={estilos.textTitulo}>Topo/cabeçalho</Text>
        </View>
        <View style={estilos.conteudo}>
          <Text style={estilos.textTitulo}>Conteúdo</Text>
          <Text style={estilos.texto}>
            O Sport Club Corinthians Paulista, conhecido popularmente como
            Corinthians, é um dos clubes de futebol mais icônicos e
            apaixonadamente seguidos no Brasil. Fundado em 1º de setembro de
            1910, o Corinthians tem uma história rica e uma base de torcedores
            fervorosos.
          </Text>
        </View>
        <View style={estilos.rodape}>
          <Text style={estilos.textTitulo}>Rodapé</Text>
        </View>
        <Button title="Dá uma tocada" style={estilos.botao} onPress={vai} />
      </SafeAreaView>
    </>
  );
}
