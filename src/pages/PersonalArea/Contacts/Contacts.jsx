import '../PersonalArea.css';
import './Contacts.css';

export const Contacts = () => {
  return (
    <article>
      <h1 className='personal-area__title'>Контакты</h1>
      <p className='personal-area__subtitle'>Эта информация видна всем в вашем профиле</p>
      <form className="contacts__form">
        <label>
          Номер телефона
          <input></input>
        </label>
        <label>
          Telegram
          <input></input>
        </label>
        <label>
          Email
          <input></input>
        </label>
        <button>Сохранить</button>
      </form>
    </article>
  );
};
