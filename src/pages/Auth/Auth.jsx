import { useNavigate } from 'react-router-dom';
import './Auth.css';
import { useState } from 'react';
import { SharePopup } from '../../components/SharePopup/SharePopup';

export const Auth = () => {
  const navigate = useNavigate();
  const [clientId, setClientId] = useState(1);
  const [clientName, setClientName] = useState('Клиент 1');

  const [executorId, setExecutorId] = useState(1);
  const [executorName, setExecutorName] = useState('Исполнитель 1');

  return (
    <div className="">
      <h1>Регистрация</h1>

      <button onClick={() => navigate('/sign-in')}>Войти</button>
    </div>
  );
};
