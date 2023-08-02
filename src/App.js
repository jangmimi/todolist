import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Template from './components/Template';
import Header from './components/Header';
import { Provider } from './Context';
import List from './components/List';
import Create from './components/Create';

const GlobalStyle = createGlobalStyle `
  body {
    background: #003399;
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
