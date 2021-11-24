import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import fetchGallery from '../../apiService/apiService';
import ImagesErrorView from './ImagesErrorView';
import ImagesDataView from './ImagesDataView';
import ImagesPendingView from './ImagesPendingView';
import ImageIdleView from './ImagesIdleView';
import Modal from 'components/Modal';
import Button from 'components/Button';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function ImageGallery({ query }) {
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);
  const [largeImageURL, setIargeImageURL] = useState('');
  const [alt, setAlt] = useState('');

  useEffect(() => {
    if (!query) {
      return;
    }
    setPage(1);
    setStatus(Status.PENDING);

    fetchGallery(query)
      .then(images => {
        setImages(images.hits);
        setPage(page => page + 1);
        setStatus(Status.RESOLVED);
      })
      .catch(error => setStatus(Status.REJECTED));
  }, [query]);

  const addImages = () => {
    setStatus(Status.PENDING);

    fetchGallery(query, page)
      .then(images => {
        if (images.hits.length === 0) {
          throw new Error();
        }
        setImages(prevImages => [...prevImages, ...images.hits]);
        setPage(page => page + 1);
        setStatus(Status.RESOLVED);
        document
          .getElementById('btn')
          .scrollIntoView({ block: 'start', behavior: 'smooth' });
      })
      .catch(error => setStatus(Status.REJECTED));
  };

  const toggleModal = (datasrc, alt) => {
    setShowModal(!showModal);
    setIargeImageURL(datasrc);
    setAlt(alt);
  };

  const onGalleryCardClick = e => {
    const url = e.target.getAttribute('datasrc');
    const alt = e.target.getAttribute('alt');
    toggleModal(url, alt);
  };

  if (status === Status.IDLE) {
    return <ImageIdleView />;
  }

  if (status === Status.PENDING) {
    return <ImagesPendingView />;
  }

  if (status === Status.REJECTED) {
    return (
      <ImagesErrorView message={'No results were found for your search'} />
    );
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        {showModal && (
          <Modal
            onClose={toggleModal}
            largeImageURL={largeImageURL}
            alt={alt}
          />
        )}
        <ImagesDataView images={images} onClick={onGalleryCardClick} />
        <Button onClick={addImages} />
      </>
    );
  }
}

ImageGallery.prototype = {
  query: PropTypes.string.isRequired,
};

export default ImageGallery;
