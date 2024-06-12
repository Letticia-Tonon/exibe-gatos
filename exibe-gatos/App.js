import { StyleSheet, View } from "react-native";
import Botao from "./src/botao";
import Lista from "./src/lista";

export default function App() {
  return (
    <View style={styles.app}>
      <View style={styles.containerLista}>
        <Lista></Lista>
      </View>
      <View style={styles.containerBotao}>
        <Botao texto="Gerar Imagens" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  containerLista: {
    width: "85%",
    height: "85%",
    paddingTop: 10
  },
  containerBotao: {
    width: "85%",
    height: "15%",
    paddingTop: 10
  },
});
