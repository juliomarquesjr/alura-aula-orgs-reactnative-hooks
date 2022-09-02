import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import Home from './src/telas/Home'

const App = () => {
  return (
    <SafeAreaView style={estilos}>
      <StatusBar />
      <Home />
    </SafeAreaView>
  );
};
export default App;

const estilos = StyleSheet.create({
  tela: {
    flex: 1
  }
})