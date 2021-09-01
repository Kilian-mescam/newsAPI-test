// === action types
export const FETCH_NEWS = 'FETCH_NEWS';
export const SAVE_NEWS = 'SAVE_NEWS';

export const saveNews = (news) => ({
  type: SAVE_NEWS,
  news: news,
});

// action creators
export const fetchNews = () => ({
  type: FETCH_NEWS,
});
