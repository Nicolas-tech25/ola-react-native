import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";

export default function App() {
  const vai = () => {
    Alert.alert("Titulo da janela", "VAI CORINTHIANSSS");
  };
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <View>
          <Text>Topo/cabeçalho</Text>
        </View>
        <View>
          <Text>Conteúdo</Text>
        </View>
        <View>
          <Text>Rodapé</Text>
        </View>
        <Button title="Dá uma tocada" color="red" onPress={vai} />
      </SafeAreaView>
    </>
  );
}
