import cameraRoll from '../../images/camera-roll.jpg';
import s from './ImageGallery.module.css';

function ImageIdleView() {
  return (
    <div role="alert" className={s.ImageBgd}>
      <img src={cameraRoll} alt="cameraRoll" />
    </div>
  );
}

export default ImageIdleView;
