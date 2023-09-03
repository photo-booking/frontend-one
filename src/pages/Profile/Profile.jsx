import { useLocation, useNavigate } from 'react-router-dom';
import './Profile.css';
import { AboutMe } from '../../components/AboutMe/AboutMe';
export const Profile = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  // const { name, id } = state;
  const name = 'hh'
  const id = 1
  return (
    <>
      <AboutMe />
      <button onClick={() => navigate(`/catalog`)}>Вернуться в каталог</button>
      <button onClick={() => navigate(`/expert/${id}/ratings`, { state: { name, id } })}>
        Отзывы и рейтинги
      </button>
    </>
  );
};
