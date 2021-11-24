import errorImage from '../../images/error.jpg';
import s from './ImageGallery.module.css';

function ImagesErrorView({ message }) {
  return (
    <div role="alert" className={s.error}>
      <img className={s.errorImage} src={errorImage} alt="error" width="550" />
      <p>{message}</p>
    </div>
  );
}

export default ImagesErrorView;
