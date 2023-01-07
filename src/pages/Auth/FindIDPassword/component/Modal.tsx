import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import style from './Modal.module.scss';

interface ModalProp {
  children: React.ReactNode
}

export default function Modal({ children }: ModalProp): JSX.Element {
  const root = document.body;
  return createPortal(
    <div className={style.container}>
      <div className={style.overay} />
      <div className={style.modal}>
        <div>재로그인</div>
        <div className={style.modal__content}>{children}</div>
        <Link to="/login"><button type="button" className={style.modal__button}>로그인</button></Link>
      </div>
    </div>,
    root,
  );
}
