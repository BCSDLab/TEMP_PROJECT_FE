import { ReactComponent as LeftAngleBraketIcon } from 'assets/svg/angle-braket.svg';
import { ReactComponent as Picture } from 'assets/svg/picture.svg';
import { ReactComponent as Plus } from 'assets/svg/plus.svg';
import StarContainer from 'components/rating/StarContainer';
import Wysiwyg from 'components/Wysiwyg';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import cn from 'utils/ts/classNames';
import styles from './TextEditor.module.scss';

type TextEditorProps = {
  isShopname: boolean;
};

function TextEditor({ isShopname }: TextEditorProps): JSX.Element {
  const [showTextTools, setShowTextTools] = useState(false);
  const [saveActive, setSaveActive] = useState(false);
  const [checkAddShop, setCheckAddShop] = useState(false);
  const [checkRating, setCheckRating] = useState(false);
  const navigate = useNavigate();
  const wysiwygRef = useRef<any>();
  useEffect(() => {
    setCheckAddShop(isShopname);
  }, [isShopname]);
  const textToolHandler = () => {
    setShowTextTools(!showTextTools);
  };
  const saveActiveHandler = () => {
    setSaveActive(!saveActive);
  };
  const checkAddShopHandler = () => {
    setCheckAddShop(!checkAddShop);
  };
  const checkRatingHandler = () => {
    setCheckRating(true);
  };

  return (
    <div className={cn({
      [styles.template]: true,
      [styles['template--active']]: checkAddShop,
    })}
    >
      <div className={cn({
        [styles.header]: true,
        [styles['header--active']]: checkAddShop,
      })}
      >
        <LeftAngleBraketIcon type="button" className={styles['header__button--prev']} onClick={() => navigate(-1)} />
        { checkAddShop && <div className={styles.header__shopname}>여기에 가게명</div> }
        { checkAddShop && <StarContainer checkRating={checkRatingHandler} /> }
        { !checkAddShop && <Plus type="button" className={styles['header__button--add']} onClick={checkAddShopHandler} /> }
      </div>
      <div className={styles.editor}>
        <Wysiwyg ref={wysiwygRef} />
      </div>
      <span className={styles.item}>
        <span className={styles.item__span}>
          <button type="button" className={styles.item__button} onClick={() => wysiwygRef.current && wysiwygRef.current.addImg()}>
            <Picture />
          </button>
          <span
            className={cn({
              [styles['item__text-tools']]: true,
              [styles.show]: showTextTools,
            })}
          >
            <div>
              <button type="button" className={`${styles.item__button} ${styles.buttonT}`} onClick={textToolHandler}>T</button>
            </div>
            <span className={styles.item__span}>
              <button type="button" className={`${styles['item__button--onclick']} ${styles.buttonBold}`} onClick={() => wysiwygRef.current && wysiwygRef.current?.bold()}>B</button>
              <button type="button" className={`${styles['item__button--onclick']} ${styles.buttonHeading}`} onClick={() => wysiwygRef.current && wysiwygRef.current?.heading()}>H</button>
              <button type="button" className={`${styles['item__button--onclick']} ${styles.buttonParagraph}`} onClick={() => wysiwygRef.current && wysiwygRef.current?.paragraph()}>H</button>
              <button type="button" className={`${styles['item__button--onclick']} ${styles.buttonThrough}`} onClick={() => wysiwygRef.current && wysiwygRef.current?.through()}>T</button>
            </span>
          </span>
        </span>
        <button
          type="button"
          className={cn({
            [styles.save__button]: true,
            [styles.active]: checkRating,
          })}
          onClick={saveActiveHandler}
          disabled={!checkRating}
        >
          저장
        </button>
      </span>
    </div>
  );
}

export default TextEditor;
