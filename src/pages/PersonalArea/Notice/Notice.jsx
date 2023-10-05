import './Notice.css';
import { SavePopup } from '../../../components/SavePopup/SavePopup';

export const Notice = (props) => {
  const {isSavePopupOpen, setIsSavePopupOpen} = props;
  return (
    <>
    <article className='notice'>
      <h1>Уведомления</h1>
      <form className='notice__form'>
        <h2>На сайте</h2>
        <label>
            Новые сообщения
            <input type='checkbox'></input>
        </label>
        <label>
            Новые заказы
            <input type='checkbox'></input>
        </label>
        <label>
            Новые отзывы
            <input type='checkbox'></input>
        </label>
        <h2>По эл. почте</h2>
        <label>
            Новые сообщения
            <input type='checkbox'></input>
        </label>
        <label>
            Новые заказы
            <input type='checkbox'></input>
        </label>
        <label>
            Новые отзывы
            <input type='checkbox'></input>
        </label>
        <button>Сохранить настройки</button>
      </form>
    </article>
    <SavePopup
        // isSubmitted={isSubmitted}
        subtitle="Настройки уведомлений сохранены"
        isSavePopupOpen={isSavePopupOpen}
        setIsSavePopupOpen={setIsSavePopupOpen}
      />
    </>
  );
};
