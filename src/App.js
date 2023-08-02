import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Template from './components/Template';
import Header from './components/Header';
import List from './components/List';
import Create from './components/Create';
import { Provider } from './Context';

const GlobalStyle = createGlobalStyle `
  body {
    background: #f8f9fa
  }
`;

function App() {
  return (
    <Provider>
      <GlobalStyle />
      <Header />
      <List />
      <Create />
      <Template />
    </Provider>
  );
}

export default App;
