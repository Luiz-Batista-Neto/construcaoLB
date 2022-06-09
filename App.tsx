import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CadastroScreen } from './src/telas/cadastro/cadastro';
import Logintela from './src/telas/login/login';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="black" />
      {/* <Logintela /> */}
      <CadastroScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecb80f',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
