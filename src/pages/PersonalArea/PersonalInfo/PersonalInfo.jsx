import '../PersonalArea.css';
import './PersonalInfo.css';
import defaultAvatar from '../../../images/Avatar.svg';
import { useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import imageToBase64 from 'image-to-base64/browser';
import { SavePopup } from '../../../components/SavePopup/SavePopup';

import { CurrentUserContext } from '../../../components/context/CurrentUserContext';

export const PersonalInfo = props => {
  const currentUser = useContext(CurrentUserContext);
  const {
    watch,
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty, isSubmitted }
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
  const watchAllFields = watch();
  const {
    isClient,
    onSubmitPersonalInfo,
    onSubmitPersonalAvatar,
    onDeletePersonalAvatar,
    isSavePopupOpen,
    setIsSavePopupOpen
  } = props;

  const handleSubmitPersonalInfo = values => {
    onSubmitPersonalInfo(values);
  };

  const handleSubmitPersonalAvatar = (value, type) => {
    onSubmitPersonalAvatar(value, type);
  };

  const handleDeletePersonalAvatar = evt => {
    evt.preventDefault();
    onDeletePersonalAvatar();
  };

  const isButtonDisabled = () => {
    return !isDirty || !isValid;
  };

  const buttonSubmitClassName = !isButtonDisabled()
    ? 'personal-info__btn-submit'
    : 'personal-info__btn-submit personal-info__btn-submit_disabled';

  return (
    <>
      <article className="personal-info">
        <span>
          <h1 className="personal-area__title">Личная информация</h1>
          <p className="personal-area__subtitle">Эта информация видна всем в вашем профиле</p>
        </span>
        {/* Загрузка аватара */}
        <form className="personal-info__avatar-container personal-info__avatar-container_column">
          <p className="personal-info__avatar-text">Аватар</p>
          <div className="personal-info__avatar-container">
            <img
              src={currentUser.profile_photo ? currentUser.profile_photo : defaultAvatar}
              alt="avatar"
              className="personal-info__avatar-image"
            />

            <div className="personal-info__avatar-container personal-info__avatar-container_caption">
              <label className="input-file">
                <input
                  type="file"
                  name="avatar"
                  id="avatar"
                  accept="image/png, image/jpeg"
                  onChange={evt => {
                    const type = evt.target.files[0].type;
                    const reader = new FileReader();
                    reader.readAsDataURL(evt.target.files[0]);
                    reader.onload = function () {
                      imageToBase64(reader.result)
                        .then(res => handleSubmitPersonalAvatar(res, type))
                        .catch(err => console.log(err));
                    };
                  }}
                />

                <span className="input-file-btn">Загрузить новый аватар</span>
              </label>
              <span className="input-file-text">Размер 800x800px</span>
              <span className="input-file-text">В формате JPG или PNG</span>
            </div>
            {currentUser.profile_photo ? (
              <button
                className="personal-info__btn-delete-avatar"
                onClick={handleDeletePersonalAvatar}
              >
                Удалить
              </button>
            ) : (
              <></>
            )}
          </div>
        </form>
        {/* Загрузка личной информации */}
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
              {...register('name', { required: 'Это обязательное поле' })}
            ></input>
          </label>
          <label className="personal-info__label">
            Фамилия
            <input
              className="personal-info__input"
              type="text"
              id="surname"
              {...register('surname', { required: 'Это обязательное поле' })}
            ></input>
          </label>
          <label className="personal-info__label">
            Город
            <select
              className="personal-info__input"
              id="city"
              {...register('city', { required: 'Это обязательное поле' })}
            >
              <option value="">Выберите из списка</option>
              <option value="Москва">Москва</option>
              <option value="Санкт-Петербур">Санкт-Петербург</option>
              <option value="Волгоград">Волгоград</option>
              <option value="Владивосток">Владивосток</option>
              <option value="Воронеж">Воронеж</option>
              <option value="Екатеринбург">Екатеринбург</option>
              <option value="Казань">Казань</option>
            </select>
          </label>
          {!isClient ? (
            <>
              <label className="personal-info__label">
                Обо мне
                <textarea
                  className="personal-info__input personal-info_relative"
                  maxLength="150"
                  id="aboutMe"
                  {...register('aboutMe')}
                ></textarea>
                <span className="personal-info__lenght">
                  {watchAllFields.aboutMe ? watchAllFields.aboutMe.length : 0}/150
                </span>
              </label>
              <label className="personal-info__label">
                Оборудование
                <textarea
                  className="personal-info__input personal-info_relative"
                  maxLength="150"
                  id="equipment"
                  {...register('equipment')}
                ></textarea>
                <span className="personal-info__lenght">
                  {watchAllFields.equipment ? watchAllFields.equipment.length : 0}/150
                </span>
              </label>
            </>
          ) : (
            <></>
          )}
          <button
            className={buttonSubmitClassName}
            disabled={isButtonDisabled()}
          >
            Сохранить
          </button>
        </form>
      </article>
      <SavePopup
        isSubmitted={isSubmitted}
        subtitle="Новые данные будут отображаться в профиле"
        isSavePopupOpen={isSavePopupOpen}
        setIsSavePopupOpen={setIsSavePopupOpen}
      />
    </>
  );
};
