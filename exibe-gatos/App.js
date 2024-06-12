import { StyleSheet, View } from 'react-native';
import Botao from './src/botao';

export default function App() {
  return (
    <View style={styles.app}>
      <View style={styles.container}>
        <Botao texto="Gerar Imagens" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  container: {
    width: '85%',
  }
});
