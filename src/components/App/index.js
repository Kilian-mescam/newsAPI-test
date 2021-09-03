// == Import npm
import React from 'react';

// == Import
import NewsResults from 'src/containers/NewsResults';
import Filters from 'src/containers/Filters';

import './styles.scss';

import appsoluteLogo from './appsolute.png';

// == Composant
const App = () => (
  <div className="app">
    <header className="logo">
      <img src={appsoluteLogo} alt="react logo" />
    </header>
    <Filters />
    <NewsResults />
  </div>
);


// == Export
export default App;
