// === action types
export const UPDATE_SEARCH_VALUE = 'UPDATE_SEARCH_VALUE';
export const UPDATE_DATED_FROM = 'UPDATE_DATED_FROM';
export const UPDATE_DATED_TO = 'UPDATE_DATED_TO';
export const MANAGE_SUBMIT = 'MANAGE_SUBMIT';

// action creators
export const updateSearchValue = (value) => ({
  type: UPDATE_SEARCH_VALUE,
  value: value,
});

export const updateDatedFrom = (value) => ({
  type: UPDATE_DATED_FROM,
  value: value,
});

export const updateDatedTo = (value) => ({
  type: UPDATE_DATED_TO,
  value: value,
});

export const manageSubmit = () => ({
  type: MANAGE_SUBMIT,
});
