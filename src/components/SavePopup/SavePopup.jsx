import './SavePopup.css';
import { useEffect } from 'react';

export const SavePopup = props => {

  const { isSubmitted, subtitle, isSavePopupOpen, setIsSavePopupOpen } = props;
  const popupClassName = isSavePopupOpen  ? 'save-popup save-popup_open' : 'save-popup';
  useEffect(() => {
    isSubmitted ? setIsSavePopupOpen(true) : setIsSavePopupOpen(false);
  }, [isSubmitted, setIsSavePopupOpen]);

  return (
    <article className={popupClassName}>
      <span className="save-popup__icon" />
      <div className="save-popup__container">
        <h1 className="save-popup__title">Изменения сохранены</h1>
        <h2 className="save-popup__subtitle">{subtitle}</h2>
      </div>
      <button
        className="save-popup__btn-close"
        onClick={() => setIsSavePopupOpen(false)}
      ></button>
    </article>
  );
};
