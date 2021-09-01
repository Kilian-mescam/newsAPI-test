import React from 'react';
import PropTypes from 'prop-types';
import './newsresults.scss';

// == Composant
const NewsCard = ({
  author,
  title,
  description,
  urlToImage,
}) => {
  console.log('NewsCard');
  return (
    <div className="newscard">
      <div className="newscard-top">
        <img src={urlToImage} className="artist-picture" alt="logo" />
      </div>
      <div className="newscard-bottom">
        <h1>{title}</h1>
        <h3>{author}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  author: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
};

// == Export
export default NewsCard;
