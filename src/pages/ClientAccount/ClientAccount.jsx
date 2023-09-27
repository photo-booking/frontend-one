import { useLocation, useNavigate } from 'react-router-dom';
import './ClientAccount.css';
import { useState, useContext } from 'react';
import { CurrentUserContext } from '../../components/context/CurrentUserContext';

export const ClientAccount = () => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className={'clientAccount-container'}>
      <h1>Личный кабинет клиента: {currentUser.first_name}</h1>
    </div>
    
  );
};
