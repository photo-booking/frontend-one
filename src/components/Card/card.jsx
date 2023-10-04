import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Slider } from '../Slider/slider.jsx';
import defaultAvatar from '../../images/Avatar.svg';

import './card.css';

export const Card = ({ user }) => {
  const [userInfo, setUserInfo] = useState({});

  const navigate = useNavigate();
  const navigateProfile = () => {
    navigate(`/card/${user.id}`, { id: user.id });
  };
  useEffect(() => {
    let photos = [];
    user.mediafiles.map(media => {
      if (media.media_type === 'PHOTO') {
        photos.push(media.photo);
      }
    });
    setUserInfo({ user, photos: photos });
  }, []);

  const mediafiles = [
    'https://images.unsplash.com/photo-1606946887361-78feb162a525?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDJ8fGZvdG98ZW58MHx8fHwxNjk1ODUwNDEwfDA&ixlib=rb-4.0.3&q=80&w=1080'
  ];

  return (
    Object.keys(userInfo).length !== 0 && (
      <section className="card">
        <div className="card__portfolio">
          <Slider>
            {userInfo.photos.length > 0 ? (
              userInfo.photos.map(item => (
                <img
                  alt={'photo'}
                  className="card__portfolio_item"
                  src={`https://photo-market.acceleratorpracticum.ru${item}`}
                  key={uuidv4()}
                />
              ))
            ) : (
              <img
                alt={'photo'}
                className="card__portfolio_item"
                src={mediafiles[0]}
                key={uuidv4()}
              />
            )}
          </Slider>
        </div>
        <div className="card__about">
          <div
            className="card__about_profile"
            onClick={navigateProfile}
          >
            <div className="card__about_info">
              <p className="card__about_name">{userInfo.user.first_name}</p>
              <p className="card__about_profession">
                {userInfo.user.is_photographer & userInfo.user.is_video_operator
                  ? 'Фотограф, Видеооператор'
                  : userInfo.user.is_photographer
                  ? 'Фотограф'
                  : userInfo.user.is_video_operator
                  ? 'Видеооператор'
                  : ''}
              </p>
            </div>
            <div className="card__avatar_box">
              <img
                alt={'avatar'}
                className="card__avatar"
                src={
                  userInfo.user.profile_photo != null ? userInfo.user.profile_photo : defaultAvatar
                }
              />
            </div>
          </div>
          <p className="card__about-me">{userInfo.user.about_me}</p>
          <p className="card__price">от {userInfo.user.min_cost} ₽/час </p>
        </div>
      </section>
    )
  );
};
