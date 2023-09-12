import { useNavigate } from 'react-router-dom';
import './Landing.css';


export const Landing = (props) => {
  const navigate = useNavigate();
  const {signOut} = props;
  return (
    <div className={'landing-container'}>
      <h1>Лэндинг</h1>
      <button onClick={() => navigate('/order-service')}>Заказать услугу</button>
    </div>
  );
};
