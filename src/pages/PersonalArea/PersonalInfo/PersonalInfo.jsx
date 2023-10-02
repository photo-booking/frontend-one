import '../PersonalArea.css';
import './PersonalInfo.css';
import defaultAvatar from '../../../images/Avatar.svg';

export const PersonalInfo = () => {
  return (
    <article className="personal-info">
      <h1 className="personal-area__title">Личная информация</h1>
      <p className="personal-area__subtitle">Эта информация видна всем в вашем профиле</p>
      <form
        method="post"
        enctype="multipart/form-data"
        className="personal-info__form"
      >
        <div className="personal-info__avatar-container personal-info__avatar-container_column">
          <p className="personal-info__avatar-text">Аватар</p>
          <div className="personal-info__avatar-container">
            <img
              src={defaultAvatar}
              alt="avatar"
              className="personal-info__avatar-image"
            />

            <label class="input-file">
              <div className="personal-info__avatar-container personal-info__avatar-container_caption">
                <input
                  type="file"
                  name="file"
                />

                <span class="input-file-btn">Загрузить новый аватар</span>
                  <span class="input-file-text">Размер 800x800px</span>
                  <span class="input-file-text">В формате JPG или PNG</span>
              </div>
            </label>
          </div>
        </div>
        <label className="personal-info__label">
          Имя
          <input className="personal-info__input"></input>
        </label>
        <label className="personal-info__label">
          Фамилия
          <input className="personal-info__input"></input>
        </label>
        <label className="personal-info__label">
          Город
          <input className="personal-info__input"></input>
        </label>
        <label className="personal-info__label">
          Обо мне
          <textarea className="personal-info__input"></textarea>
        </label>
        <label className="personal-info__label">
          Оборудование
          <textarea className="personal-info__input"></textarea>
        </label>
        <button className="personal-info__btn-submit">Сохранить</button>
      </form>
    </article>
  );
};
