import './DeleteAccount.css';

export const DeleteAccount = () => {
  return (
    <article className='delete-account'>
      <h1>Удаление аккаунта</h1>
      <h2>
        После удаления аккаунта вы потеряете историю заказов и больше не сможете взаимодействовать
        с клиентами на сайте.
      </h2>
      <p>Вы уверены, что хотите удалить аккаунт?</p>
      <form className='delete-account__form'>
        <label>
          <input type="checkbox"></input>Я хочу удалить аккунт
        </label>
        <button>Удалить аккаунт</button>
      </form>
    </article>
  );
};
