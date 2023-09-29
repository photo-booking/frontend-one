import './Password.css';

export const Password = () => {
  return (
    <article className='password'>
      <h1>Пароль</h1>
      <form className='password__form'>
        <label>
          Пароль
          <input></input>
        </label>
        <label>
          Новый пароль
          <input></input>
        </label>
        <label>
          Подтвердите новый пароль
          <input></input>
        </label>
        <button>Сохранить</button>
      </form>
    </article>
  );
};
