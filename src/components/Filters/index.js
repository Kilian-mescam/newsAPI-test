// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import './filters.scss';

// == Composant
const Filters = ({
  manageSubmit,
  updateSearchValue,
  updateDatedFrom,
  updateDatedTo,
  search,
  loadNews,
  endDate,
  startDate
}) => {
  console.log('Filters');

  const languageOptions = [
    { key: 'ar', value: 'ar', text: 'Arabe-ar' },
    { key: 'de', value: 'de', text: 'Allemand-de' },
    { key: 'en', value: 'en', text: 'Anglais-en' },
    { key: 'es', value: 'es', text: 'Estonie-es' },
    { key: 'fr', value: 'fr', text: 'Français-fr' },
    { key: 'he', value: 'he', text: 'Hébreu-he' },
    { key: 'it', value: 'it', text: 'Italien-it' },
    { key: 'nl', value: 'nl', text: 'Hollande-nl' },
    { key: 'no', value: 'no', text: 'Norvège-no' },
    { key: 'pt', value: 'pt', text: 'Portugais-pt' },
    { key: 'ru', value: 'ru', text: 'Russe-ru' },
    { key: 'se', value: 'se', text: 'sami du Nord-se' },
    { key: 'zh', value: 'zh', text: 'Chinois-zh' },
  ];

  return (
    <div className="filters">
      <form
        action=""
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          manageSubmit();
          loadNews();
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
        />

        <div className="select-bloc">
          <div className="select">
            <label htmlFor="start-date">
              Date de publication :
            </label>
            <input
              className="input-start-date"
              type="date"
              id="date"
              min="2011-01-01"
              max="2021-08-31"
              value={startDate}
              onChange={(event) => {
                updateDatedFrom(event.currentTarget.value);
              }}
            />
            <input
              className="input-end-date"
              type="date"
              id="date"
              min="2011-01-01"
              max="2021-08-31"
              value={endDate}
              onChange={(event) => {
                updateDatedTo(event.currentTarget.value);
              }}
            />
          </div>

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
  endDate: PropTypes.string,
  startDate: PropTypes.string,
  updateSearchValue: PropTypes.func.isRequired,
  updateDatedFrom: PropTypes.func.isRequired,
  updateDatedTo: PropTypes.func.isRequired,
  manageSubmit: PropTypes.func.isRequired,
  loadNews: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
Filters.defaultProps = {
  search: '',
  endDate: '',
  startDate: '',
};

// == Export
export default Filters;
