import { useNavigate } from 'react-router-dom';
import './Signin.css';
import { AuthIntegration } from '../../components/AuthIntegration/AuthIntegration';
export const Signin = () => {
  const navigate = useNavigate();

  return (
    <div className={'loginPage-container'}>
      <h1>Войти в аккаунт</h1>
      <AuthIntegration/>
      <button onClick={() => navigate('/reset-password')}>Забыли пароль?</button>
      <button onClick={() => navigate('/sign-up')}>Регистрация</button>
      <button onClick={() => navigate(`/catalog`)}>Перейти в каталог</button>
    </div>
  );
};
