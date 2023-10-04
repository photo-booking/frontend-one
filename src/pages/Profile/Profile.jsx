import StickyBox from 'react-sticky-box';

import './Profile.css';
import { AboutMe } from '../../components/AboutMe/AboutMe';
import { PhotoCard } from '../../components/Profile/PhotoCard/PhotoCard';
import { useEffect, useState } from 'react';
import { LinksPortfolio } from '../../components/Profile/Links/Links';
import { Sorting } from '../../components/Profile/Sorting/Sorting';
import PricesPage from '../PricesPage/PricesPage';
import { CardInfoProfile } from '../../components/Profile/PhotoCard/CardInfo/CardInfo';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile } from '../../services/redusers/profile';
import { Reviews } from '../../components/Reviews/Reviews';

export const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile.data);
  const [user, setUser] = useState({});
  const params = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchProfile(params.id));
    //последняя карточка не выравнивается,не знаю как еще решить
    // if (document.getElementsByClassName('photoCardContainerProfile__card').length !== 0) {
    //   const cards = document.getElementsByClassName('photoCardContainerProfile__card');
    //   const length = document.getElementsByClassName('photoCardContainerProfile__card').length;
    // cards[length - 1].style.marginLeft = '16px';
    // }
  }, []);
  useEffect(() => {
    console.log(user.mediafiles);
    setUser(profile);
    // console.log('profile', profile);
  }, [params, profile]);
  const [img, setImg] = useState([
    'https://img.freepik.com/free-photo/lavender-field-at-sunset-near-valensole_268835-3910.jpg',
    'https://lifehacker.ru/special/fujifilm/dist/static/img/5.2410a2d.jpg',
    'https://bigpicture.ru/wp-content/uploads/2015/11/nophotoshop29-800x532.jpg',
    'https://www.interfax.ru/ftproot/photos/photostory/2022/04/29/week/week7_1100.jpg',
    'https://www.interfax.ru/ftproot/photos/photostory/2022/04/29/week/week7_1100.jpg'
  ]);
  // const video = 'https://www.youtube.com/watch?v=HwVh8pmOot4=3s';
  const video = ' https://www.youtube.com/shorts/D1i-QBEe5y8';
  // https://www.youtube.com/shorts/D1i-QBEe5y8?feature=share
  const [isPrice, setIsPrice] = useState(false);

  const splitUrl = video => {
    const urls = video.split('/');
    // let videoId = '';
    let videoId = urls[urls.length - 1];
    // urls.forEach(url => {
    //   if (url.startsWith('watch?v=')) {
    //     videoId = url.split('=')[1];
    //   }
    // });
    return videoId;
  };
  const overlay = document.getElementById('overlayProfile');
  const onPrice = () => {
    setIsPrice(true);
    document.getElementsByClassName('portfolio-button')[0].classList.remove('active');
    document.getElementsByClassName('price-button')[0].classList.add('active');
  };
  const onPortfolio = () => {
    setIsPrice(false);
    document.getElementsByClassName('portfolio-button')[0].classList.add('active');
    document.getElementsByClassName('price-button')[0].classList.remove('active');
  };
  const onShowMore = () => {};
  const onOpenImg = id => {
    const img = document.getElementById(id);
    if (img.naturalHeight !== null && img.naturalWidth !== null) {
      const scrollY = window.scrollY;
      const imgWidth = img.naturalWidth;
      const imgHeight = img.naturalHeight;
      const y = window.outerHeight / 2 + window.screenY - imgHeight / 2 + scrollY - 96;
      const x = window.outerWidth / 2 + window.screenX - imgWidth / 2;

      const modal = document.createElement('img');
      modal.style.width = `${imgWidth}px`;
      modal.style.height = `${imgHeight}px`;
      modal.style.backgroundColor = `black`;
      modal.src = img.getAttribute('src');
      modal.style.cssText = `position:absolute;top:${y}px;left:${x}px;z-index:100;`;
      document.body.appendChild(modal);
      overlay.style.display = 'block';
      overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
        modal.remove();
      });
    }
  };
  const onPlayVideo = id => {
    const overlay = document.getElementById('overlayProfile');
    const divPlayer = document.getElementById('player');
    divPlayer.style.cssText = `z-index:100;`;

    const YTPlayer = require('yt-player');
    const player = new YTPlayer('#player');
    player.load(id);
    player.setVolume(100);
    player.setSize(1034, 500);

    //этот же вопрос с выравниванием последней карточки

    const div = document.getElementsByClassName('photoCardContainerProfile');
    const divLength = document.getElementsByClassName('photoCardContainerProfile__card').length;

    document.getElementsByClassName('profileContainer__youtube')[0].style.display = ' none';
    overlay.style.display = 'block';
    overlay.addEventListener('click', () => {
      overlay.style.display = 'none';
      player.destroy();
      document.getElementsByClassName('profileContainer__youtube')[0].style.display = 'block';

      div[divLength - 1].style.marginLeft = '32px';
    });
  };

  return (
    user && (
      <>
        <AboutMe
          isPhotografer={user.is_photographer}
          isVideoOperator={user.is_video_operator}
          name={user.first_name}
          surname={user.last_name}
          aboutMe={user.about_me}
          phone={user.phone}
          telegram={user.social_telegram}
          email={user.email}
          equipment={user.equipment}
          // photo={
          //   // 'https://photo-market.acceleratorpracticum.ru/media/users/profile_photo/django.png'
          //   'https://photo-market.acceleratorpracticum.ru/media/users/photos/de0ff9c5-0078-432c-aeed-4ca9f1e93c58.jpg'
          // }
          photo={user.profile_photo}
        />
        <div id="overlayProfile" />
        <LinksPortfolio
          onPrice={onPrice}
          onPortfolio={onPortfolio}
        />
        {!isPrice ? (
          <>
            <div className={'profileContainer'}>
              <div className="profileContainer__filter">
                <StickyBox
                  offsetTop={148}
                  offsetBottom={52}
                >
                  <Sorting />
                </StickyBox>
              </div>

              <div className={'profileContainer__cardsContainer'}>
                {user.mediafiles &&
                  user.mediafiles.length > 0 &&
                  user.mediafiles.map((img, index) => (
                    <PhotoCard
                      id={`photocard${index}`}
                      key={index}
                      src={`https://photo-market.acceleratorpracticum.ru${img.photo}`}
                      alt={'photo-booking'}
                      onOpenImg={() => onOpenImg(`photocard${index}`)}
                    />
                  ))}
                <div id="player" />
                <div
                  className="profileContainer__youtube"
                  onClick={() => onPlayVideo(splitUrl(video))}
                >
                  <img
                    src={`//img.youtube.com/vi/${splitUrl(video)}/default.jpg`}
                    width="496"
                    height="296"
                    alt="youtubePreview"
                  />
                  <div className="profileContainer__youtube_playContainer" />
                  <CardInfoProfile />
                </div>
                <button
                  className="button_more"
                  onClick={onShowMore}
                >
                  Показать ещё
                </button>
              </div>
            </div>
          </>
        ) : (
          <PricesPage />
        )}
        <Reviews />
      </>
    )
  );
};
