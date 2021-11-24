import ImageGalleryItem from 'components/ImageGalleryItem';
import s from './ImageGallery.module.css';

function ImagesDataView({ images, onClick }) {
  return (
    <ul className={s.imageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          id={image.id}
          webformatURL={image.webformatURL}
          largeImageURL={image.largeImageURL}
          tags={image.tags}
          onClick={onClick}
        />
      ))}
    </ul>
  );
}

export default ImagesDataView;
