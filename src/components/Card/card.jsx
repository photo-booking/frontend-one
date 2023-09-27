import { useNavigate } from 'react-router-dom';
import './card.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ImageGallery, Slider } from '../Slider/slider.jsx';
import { v4 as uuidv4 } from 'uuid';

export const Card = ({ user }) => {

  const navigate = useNavigate();
  const navigateProfile = () => {
    navigate(`/card/${user.id}`, { id: user.id });
  };

  const mediafiles = [
    'https://images.unsplash.com/photo-1606946887361-78feb162a525?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDJ8fGZvdG98ZW58MHx8fHwxNjk1ODUwNDEwfDA&ixlib=rb-4.0.3&q=80&w=1080',
    'https://images.unsplash.com/photo-1695338035806-af02c934af38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2864&q=80',
    "https://images.unsplash.com/photo-1579276446557-03ed8b755891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDE0fHxmb3RvfGVufDB8fHx8MTY5NTg1MDQxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1569441538558-f2f53970cd43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDI4fHxmb3RvfGVufDB8fHx8MTY5NTg1MDQxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1695556128448-1050e9b277e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2865&q=80",
  ];


  return (
    <section className="card">
      <div className="card__portfolio">


        {/* <img
          className="card__portfolio_item"
          alt='аватар'
          src={
            user.mediafiles.length > 0
              ? 'https://photo-market.acceleratorpracticum.ru/media/users/photos/facebook-5127fcb0b51adb0c217f1b04c9f1374b.jpg'
              : // `https://photo-market.acceleratorpracticum.ru${user.mediafiles[0].photo}`
                'https://img.freepik.com/free-photo/lavender-field-at-sunset-near-valensole_268835-3910.jpg'
          }
          
        /> */}

        <Slider>
          {mediafiles.map(item => (
            <img className="card__portfolio_item" src={item} key={uuidv4()}/>
          ))}
        </Slider>





      </div>
      <div className="card__about">
        <div className="card__about_profile" onClick={navigateProfile}>
          <div className="card__about_info" >
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
}
