import { useNavigate } from 'react-router-dom';
import './card.css';

export const Card = ({ user }) => {
  const navigate = useNavigate();
  const navigateProfile = () => {
    navigate(`/card/${user.id}`, { id: user.id });
  };

  return (
    <section
      className="card"
      onClick={navigateProfile}
    >
      <div className="card__portfolio">
        <img
          className="card__portfolio_item"
          src={
            user.mediafiles.length > 0
              ? 'https://photo-market.acceleratorpracticum.ru/media/users/photos/свадебная_1.jpeg'
              : // `https://photo-market.acceleratorpracticum.ru${user.mediafiles[0].photo}`
                'https://img.freepik.com/free-photo/lavender-field-at-sunset-near-valensole_268835-3910.jpg'
          }
        />
      </div>
      <div className="card__about">
        <div className="card__about_profile">
          <div className="card__about_info">
            <p className="card__about_name">{user.first_name}</p>
            <p className="card__about_profession">
              {user.is_photographer & user.is_video_operator
                ? 'Фотограф, Видеооператор'
                : user.is_photographer
                ? 'Фотограф'
                : user.is_video_operator
                ? 'Видеооператор'
                : ''}
            </p>
          </div>
          <div className="card__avatar_box">
            <img
              className="card__avatar"
              src={user.avatar}
            />
          </div>
        </div>
        <p className="card__about-me">{user.about_me}</p>
        <p className="card__price">от {user.min_cost} ₽/час </p>
      </div>
    </section>
  );
};
