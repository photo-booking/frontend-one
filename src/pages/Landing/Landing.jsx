import { useNavigate } from 'react-router-dom';
import './Landing.css';
import { BannerForExperts } from '../../components/BannerForExperts/BannerForExperts';

export const Landing = props => {
  const navigate = useNavigate();
  const { signOut } = props;
  return (
    <div className={'landing-container'}>
      <BannerForExperts />
      <button onClick={() => navigate('/order-service')}>Заказать услугу</button>
    </div>
  );
};
