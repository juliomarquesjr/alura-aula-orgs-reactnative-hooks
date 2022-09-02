import React, {useMemo, useReducer} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Estrelas from '../../../components/Estrelas';

const distanciaEmMetros = distancia => {
  return `${distancia}m`;
};

const Produtor = ({nome, imagem, distancia, estrelas}) => {
  //const [selecionado, setSelecionado] = useState(false);

  const [selecionado, inverterSeleciona] = useReducer(
    selecionado => !selecionado,
    false,
  );

  const distanciaEmTexto = useMemo(() => {
    distanciaEmMetros(distancia);
  }, [distancia]);

  return (
    <TouchableOpacity style={estilos.cartao} onPress={inverterSeleciona}>
      <Image style={estilos.imagem} source={imagem} accessibilityLabel={nome} />
      <View style={estilos.informacoes}>
        <View>
          <Text style={estilos.nome}>{nome}</Text>
          <Estrelas
            quantidade={estrelas}
            editavel={selecionado}
            grande={selecionado}
          />
        </View>
        <Text style={estilos.distancia}>{distanciaEmTexto}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Produtor;

const estilos = StyleSheet.create({
  cartao: {
    backgroundColor: '#F6F6F6',
    marginVertical: 8,
    marginHorizontal: 8,
    borderEndColor: 6,
    flexDirection: 'row',

    //Android
    elevation: 4,
  },

  informacoes: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },

  nome: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },

  distancia: {
    fontSize: 12,
    lineHeight: 19,
  },

  imagem: {
    height: 48,
    width: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
});
