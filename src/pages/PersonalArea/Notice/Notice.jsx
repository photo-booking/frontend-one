import './Notice.css';
import { useForm } from 'react-hook-form';
import { SavePopup } from '../../../components/SavePopup/SavePopup';

export const Notice = props => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitted }
  } = useForm({ mode: 'onChange' });

  const { isSavePopupOpen, setIsSavePopupOpen } = props;

  const handleSubmitNotice = values => {
    console.log(values);
  };

  return (
    <>
      <article className="notice">
        <h1 className="notice__title">Уведомления</h1>
        <form
          className="notice__form"
          onSubmit={handleSubmit(handleSubmitNotice)}
        >
          <div className="notice__container">
            <h2 className="notice__subtitle">На сайте</h2>
            <label className="notice__label">
              Новые сообщения
              <input
                className="notice__input"
                type="checkbox"
                id='website_message'
                {...register('website_message')}
              />
              <span className="notice__switch"/>
            </label>
            <label className="notice__label">
              Новые заказы
              <input
                className="notice__input"
                type="checkbox"
                id='website_order'
                {...register('website_order')}
              />
              <span className="notice__switch"/>
            </label>
            <label className="notice__label">
              Новые отзывы
              <input
                className="notice__input"
                type="checkbox"
                id='website_review'
                {...register('website_review')}
              />
              <span className="notice__switch"/>
            </label>
          </div>
          <div className="notice__container">
            <h2 className="notice__subtitle">По эл. почте</h2>
            <label className="notice__label">
              Новые сообщения
              <input
                className="notice__input"
                type="checkbox"
                id='email_message'
                {...register('email_message')}
              />
              <span className="notice__switch"/>
            </label>
            <label className="notice__label">
              Новые заказы
              <input
                className="notice__input"
                type="checkbox"
                id='email_order'
                {...register('email_order')}
              />
              <span className="notice__switch"/>
            </label>
            <label className="notice__label">
              Новые отзывы
              <input
                className="notice__input"
                type="checkbox"
                id='email_review'
                {...register('email_review')}
              />
              <span className="notice__switch"/>
            </label>
          </div>
          <button className="notice__btn-submit">Сохранить настройки</button>
        </form>
      </article>
      <SavePopup
        isSubmitted={isSubmitted}
        subtitle="Настройки уведомлений сохранены"
        isSavePopupOpen={isSavePopupOpen}
        setIsSavePopupOpen={setIsSavePopupOpen}
      />
    </>
  );
};
