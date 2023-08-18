import { useNavigate } from 'react-router-dom';
import './Signup.css';
import { useState } from 'react';
import { AuthIntegration } from '../../components/AuthIntegration/AuthIntegration';

export const Signup = () => {
  const navigate = useNavigate();
  const [clientId, setClientId] = useState(1);
  const [clientName, setClientName] = useState('Клиент 1');

  const [executorId, setExecutorId] = useState(1);
  const [executorName, setExecutorName] = useState('Исполнитель 1');

  const title = `Присоединиться как ${true ? "заказчик" : "специалист"}`;
  return (
    <div className="">
      <h1>{title}</h1>
      <AuthIntegration/>
      <button onClick={() => navigate('/sign-in')}>Войти</button>
    </div>
  );
};
