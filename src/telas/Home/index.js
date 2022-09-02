import React from 'react';
import Produtores from './components/Produtores';

import Topo from './components/Topo';

const Home = () => {
  return (
    <React.Fragment>
      <Produtores topo={Topo} />
    </React.Fragment>
  );
};
export default Home;
