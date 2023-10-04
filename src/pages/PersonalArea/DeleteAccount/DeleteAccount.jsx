import './DeleteAccount.css';
import { useState } from 'react';

export const DeleteAccount = () => {
  const [agreement, setAgreement] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const deleteBtnClassName = agreement
    ? 'delete-account__btn-submit'
    : 'delete-account__btn-submit delete-account__btn-submit_disable';

  const popupClassName = isPopupOpen
    ? 'delete-account__popup delete-account__popup_open'
    : 'delete-account__popup';
  return (
    <>
      <article className="delete-account">
        <h1 className="delete-account__title">Удаление аккаунта</h1>
        <h2 className="delete-account__subtitle">
          После удаления аккаунта вы&nbsp;потеряете историю заказов и&nbsp;больше не&nbsp;сможете
          взаимодействовать с&nbsp;клиентами на&nbsp;сайте.
        </h2>

        <form className="delete-account__form">
          <h2 className="delete-account__subtitle">Вы уверены, что хотите удалить аккаунт?</h2>
          <input
            type="checkbox"
            id="agreement"
            className="delete-account__input"
            onClick={() => {
              setAgreement(!agreement);
            }}
          ></input>
          <label
            htmlFor="agreement"
            className="delete-account__subtitle delete-account__label"
          >
            Я хочу удалить аккунт
          </label>
          <button
            className={deleteBtnClassName}
            onClick={(evt) => {
              evt.preventDefault();
              setIsPopupOpen(true);
            }}
          >
            Удалить аккаунт
          </button>
        </form>
      </article>

      <article className={popupClassName}>
        <div className="delete-account__popup-container">
          <h1 className="delete-account__popup-title">Вы уверены?</h1>
          <p className="delete-account__popup-subtitle">
            Мы&nbsp;подарим вам премиум-подписку на&nbsp;месяц, если согласитесь остаться
            с&nbsp;нами
          </p>
          <div className="delete-account__popup-btn-container">
            <button
              className="delete-account__btn-submit delete-account__btn-submit_small delete-account__btn-submit_color"
              onClick={() => {
                setIsPopupOpen(false);
              }}
            >
              Получить Премиум-подписку
            </button>
            <button
              className="delete-account__btn-submit delete-account__btn-submit_small"
              onClick={() => {
                setIsPopupOpen(false);
              }}
            >
              Всё равно удалить аккаунт
            </button>
          </div>
        </div>
      </article>
    </>
  );
};
