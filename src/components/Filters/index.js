import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import './filters.scss';

// == Composant
const Filters = ({ manageSubmit, updateSearchValue, search, textInput }) => {
  console.log('Filters');

  return (
    <div className="filters">
      <form
        action=""
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          manageSubmit();
        }}
      >
        <input
          type="text"
          name="search"
          id="search"
          className="input"
          value={search}
          onChange={(event) => {
            updateSearchValue(event.currentTarget.value);
          }}
          ref={textInput}
        />

        <div className="select-bloc">
          <div className="select">
            <label htmlFor="date">
              Date de publication :
            </label>
            <input
              className="input-date"
              type="date"
              id="date"
              min="2011-01-01"
              max="2021-08-31"
            />
          </div>

          <select name="language" id="language-select" className="select">
            <option value="3">Par langue</option>
            <option value="4">Français</option>
            <option value="5">Anglais</option>
          </select>
          <select name="filter-type" id="filter-select" className="select">
            <option value="6">Par type de tri</option>
            <option value="7">Par popularité</option>
            <option value="8">Pertinence</option>
            <option value="9">Dates</option>
          </select>
        </div>
        <button
          type="submit"
          className="button"
        >
          Rechercher
        </button>
      </form>
    </div>
  );
};

Filters.propTypes = {
  search: PropTypes.string,
  updateSearchValue: PropTypes.func.isRequired,
  manageSubmit: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
Filters.defaultProps = {
  search: '',
};

// == Export
export default Filters;
