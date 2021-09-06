export const BASE_URL = 'https://newsapi.org/v2/everything';

export const getDateString = (dateTime) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  const dayTime = new Date(dateTime);
  const dayTimeString = dayTime.toLocaleDateString('fr-FR', options);
  return dayTimeString;
};
