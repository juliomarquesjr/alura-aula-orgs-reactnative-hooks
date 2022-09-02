import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import useProdutores from '../../../hooks/useProdutores';

import Produtor from './Produtor';

const Produtores = ({topo: Topo}) => {
  //Hook criada para trazer os dados carregados nas Mooks
  const [titulo, lista] = useProdutores()

  const TopoLista = () => {
    return (
      <React.Fragment>
        <Topo />
        <Text style={estilos.titulo}>{titulo}</Text>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <FlatList
        data={lista}
        renderItem={({item}) => <Produtor {...item} />}
        keyExtractor={({nome}) => nome}
        ListHeaderComponent={TopoLista}
      />
    </React.Fragment>
  );
};
export default Produtores;

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});
