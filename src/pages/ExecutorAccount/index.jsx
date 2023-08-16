import { useLocation, useNavigate } from 'react-router-dom';
import './styles.css';
export const ExecutorAccount = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { name, id } = state;
  return (
    <div className={'executorAccount-container'}>
      <h1>Личный кабинет исполнителя: {name}</h1>
      <button onClick={() => navigate('/catalog')}>Перейти в каталог</button>
      <button onClick={() => navigate(`/executor/${id}/orders`, { state: { name, id } })}>
        Заказы
      </button>
    </div>
  );
};
