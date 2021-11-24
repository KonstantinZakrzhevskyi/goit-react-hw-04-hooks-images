import Loader from 'react-loader-spinner';
import s from './ImageGallery.module.css';

function ImagesPendingView() {
  return (
    <div className={s.loader}>
      <Loader
        type="Rings"
        color="00BFFF"
        height={250}
        width={250}
        timeout={3000}
      />
    </div>
  );
}

export default ImagesPendingView;
