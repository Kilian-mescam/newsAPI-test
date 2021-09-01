// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import NewsCard from './NewsCard';
import './newsresults.scss';

// == Composant
const NewsResults = ({ news }) => {
  console.log('NewsResults');
  return (
    <div className="news-results">
      <div className="row">
        {news.map((newsItem) => (
          <NewsCard
            {...newsItem}
            key={newsItem.id}
          />
        ))}
      </div>
    </div>
  );
};

NewsResults.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

// == Export
export default NewsResults;
