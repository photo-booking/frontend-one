import './Notice.css';

export const Notice = () => {
  return (
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
  );
};
