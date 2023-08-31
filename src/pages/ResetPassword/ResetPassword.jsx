import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './ResetPassword.css';
import { FormAuth } from '../../components/FormAuth/FormAuth';
import ok_image from '../../images/Ok.svg';
import {
  REG_EMAIL,
  REG_PASSWORD,
  ERR_MESSAGE_INVALIDEMAIL,
  ERR_MESSAGE_INVALIDPASSWORD,
  ERR_MESSAGE_REQUIRED
} from '../../const/RegexConst';

export const ResetPassword = props => {
  const navigate = useNavigate();
  const {
    watch,
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ mode: 'onChange' });
  const { isEmailSend, isPasswordReset, onSubmitResetPassword, onSubmitSendEmailToResetPassword } =
    props;
  const watchAllFields = watch();

  const formAuthInputClassName = name => {
    return `form-auth__input ${errors[name]?.message ? 'form-auth__input_err' : ''} ${
      watchAllFields[name]?.length > 0 && errors[name]?.message === undefined
        ? 'form-auth__input_ok'
        : ''
    }`;
  };

  const handleSubmitSendEmailToResetPassword = values => {
    onSubmitSendEmailToResetPassword(values);
    reset();
  };

  const handleSubmitResetPassword = values => {
    onSubmitResetPassword(values);
    reset();
  };

  return (
    <>
      {isEmailSend ? (
        <div className="reset-password form-auth__container">
          <img
            src={ok_image}
            alt="ok"
          />
          <h1 className="form-auth__title">Письмо отправлено</h1>
          <p>
            Проверьте свой email и&nbsp;перейдите по&nbsp;ссылке в&nbsp;письме, чтобы продолжить
            сброс пароля
          </p>
        </div>
      ) : (
        <div className="reset-password form-auth__container">
          <h1 className="form-auth__title">Сброс пароля</h1>
          <h2 className="form-auth__subtitle">
            Введите email и мы отправим письмо с ссылкой для создания нового пароля
          </h2>
          <FormAuth
            child={
              <>
                <label
                  htmlFor="sendEmail"
                  className="form-auth__label"
                >
                  Email
                  <input
                    className={formAuthInputClassName('sendEmail')}
                    type="email"
                    id="sendEmail"
                    {...register('sendEmail', {
                      required: ERR_MESSAGE_REQUIRED,
                      pattern: {
                        value: REG_EMAIL,
                        message: ERR_MESSAGE_INVALIDEMAIL
                      }
                    })}
                  />
                  <span className="form-auth__err">
                    {errors?.sendEmail && errors.sendEmail.message}
                  </span>
                </label>
              </>
            }
            buttonTitle={'Отправить письмо'}
            onSubmit={handleSubmit(handleSubmitSendEmailToResetPassword)}
            err={errors}
          />
          <button
            className="form-auth__button_sign"
            onClick={() => navigate('/sign-in')}
          >
            Вернуться на страницу входа
          </button>
        </div>
      )}
      {isPasswordReset ? (
        <></>
      ) : (
        <div className="reset-password form-auth__container">
          <h1 className="form-auth__title">Сброс пароля</h1>
          <FormAuth
            child={
              <>
                <label
                  htmlFor="resetPassword"
                  className="form-auth__label"
                >
                  Новый пароль
                  <input
                    className=""
                    type="password"
                    id="resetPassword"
                    {...register('resetPassword', {
                      required: ERR_MESSAGE_REQUIRED,
                      pattern: {
                        value: REG_PASSWORD,
                        message: ERR_MESSAGE_INVALIDPASSWORD
                      }
                    })}
                  />
                  <span className="form-auth__err">
                    {errors?.resetPassword && errors.resetPassword.message}
                  </span>
                </label>
              </>
            }
            buttonTitle={'Сбросить пароль'}
            onSubmit={handleSubmit(handleSubmitResetPassword)}
            err={errors}
          />
        </div>
      )}
    </>
  );
};
