// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import NewsResults from 'src/containers/NewsResults';
import Filters from 'src/containers/Filters';

import './styles.scss';

import appsoluteLogo from './appsolute.png';

// == Composant
const App = ({ loadNews, newsLoaded }) => {
  useEffect(() => {
    loadNews();
  }, []);

  return (
    <div className="app">
      <header className="logo">
        <img src={appsoluteLogo} alt="react logo" />
      </header>
      {newsLoaded && (
        <>
          <Filters />
          <NewsResults />
        </>
      )}
      {!newsLoaded && (
      <div>Chargement des recettes...</div>
      )}
    </div>
  );
};

App.propTypes = {
  loadNews: PropTypes.func.isRequired,
  newsLoaded: PropTypes.bool.isRequired,
};

// == Export
export default App;
