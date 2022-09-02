import {useState, useEffect} from 'react';
import { carregadoProdutores } from '../services/carregaDados';

const useProdutores = () => {
  const [titulo, setTitulo] = useState('produtores');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const retorno = carregadoProdutores();
    setTitulo(retorno.titulo);
    setLista(retorno.lista);
  }, []);

  return [titulo, lista]
};
export default useProdutores;
