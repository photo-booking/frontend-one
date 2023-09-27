import { useLocation, useNavigate } from 'react-router-dom';
import './ExpertAccount.css';
import { useState, useContext } from 'react';
import { CurrentUserContext } from '../../components/context/CurrentUserContext';

export const ExpertAccount = () => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <>
    <div className={'expertAccount-container'}>
      <h1>Личный кабинет исполнителя: {currentUser.first_name}</h1>
    </div>
    </>
  );
};
