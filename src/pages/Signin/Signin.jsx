import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Signin.css';
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
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ mode: 'onChange' });
  const { onSubmit, signinGoogle, signinVk } = props;

  useEffect(() => {
    // signinGoogle(new URLSearchParams(location.hash).get("access_token"));
    // signinVk(new URLSearchParams(location.search).get("code"));
  }, []);

  const handleSubmitSignin = values => {
    onSubmit(values);
    reset();
  };

  return (
    <div className="signin">
      <h1>Войти в аккаунт</h1>
      <AuthIntegration />
      <FormAuth
        child={
          <>
            <label
              htmlFor="email"
              className="form-auth__label"
            >
              Email
              <input
                className=""
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
              <span className="form-auth__err">{errors?.email && errors.email.message}</span>
            </label>
            <label
              htmlFor="password"
              className="form-auth__label"
            >
              Пароль
              <input
                className=""
                id="password"
                type="password"
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
              <span className="form-auth__err">{errors?.password && errors.password.message}</span>
            </label>
          </>
        }
        buttonTitle={'Войти'}
        onSubmit={handleSubmit(handleSubmitSignin)}
        err={errors}
      />
      {/* передать пропсы */}
      <button onClick={() => navigate('/reset-password')}>Забыли пароль?</button>
      <button onClick={() => navigate('/sign-up')}>Регистрация</button>
    </div>
  );
};
