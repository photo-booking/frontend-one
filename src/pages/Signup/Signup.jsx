import React from 'react';
import { useForm } from 'react-hook-form';
import './Signup.css';
import { AuthIntegration } from '../../components/AuthIntegration/AuthIntegration';
import { FormAuth } from '../../components/FormAuth/FormAuth';
import {
  REG_NAME,
  REG_SURNAME,
  REG_EMAIL,
  REG_PASSWORD,
  ERR_MESSAGE_INVALIDTEXT,
  ERR_MESSAGE_INVALIDEMAIL,
  ERR_MESSAGE_INVALIDPASSWORD,
  ERR_MESSAGE_REQUIRED
} from '../../const/RegexConst';

export const Signup = props => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm({ mode: 'onChange' });
  const { onSubmit, onSubmitJoin, isClient } = props;
  const title = `Присоединиться как ${isClient ? 'заказчик' : 'специалист'}`;

  const handleSubmitSignup = values => {
    onSubmit(values, isClient);
    reset();
  };

  const handleSubmitJoin = values => {
    onSubmitJoin(values);
    reset();
  };

  if (isClient !== undefined) {
    return (
      <div className="signup">
        <h1>{title}</h1>
        <AuthIntegration />
        <FormAuth
          child={
            <>
              <label
                htmlFor="name"
                className="form-auth__label"
              >
                Имя
                <input
                  className=""
                  type="text"
                  id="name"
                  minLength="1"
                  maxLength="50"
                  {...register('name', {
                    required: ERR_MESSAGE_REQUIRED,
                    pattern: {
                      value: REG_NAME,
                      message: ERR_MESSAGE_INVALIDTEXT
                    }
                  })}
                />
                <span className="form-auth__err">{errors?.name && errors.name.message}</span>
              </label>
              <label
                htmlFor="reg-surname"
                className="form-auth__label"
              >
                Фамилия
                <input
                  className=""
                  type="text"
                  id="surname"
                  minLength="1"
                  maxLength="50"
                  {...register('surname', {
                    required: ERR_MESSAGE_REQUIRED,
                    pattern: {
                      value: REG_SURNAME,
                      message: ERR_MESSAGE_INVALIDTEXT
                    }
                  })}
                />
                <span className="form-auth__err">{errors?.surname && errors.surname.message}</span>
              </label>
              <label
                htmlFor="email"
                className="form-auth__label"
              >
                Email
                <input
                  className=""
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
                <span className="form-auth__err">{errors?.email && errors.email.message}</span>
              </label>
              <label
                htmlFor="password"
                className="form-auth__label"
              >
                Пароль
                <input
                  className=""
                  type="password"
                  id="password"
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
                <span className="form-auth__err">
                  {errors?.password && errors.password.message}
                </span>
              </label>
            </>
          }
          buttonTitle={'Присоединиться'}
          onSubmit={handleSubmit(handleSubmitSignup)}
          isFormValid={isValid}
        />
      </div>
    );
  } else {
    return (
      <FormAuth
        child={
          <fieldset className="signup__fieldset">
            <legend className="signup__title">
              Присоединитесь
              <br />
              как заказчик или специалист
            </legend>

            <div className="signup__input-container">
              <input
                type="radio"
                id="client"
                name="type"
                value="client"
                className="signup__input-radio"
              />
              <label
                htmlFor="client"
                className="signup__input-label"
              >
                Я заказчик
              </label>
            </div>

            <div className="signup__input-container">
              <input
                type="radio"
                id="expert"
                name="type"
                value="expert"
                className="signup__input-radio"
              />
              <label
                htmlFor="expert"
                className="signup__input-label"
              >
                Я фотограф/видеооператор
              </label>
            </div>
          </fieldset>
        }
        buttonTitle={'Присоединиться'}
        onSubmit={handleSubmitJoin}
        isFormValid={isValid}
      />
    );
  }
};
