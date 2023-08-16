import { useLocation, useNavigate } from 'react-router-dom';
import './styles.css';
export const ExecutorChat = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { name, id } = state;
  return (
    <div className={'executorChat-container'}>
      <h1>Чат исполнителя: {name}</h1>
      <button onClick={() => navigate('/catalog')}>Перейти в каталог</button>
      <button onClick={() => navigate(`/executor/${id}/orders`, { state: { name, id } })}>
        Заказы
      </button>
    </div>
  );
};
