import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './ResetPassword.css';
import { FormAuth } from '../../components/FormAuth/FormAuth';
import ok_image from '../../images/Illustration -Success.svg';
import {
  REG_EMAIL,
  REG_PASSWORD,
  ERR_MESSAGE_INVALIDEMAIL,
  ERR_MESSAGE_INVALIDPASSWORD,
  ERR_MESSAGE_REQUIRED
} from '../../const/RegexConst';

export const ResetPassword = props => {
  const navigate = useNavigate();
  const location = useLocation();
  // new URLSearchParams(location.search).get("uid")
  // new URLSearchParams(location.search).get("token")

  const [searchParam, setSearchParam] = useState(undefined);
  const [errMessage, setErrorMessage] = useState(undefined);
  const [equalPass, setEqualPass] = useState(undefined);

  const returnSearchParam = () => {
    const param = {
      uid: new URLSearchParams(location.search).get('uid'),
      token: new URLSearchParams(location.search).get('token')
    };
    return param;
  };

  useEffect(() => {
    setSearchParam(returnSearchParam());
  }, []);

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
    return `form-auth__input ${errors[name]?.message || errMessage ? 'form-auth__input_err' : ''} ${watchAllFields[name]?.length > 0 && errors[name]?.message === undefined && !errMessage
      ? 'form-auth__input_ok'
      : ''
      }`;
  };

  const compareInputValues = (firstInput, secondInput) => {
    return (watchAllFields[firstInput] === watchAllFields[secondInput]);
  };

  const handleSubmitSendEmailToResetPassword = values => {
    onSubmitSendEmailToResetPassword({ email: values.email });
    reset();
  };

  const handleSubmitResetPassword = values => {
    if (compareInputValues('resetPassword', 'repeatResetPassword')) {
      onSubmitResetPassword(values, searchParam);
      reset();
      setErrorMessage(undefined);
    } else {
      setErrorMessage('Пароли не совпадают');
    }
  };

  if (searchParam?.uid === null && searchParam?.token === null && isEmailSend) {
    return (
      <div className="form-auth__container">
        <img
          src={ok_image}
          alt="ok"
          className="reset-password__image"
        />
        <h1 className="form-auth__title form-auth__title_email">Письмо отправлено</h1>
        <p className="form-auth__subtitle form-auth__subtitle_email">
          Перейдите по ссылке из письма
          <br /> и откроется окно для создания нового &nbsp;пароля.
        </p>
      </div>
    );
  } else if (searchParam?.uid === null && searchParam?.token === null && !isEmailSend) {
    return (
      <div className="form-auth__container">
        <h1 className="form-auth__title">Сброс пароля</h1>
        <h2 className="form-auth__subtitle">
          Введите email и мы отправим письмо с ссылкой для создания нового пароля.
        </h2>
        <FormAuth
          child={
            <>
              <label
                htmlFor="email"
                className="form-auth__label"
              >
                Email
                <span className="form-auth__err">{errors?.email && errors.email.message}</span>
                <input
                  className={formAuthInputClassName('email')}
                  type="email"
                  id="email"
                  {...register('email', {
                    required: ERR_MESSAGE_REQUIRED,
                    pattern: {
                      value: REG_EMAIL,
                      message: ERR_MESSAGE_INVALIDEMAIL
                    }
                  })}
                />
              </label>
            </>
          }
          buttonTitle={'Отправить письмо'}
          onSubmit={handleSubmit(handleSubmitSendEmailToResetPassword)}
          err={errors}
        />
        <button
          className="form-auth__caption form-auth__button_sign"
          onClick={() => navigate('/sign-in')}
        >
          Вернуться на страницу входа
        </button>
      </div>
    );
  } else if (searchParam?.uid !== null && searchParam?.token !== null && isPasswordReset) {
    return (
      <div className="form-auth__container">
        <img
          src={ok_image}
          alt="ok"
          className="reset-password__image"
        />
        <h1 className="form-auth__title form-auth__title_email">Пароль сохранен</h1>
        <button
          className="form-auth__button_submit form-auth__button_submit-email"
          onClick={() => navigate('/sign-in')}
        >
          Войти в аккаунт
        </button>
      </div>
    );
  } else if (searchParam?.uid !== null && searchParam?.token !== null && !isPasswordReset) {
    return (
      <div className="form-auth__container">
        <h1 className="form-auth__title form-auth__title_email">Смена пароля</h1>
        <h2 className="form-auth__subtitle form-auth__subtitle_pass">
          Придумайте новый пароль и запомните его.
        </h2>
        <FormAuth
          child={
            <>
              <label
                htmlFor="resetPassword"
                className="form-auth__label"
              >
                Новый пароль
                <span className="form-auth__err">
                  {errors?.resetPassword && errors.resetPassword.message}
                </span>
                <input
                  className={formAuthInputClassName('resetPassword')}
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
              </label>
              <label
                htmlFor="repeatResetPassword"
                className="form-auth__label"
              >
                Повторите пароль
                <span className="form-auth__err">
                  {errors?.repeatResetPassword && errors.repeatResetPassword.message}
                </span>
                <input
                  className={formAuthInputClassName('repeatResetPassword')}
                  type="password"
                  id="repeatResetPassword"
                  onChange={compareInputValues('resetPassword', 'repeatResetPassword')}
                  {...register('repeatResetPassword', {
                    required: ERR_MESSAGE_REQUIRED,
                    pattern: {
                      value: REG_PASSWORD,
                      message: ERR_MESSAGE_INVALIDPASSWORD
                    }
                  })}
                />
              </label>
              <span className="form-auth__err">{errMessage ? errMessage : ''}</span>
            </>
          }
          buttonTitle={'Сменить пароль'}
          onSubmit={handleSubmit(handleSubmitResetPassword)}
          err={errors}
        />
      </div>
    );
  }
};
