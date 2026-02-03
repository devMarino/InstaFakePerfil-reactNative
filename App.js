import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './src/components/Header';
import Perfil from './src/components/Perfil';
import Biografia from './src/components/Biografia';
import Botoes from './src/components/Botoes';
import Icones from './src/components/Icones';
import Grid from './src/components/Grid';
export default function App() {
  return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar/>
          <View>
              <Header/>
              <Perfil/>
              <Biografia/>
              <Botoes/>
              <Icones/>
              <Grid/>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  }
});
