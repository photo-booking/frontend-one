import { useNavigate } from 'react-router-dom';
import './Login.css';
export const Login = () => {
  const navigate = useNavigate();

  return (
    <div className={'loginPage-container'}>
      <h1>Авторизация</h1>
      <button onClick={() => navigate('/reset-password')}>Забыли пароль?</button>
      <button onClick={() => navigate('/sign-up')}>Регистрация</button>
      <button onClick={() => navigate(`/catalog`)}>Перейти в каталог</button>
    </div>
  );
};
