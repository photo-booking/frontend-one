import { useNavigate } from 'react-router-dom';
import './OrderServices.css';
import { HeaderRegistration } from '../../components/Header-registration/header-registration';

export const OrderServices = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderRegistration></HeaderRegistration>
      <div className={'orderServices-container'}>
        <h1>Отдельный борд с заказами </h1>
        <button onClick={() => navigate('/catalog')}>В каталог</button>
      </div>
    </>
  );
};
