import './ExpertCard.css';
import expertPhoto from '../../images/ExpertPhoto.png';
import defaultAvatar from '../../images/Avatar.svg';
import gradeImg from '../../images/StarIcon.svg';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Slider } from '../Slider/slider.jsx';

export const ExpertCard = (props) => {
    const { first_name, last_name, is_photographer, is_video_operator, profile_photo, mediafiles, min_cost, raiting} = props.expert;
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        let photos = [];
        mediafiles.map(media => {
          if (media.media_type === 'PHOTO') {
            photos.push(media.photo);
          }
        });
        setUserInfo({ photos: photos });
      }, []);

    return (
        Object.keys(userInfo).length !==0 &&
        <div className='expert-card'>
            <div className='expert-card__img-container'>
                    {userInfo.photos.length > 0 ? (
                        userInfo.photos.map(item => (
                            <img className='expert-card__img'
                                src={`https://photo-market.acceleratorpracticum.ru${item}`}
                                alt='Пример работы фотографа'
                                key={uuidv4()}
                            />
                        ))
                    ) : (
                        <img className='expert-card__img'
                            src={expertPhoto}
                            alt='Картинка'
                            key={uuidv4()}
                        />
                    )}
            </div>
            <div className='expert-card__container'>
                <div className='expert-card__about'>
                    <div className='expert-card__text-part'>
                        <h1 className='expert-card__name'>{first_name} {last_name}</h1>
                        <p className='expert-card__position'>
                        {is_photographer & is_video_operator
                  ? 'Фотограф, Видеооператор'
                  : is_photographer
                  ? 'Фотограф'
                  : is_video_operator
                  ? 'Видеооператор'
                  : ''}
                        </p>
                    </div>
                    <img className='expert-card__avatar'
                    src={profile_photo != null ? profile_photo : defaultAvatar}
                    alt='Аватар'
                    />
                </div>
                <div className='expert-card__work-type'>
                    <span className='expert-card__work-position'>Свадебная</span>
                    <span className='expert-card__work-position'>Love Story</span>
                    <span className='expert-card__work-position'>Индивидуальная</span>
                    <span className='expert-card__work-position'>Аэросъемка</span>
                    <span className='expert-card__work-position'>Для стока</span>
                </div>
                <div className='expert-card__check'>
                    <div className='expert-card__amount'>{min_cost} ₽/час</div>
                    <div className='expert-card__grade'>
                        <img className='expert-card__grade-img' src={gradeImg} alt='Иконка звездочки'/>
                        <span className='expert-card__grade-rating'>{raiting != null ? {raiting} : 0}</span>
                        <span className='expert-card__grade-count'>{raiting != null ? (raiting) : ('( 0 )')}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}