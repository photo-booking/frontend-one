import '../PersonalArea.css';
import './PersonalInfo.css';
import defaultAvatar from '../../../images/Avatar.svg';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { CurrentUserContext } from '../../../components/context/CurrentUserContext';

export const PersonalInfo = props => {
  const currentUser = useContext(CurrentUserContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: currentUser.first_name,
      surname: currentUser.last_name,
      city: currentUser.city,
      aboutMe: currentUser.about_me,
      equipment: currentUser.equipment
      //правильнее сделать запрос на сервер за информацией профиля, дождаться и подставить из ответа
    }
  });

  const { onSubmitPersonalInfo } = props;
  const buttonSubmitClassName = isValid
    ? 'personal-info__btn-submit'
    : 'personal-info__btn-submit_disabled';

  const handleSubmitPersonalInfo = values => {
    onSubmitPersonalInfo(values);
  };

  return (
    <article className="personal-info">
      <h1 className="personal-area__title">Личная информация</h1>
      <p className="personal-area__subtitle">Эта информация видна всем в вашем профиле</p>

      <form className="personal-info__avatar-container personal-info__avatar-container_column">
        <p className="personal-info__avatar-text">Аватар</p>
        <div className="personal-info__avatar-container">
          <img
            src={defaultAvatar}
            alt="avatar"
            className="personal-info__avatar-image"
          />

          <label className="input-file">
            <div className="personal-info__avatar-container personal-info__avatar-container_caption">
              <input
                type="file"
                name="file"
              />

              <span className="input-file-btn">Загрузить новый аватар</span>
              <span className="input-file-text">Размер 800x800px</span>
              <span className="input-file-text">В формате JPG или PNG</span>
            </div>
          </label>
        </div>
      </form>
      <form
        className="personal-info__form"
        onSubmit={handleSubmit(handleSubmitPersonalInfo)}
      >
        <label className="personal-info__label">
          Имя
          <input
            className="personal-info__input"
            type="text"
            id="name"
            {...register('name')}
          ></input>
        </label>
        <label className="personal-info__label">
          Фамилия
          <input
            className="personal-info__input"
            type="text"
            id="surname"
            {...register('surname')}
          ></input>
        </label>
        <label className="personal-info__label">
          Город
          <select
            className="personal-info__input"
            id="city"
            {...register('city')}
          >
            <option value=''>Выберите из списка</option>
            <option value='Москва'>Москва</option>
            <option value='Санкт-Петербур'>Санкт-Петербург</option>
            <option value='Волгоград'>Волгоград</option>
            <option value='Владивосток'>Владивосток</option>
            <option value='Воронеж'>Воронеж</option>
            <option value='Екатеринбург'>Екатеринбург</option>
            <option value='Казань'>Казань</option>
          </select>
        </label>
        <label className="personal-info__label">
          Обо мне
          <textarea
            className="personal-info__input"
            maxLength="150"
            id="aboutMe"
            {...register('aboutMe')}
          ></textarea>
        </label>
        <label className="personal-info__label">
          Оборудование
          <textarea
            className="personal-info__input"
            maxLength="150"
            id="equipment"
            {...register('equipment')}
          ></textarea>
        </label>
        <button className={buttonSubmitClassName}>Сохранить</button>
      </form>
    </article>
  );
};
