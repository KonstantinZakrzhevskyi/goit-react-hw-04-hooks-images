import s from './Button.module.css';
function Button({ onClick }) {
  return (
    <button className={s.button} type="button" onClick={onClick} id="btn">
      Load more
    </button>
  );
}

export default Button;
