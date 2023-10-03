import '../PersonalArea.css';
import './Contacts.css';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { CurrentUserContext } from '../../../components/context/CurrentUserContext';

export const Contacts = props => {
  const { onSubmitPersonalContacts } = props;
  const currentUser = useContext(CurrentUserContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty }
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      phone: currentUser.phone,
      telegram: currentUser.social_telegram,
      email: currentUser.contact_email
    }
  });

  const handleSubmitPersonalContacts = values => {
    onSubmitPersonalContacts(values);
  };

  const isButtonDisabled = () => {
    return !isDirty || !isValid;
  };

  const buttonSubmitClassName = !isButtonDisabled()
    ? 'contacts__btn-submit'
    : 'contacts__btn-submit contacts__btn-submit_disabled';

  return (
    <article className="personal-area__contacts">
      <span>
        <h1 className="personal-area__title">Контакты</h1>
        <p className="personal-area__subtitle">Эта информация видна всем в вашем профиле</p>
      </span>
      <form
        className="contacts__form"
        onSubmit={handleSubmit(handleSubmitPersonalContacts)}
      >
        <label className="contacts__form-label">
          Номер телефона
          <input
            className="contacts__form-input"
            type="tel"
            {...register('phone')}
          ></input>
        </label>
        <label className="contacts__form-label">
          Telegram
          <input
            className="contacts__form-input"
            type="text"
            {...register('telegram')}
          ></input>
        </label>
        <label className="contacts__form-label">
          Email
          <input
            className="contacts__form-input"
            type="email"
            {...register('email')}
          ></input>
        </label>
        <button
          className={buttonSubmitClassName}
          disabled={isButtonDisabled()}
        >
          Сохранить
        </button>
      </form>
    </article>
  );
};
