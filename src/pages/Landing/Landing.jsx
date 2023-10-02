// import { useNavigate } from 'react-router-dom';
import './Landing.css';
import { FirstScreen } from '../../components/FirstScreen/FirstScreen';
import { ProductFeatures } from '../../components/ProductFeatures/ProductFeatures';
import { ExpertsPreview } from '../../components/ExpertsPreview/ExpertsPreview';
import { BannerForExperts } from '../../components/BannerForExperts/BannerForExperts';

export const Landing = props => {
  // const navigate = useNavigate();
  // const { signOut } = props;
  return (
    <div className={'landing-container'}>
      <FirstScreen />
      <ProductFeatures />
      <ExpertsPreview />
      <BannerForExperts />
      {/* <button onClick={() => navigate('/order-service')}>Заказать услугу</button> */}
    </div>
  );
};
