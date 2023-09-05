import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Signin.css';
import showPassImage from '../../images/Show.svg';
import { AuthIntegration } from '../../components/AuthIntegration/AuthIntegration';
import { FormAuth } from '../../components/FormAuth/FormAuth';
import {
  REG_EMAIL,
  REG_PASSWORD,
  ERR_MESSAGE_INVALIDEMAIL,
  ERR_MESSAGE_INVALIDPASSWORD,
  ERR_MESSAGE_REQUIRED
} from '../../const/RegexConst';

export const Signin = props => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    watch,
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ mode: 'onChange' });
  const { onSubmit, signinGoogle, signinVk } = props;
  const [showPass, setShowPass] = useState(false);
  const watchAllFields = watch();

  const formAuthInputClassName = name => {
    return `form-auth__input ${errors[name]?.message ? 'form-auth__input_err' : ''} ${
      watchAllFields[name]?.length > 0 && errors[name]?.message === undefined
        ? 'form-auth__input_ok'
        : ''
    }`;
  };

  useEffect(() => {
    // const access_token_google = new URLSearchParams(location.hash).get("access_token");
    // const code_vk = new URLSearchParams(location.search).get("code");
    // if(access_token_google) {signinGoogle(access_token_google)};
    // if(code_vk) {signinVk(code_vk)};
  }, []);

  const handleSubmitSignin = values => {
    onSubmit(values);
    reset();
  };

  const handleShowPassword = evt => {
    evt.preventDefault();
    setShowPass(!showPass);
  };

  return (
    <div className="signin form-auth__container">
      <h1 className="form-auth__title">Вход в аккаунт</h1>
      <AuthIntegration />
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
                id="email"
                type="email"
                {...register('email', {
                  required: ERR_MESSAGE_REQUIRED,
                  pattern: {
                    value: REG_EMAIL,
                    message: ERR_MESSAGE_INVALIDEMAIL
                  }
                })}
              />
            </label>
            <label
              htmlFor="password"
              className="form-auth__label"
            >
              Пароль
              <span className="form-auth__err">{errors?.password && errors.password.message}</span>
              <div className="form-auth__input-container">
                <input
                  className={formAuthInputClassName('password')}
                  id="password"
                  type={showPass ? 'text' : 'password'}
                  minLength="8"
                  maxLength="50"
                  {...register('password', {
                    required: ERR_MESSAGE_REQUIRED,
                    pattern: {
                      value: REG_PASSWORD,
                      message: ERR_MESSAGE_INVALIDPASSWORD
                    }
                  })}
                />
                <button
                  className="form-auth__button_show-pass"
                  onClick={handleShowPassword}
                >
                  <img
                    src={showPassImage}
                    alt="show password"
                  />
                </button>
              </div>
            </label>
            <button
              className="form-auth__button_sign form-auth__button_sign_left"
              onClick={() => navigate('/reset-password')}
            >
              Забыли пароль?
            </button>
          </>
        }
        buttonTitle={'Войти в аккаунт'}
        onSubmit={handleSubmit(handleSubmitSignin)}
        err={errors}
      />
      <p className="form-auth__caption">
        Нет аккаунта? 
        <button
          className="form-auth__button_sign"
          onClick={evt => {
            evt.preventDefault();
            navigate('/sign-up');
          }}
        >
           Зарегистрируйтесь
        </button>
      </p>
    </div>
  );
};
