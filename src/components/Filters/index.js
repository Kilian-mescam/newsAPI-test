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
  startDate,
  updateLanguage,
  updateSortBy,
}) => {
  const languageOptions = [
    { key: 'ar', value: 'ar', text: 'Arabe' },
    { key: 'de', value: 'de', text: 'Allemand' },
    { key: 'en', value: 'en', text: 'Anglais' },
    { key: 'es', value: 'es', text: 'Espagnol' },
    { key: 'fr', value: 'fr', text: 'Français' },
    { key: 'he', value: 'he', text: 'Hébreu' },
    { key: 'it', value: 'it', text: 'Italien' },
    { key: 'nl', value: 'nl', text: 'Hollande' },
    { key: 'no', value: 'no', text: 'Norvège' },
    { key: 'pt', value: 'pt', text: 'Portugais' },
    { key: 'ru', value: 'ru', text: 'Russe' },
    { key: 'se', value: 'se', text: 'sami du Nord' },
    { key: 'zh', value: 'zh', text: 'Chinois' },
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
          <div className="select-date">
            <label htmlFor="start-date">
              De:
            </label>
            <input
              className="input-date"
              type="date"
              id="start-date"
              min="2021-08-04"
              max="2021-09-03"
              value={startDate}
              onChange={(event) => {
                updateDatedFrom(event.currentTarget.value);
              }}
            />
            <label htmlFor="end-date">
              jusqu'à :
            </label>
            <input
              className="input-date"
              type="date"
              id="end-date"
              min="2021-08-04"
              max="2021-09-03"
              value={endDate}
              onChange={(event) => {
                updateDatedTo(event.currentTarget.value);
              }}
            />
          </div>

          <select
            name="filter-type"
            id="filter-select"
            className="select-langue"
            onChange={(event) => {
              updateLanguage(event.currentTarget.value);
            }}
          >
            <option value="0" disabled selected value>Langue</option>
            {languageOptions.map((languageItem) => (
              <option
                key={languageItem.key}
                value={languageItem.value}
              >
                {languageItem.text}
              </option>
            ))}

          </select>

          <select
            name="filter-type"
            id="filter-select"
            className="select-tri"
            onChange={(event) => {
              updateSortBy(event.currentTarget.value);
            }}
          >
            <option value="0" disabled selected value>Trier par</option>
            <option value="popularity">Popularité</option>
            <option value="relevancy">Pertinence</option>
            <option value="publishedAt">Dates</option>
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
  updateLanguage: PropTypes.func.isRequired,
  updateSortBy: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
Filters.defaultProps = {
  search: '',
  endDate: '',
  startDate: '',
};

// == Export
export default Filters;
