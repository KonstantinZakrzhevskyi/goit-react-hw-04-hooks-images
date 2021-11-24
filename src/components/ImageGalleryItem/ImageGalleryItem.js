import React from 'react';
import PropTypes from 'prop-types';

import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  tags,
  onClick,
}) => {
  return (
    <li key={id} className={s.imageGalleryItem}>
      <img
        className={s.imageGalleryItemImage}
        src={webformatURL}
        datasrc={largeImageURL}
        alt={tags}
        onClick={onClick}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
