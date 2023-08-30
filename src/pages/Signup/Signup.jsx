import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
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
    watch,
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm({ mode: 'onChange' });
  const navigate = useNavigate();
  const { onSubmit, onSubmitJoin, isClient } = props;
  const title = `Зарегистрироваться как ${isClient ? 'заказчик' : 'специалист'}`;

  // const watchType = watch('type', undefined);
  const watchAllFields = watch();

  const formAuthInputClassName = name => {
    return `form-auth__input ${errors[name]?.message ? 'form-auth__input_err' : ''} ${
      watchAllFields[name]?.length > 0 && errors[name]?.message === undefined
        ? 'form-auth__input_ok'
        : ''
    }`;
  };

  const inputContainerClientClassName = `signup__input-container ${
    watchAllFields !== undefined && watchAllFields.type === 'client'
      ? 'signup__input-container_check'
      : ''
  } `;
  const inputContainerExpertClassName = `signup__input-container ${
    watchAllFields !== undefined && watchAllFields.type === 'expert'
      ? 'signup__input-container_check'
      : ''
  } `;

  const buttonTitle = () => {
    let buttonTitle;
    if (!watchAllFields?.type) {
      buttonTitle = 'Создать аккаунт';
    } else if (watchAllFields?.type !== undefined && watchAllFields?.type === 'client') {
      buttonTitle = 'Зарегистрироваться как клиент';
    } else if (watchAllFields?.type !== undefined && watchAllFields?.type === 'expert') {
      buttonTitle = 'Зарегистрироваться как специалист';
    }
    return buttonTitle;
  };

  const handleSubmitSignup = values => {
    console.log(values);
    onSubmit(values, isClient);
    reset();
  };

  const handleSubmitJoin = values => {
    onSubmitJoin(values);
    reset();
  };

  return (
    <>
      {/* когда выбрал чекбокс клиент/заказчик */}
      {isClient !== undefined ? (
        
        <div className="signup form-auth__container">
          <h1 className="form-auth__title">{title}</h1>
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
                    className={formAuthInputClassName('name')}
                    type="text"
                    placeholder="Дмитрий"
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
                    className={formAuthInputClassName('surname')}
                    type="text"
                    placeholder="Иванов"
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
                  <span className="form-auth__err">
                    {errors?.surname && errors.surname.message}
                  </span>
                </label>
                <label
                  htmlFor="email"
                  className="form-auth__label"
                >
                  Email
                  <input
                    className={formAuthInputClassName('email')}
                    type="email"
                    placeholder="dmitrii.ivanov@example.com"
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
                    className={formAuthInputClassName('password')}
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
            buttonTitle={'Создать аккаунт'}
            onSubmit={handleSubmit(handleSubmitSignup)}
            err={errors}
          />
          <p>
            Уже есть аккаунт?
            <button
              className="form-auth__button_sign"
              onClick={evt => {
                evt.preventDefault();
                navigate('/sign-in');
              }}
            >
              Войдите
            </button>
          </p>
        </div>
      ) : (
        <div className="form-auth__container">
          <FormAuth
            child={
              <fieldset className="signup__fieldset">
                <legend className="form-auth__title">Какая у вас цель?</legend>
                <div className={inputContainerExpertClassName}>
                  <input
                    type="radio"
                    id="expert"
                    value="expert"
                    className="signup__input-radio"
                    required
                    {...register('type')}
                  />
                  <label
                    htmlFor="expert"
                    className="signup__input-label"
                  >
                    Я фотограф и/или видеооператор и хочу найти работу
                  </label>
                </div>
                <div className={inputContainerClientClassName}>
                  <input
                    type="radio"
                    id="client"
                    value="client"
                    className="signup__input-radio"
                    {...register('type')}
                  />
                  <label
                    htmlFor="client"
                    className="signup__input-label"
                  >
                    Я клиент и хочу найти фотографа и/или видеооператора
                  </label>
                </div>
              </fieldset>
            }
            buttonTitle={buttonTitle()}
            onSubmit={handleSubmit(handleSubmitJoin)}
            err={''} //?????????
          />
          <p>
            Уже есть аккаунт?
            <button
              className="form-auth__button_sign"
              onClick={evt => {
                evt.preventDefault();
                navigate('/sign-in');
              }}
            >
              Войдите
            </button>
          </p>
        </div>
      )}
    </>
  );
};
