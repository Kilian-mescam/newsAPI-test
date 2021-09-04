import React from 'react';
import PropTypes from 'prop-types';
import './newsresults.scss';

// == Composant
const NewsCard = ({
  author,
  title,
  description,
  urlToImage,
  url,
  source,
  publishedAt,
}) => {
  console.log('NewsCard');
  return (
    <div className="newscard">
      <a href={url} target="_blank" rel="noreferrer">
        <div className="newscard-top">
          <img src={urlToImage} className="artist-picture" alt="logo" />
        </div>
        <div className="newscard-bottom">
          <h1>{title}</h1>
          <h3>Auteur : {author}</h3>
          <p>{description}</p>
          <div className="date">
            <span className="date-titre">Date de publication : </span>
            <span className="date-value">{publishedAt}</span>
          </div>
          <span className="source">Source : {source.name}</span>
        </div>
      </a>
    </div>

  );
};

NewsCard.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  source: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

// == Export
export default NewsCard;
