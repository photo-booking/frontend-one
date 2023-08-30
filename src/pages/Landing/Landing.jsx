import { useNavigate } from 'react-router-dom';
import './Landing.css';
import { HeaderStart } from '../../components/Header-start/header-start';

export const Landing = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeaderStart></HeaderStart>
      <div className={'landing-container'}>
        <h1>Лэндинг</h1>
        <button onClick={() => navigate('/sign-in')}>Войти</button>
        <button onClick={() => navigate('/order-service')}>Заказать услугу</button>
      </div>
    </>
  );
};
