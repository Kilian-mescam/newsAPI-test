// === action types
export const UPDATE_SEARCH_VALUE = 'UPDATE_SEARCH_VALUE';
export const MANAGE_SUBMIT = 'MANAGE_SUBMIT';

// action creators
export const updateSearchValue = (value) => ({
  type: UPDATE_SEARCH_VALUE,
  value: value,
});

export const manageSubmit = () => ({
  type: MANAGE_SUBMIT,
});
