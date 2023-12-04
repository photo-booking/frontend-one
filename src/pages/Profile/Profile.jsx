import StickyBox from 'react-sticky-box';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { AboutMe } from '../../components/AboutMe/AboutMe';
import { PhotoCard } from '../../components/Profile/PhotoCard/PhotoCard';
import { LinksPortfolio } from '../../components/Profile/Links/Links';
import { Sorting } from '../../components/Profile/Sorting/Sorting';
import PricesPage from '../PricesPage/PricesPage';
import { CardInfoProfile } from '../../components/Profile/PhotoCard/CardInfo/CardInfo';
import { fetchProfile } from '../../services/redusers/profile';
import { Reviews } from '../../components/Reviews/Reviews';
import { url } from '../../const/baseUrl';

import './Profile.css';

export const Profile = props => {
  const { loggedIn, onGetReviews, reviews, onGetIdChatAndChatHistory, chatRoom } = props;
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile.data);
  const [user, setUser] = useState({});
  const [isShowMore, setIsShowMore] = useState(false);

  const params = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchProfile(params.id));
  }, []);
  useEffect(() => {
    let video = [];
    if (Object.keys(profile).length !== 0) {
      if (profile.mediafiles.length > 0) {
        profile.mediafiles.map(media => {
          if (media.media_type === 'VIDEO') {
            video.push(media.link);
          }
        });
      }
    }
    setUser({ profile, video: video });
  }, [params, profile]);

  const [isPrice, setIsPrice] = useState(false);

  const splitUrl = video => {
    const urls = video.split('/');
    let videoId = '';
    urls.forEach(url => {
      if (url.startsWith('watch?v=')) {
        videoId = url.split('=')[1];
      }
    });
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

    document.getElementsByClassName('profileContainer__youtube')[0].style.display = ' none';
    overlay.style.display = 'block';
    overlay.addEventListener('click', () => {
      overlay.style.display = 'none';
      player.destroy();
      document.getElementsByClassName('profileContainer__youtube')[0].style.display = 'block';
    });
  };

  return (
    Object.keys(user).length !== 0 && (
      <>
        <AboutMe
          loggedIn={loggedIn}
          isPhotografer={user.profile.is_photographer}
          isVideoOperator={user.profile.is_video_operator}
          name={user.profile.first_name}
          surname={user.profile.last_name}
          aboutMe={user.profile.about_me}
          phone={user.profile.phone}
          telegram={user.profile.social_telegram}
          email={user.profile.email}
          equipment={user.profile.equipment}
          photo={user.profile.profile_photo}
          onGetIdChatAndChatHistory={onGetIdChatAndChatHistory}
          chatRoom={chatRoom}
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
                {user.profile.mediafiles &&
                  user.profile.mediafiles.length > 0 &&
                  user.profile.mediafiles.map(
                    (img, index) =>
                      img.media_type === 'PHOTO' && (
                        <PhotoCard
                          id={`photocard${index}`}
                          key={index}
                          src={`${url}${img.photo}`}
                          alt={'photo-booking'}
                          onOpenImg={() => onOpenImg(`photocard${index}`)}
                        />
                      )
                  )}
                <div id="player" />
                {user.video.length > 0 &&
                  user.video.map(video => (
                    <div
                      key={video}
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
                  ))}
                {isShowMore && (
                  <button
                    className="button_more"
                    onClick={onShowMore}
                  >
                    Показать ещё
                  </button>
                )}
              </div>
            </div>
          </>
        ) : (
          <PricesPage />
        )}
        <Reviews
          loggedIn={loggedIn}
          onGetReviews={onGetReviews}
          reviews={reviews}
        />
      </>
    )
  );
};
