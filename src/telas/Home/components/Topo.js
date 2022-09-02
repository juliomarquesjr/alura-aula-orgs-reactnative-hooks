import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import logo from '../../../assets/logo.png';
import {carregaTopo} from '../../../services/carregaDados';

const Topo = () => {
  const [boasVindas, setBoasVindas] = useState('boas vindas');
  const [legenda, setLegenda] = useState('legenda');

  useEffect(() => {
    const retorno = carregaTopo()
    setBoasVindas(retorno.home.boasVindas)
    setLegenda(retorno.home.legenda)
  }, []);

  return (
    <View style={estilos.topo}>
      <Image style={estilos.imagem} source={logo} />
      <Text style={estilos.boasVindas}>{boasVindas}</Text>
      <Text style={estilos.legenda}>{legenda}</Text>
    </View>
  );
};
export default Topo;

const estilos = StyleSheet.create({
  topo: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },

  imagem: {
    width: 70,
    height: 28,
  },

  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },

  legenda: {
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3',
  },
});
