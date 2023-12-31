import './Password.css';
import { useForm } from 'react-hook-form';
import { SavePopup } from '../../../components/SavePopup/SavePopup';

export const Password = props => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitted }
  } = useForm({ mode: 'onChange' });

  const { onSubmitPersonalPassword, isSavePopupOpen, setIsSavePopupOpen } = props;

  const handleSubmitUpdatePassword = values => {
    onSubmitPersonalPassword(values);
  };

  return (
    <>
      <article className="password">
        <h1 className="password__title">Пароль</h1>
        <form
          className="password__form"
          onSubmit={handleSubmit(handleSubmitUpdatePassword)}
        >
          <label className="password__form-label">
            Пароль
            <input
              className="password__form-input"
              type="password"
              {...register('current_password', { required: 'Это обязательное поле' })}
            ></input>
          </label>
          <label className="password__form-label">
            Новый пароль
            <input
              className="password__form-input"
              type="password"
              {...register('new_password', { required: 'Это обязательное поле' })}
            ></input>
          </label>
          <label className="password__form-label">
            Подтвердите новый пароль
            <input
              className="password__form-input"
              type="password"
              {...register('repeat_new_password', { required: 'Это обязательное поле' })}
            ></input>
          </label>
          <button className="password__btn-submit">Обновить пароль</button>
        </form>
      </article>
      <SavePopup
        isSubmitted={isSubmitted}
        subtitle="Ваш пароль обновлён"
        isSavePopupOpen={isSavePopupOpen}
        setIsSavePopupOpen={setIsSavePopupOpen}
      />
    </>
  );
};
