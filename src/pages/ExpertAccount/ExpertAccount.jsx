import { useLocation, useNavigate } from 'react-router-dom';
import './ExpertAccount.css';
import { useState, useContext } from 'react';
import { CurrentUserContext } from '../../components/context/CurrentUserContext';
import { ProfileNav } from '../../components/ProfileNav/ProfileNav';

export const ExpertAccount = (props) => {
  const currentUser = useContext(CurrentUserContext);
  const { isClient } = props;

  return (
    <div className=''>
      <ProfileNav isClient={isClient}/>
    </div>
  );
};
