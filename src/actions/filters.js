// === action types
export const UPDATE_SEARCH_VALUE = 'UPDATE_SEARCH_VALUE';
export const UPDATE_DATED_FROM = 'UPDATE_DATED_FROM';
export const UPDATE_DATED_TO = 'UPDATE_DATED_TO';
export const MANAGE_SUBMIT = 'MANAGE_SUBMIT';
export const UPDATE_LANGUAGE = 'UPDATE_LANGUAGE';
export const UPDATE_SORT_BY = 'UPDATE_SORT_BY';

// action creators
export const updateSearchValue = (value) => ({
  type: UPDATE_SEARCH_VALUE,
  value: value,
});

export const updateSortBy = (sortByValue) => ({
  type: UPDATE_SORT_BY,
  sortByValue: sortByValue,
});

export const updateDatedFrom = (datedFromValue) => ({
  type: UPDATE_DATED_FROM,
  datedFromValue: datedFromValue,
});

export const updateLanguage = (languageValue) => ({
  type: UPDATE_LANGUAGE,
  languageValue: languageValue,
});

export const updateDatedTo = (datedToValue) => ({
  type: UPDATE_DATED_TO,
  datedToValue: datedToValue,
});

export const manageSubmit = () => ({
  type: MANAGE_SUBMIT,
});
