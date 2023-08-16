import { useNavigate } from 'react-router-dom';
import './styles.css';
import { useState } from 'react';
export const Auth = () => {
  const navigate = useNavigate();
  const [clientId, setClientId] = useState(1);
  const [clientName, setClientName] = useState('Клиент 1');

  const [executorId, setExecutorId] = useState(1);
  const [executorName, setExecutorName] = useState('Исполнитель 1');

  return (
    <div className={'auth-container'}>
      <h1>Регистрация</h1>
      <button onClick={() => navigate('/sign-in')}>Войти</button>
      <button
        onClick={() =>
          navigate(`/client/${clientId}`, { state: { name: clientName, id: clientId } })
        }
      >
        Личный кабинет клиента
      </button>
      <button
        onClick={() =>
          navigate(`/executor/${executorId}`, { state: { name: executorName, id: executorId } })
        }
      >
        Личный кабинет исполнителя
      </button>
    </div>
  );
};
