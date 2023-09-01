import { useNavigate } from 'react-router-dom';
import './Landing.css';
import Skeleton from '../../components/Skeleton/Skeleton';


export const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className={'landing-container'}>
      <h1>Лэндинг</h1>
      <button onClick={() => navigate('/sign-in')}>Войти</button>
      <button onClick={() => navigate('/order-service')}>Заказать услугу</button>
      <Skeleton />
    </div>
  );
};
