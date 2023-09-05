import './Profile.css';
import { AboutMe } from '../../components/AboutMe/AboutMe';
import { PhotoCard } from '../../components/Profile/PhotoCard/PhotoCard';
import { useEffect, useState } from 'react';
import { LinksPortfolio } from '../../components/Profile/Links/Links';
import { Sorting } from '../../components/Profile/Sorting/Sorting';
import PricesPage from '../PricesPage/PricesPage';
import { CardInfoProfile } from '../../components/Profile/PhotoCard/CardInfo/CardInfo';
import { Footer } from '../../components/Footer/footer';

export const Profile = () => {
  useEffect(() => {
    //последняя карточка не выравнивается,не знаю как еще решить
    // if (document.getElementsByClassName('photoCardContainerProfile__card').length !== 0) {
    //   const cards = document.getElementsByClassName('photoCardContainerProfile__card');
    //   const length = document.getElementsByClassName('photoCardContainerProfile__card').length;
      // cards[length - 1].style.marginLeft = '16px';
    // }
    fetch('https://photo-market.acceleratorpracticum.ru/api/users/1')
      .then(response => console.log(response))
      .catch(err => console.log(err));
  });
  const [img, setImg] = useState([
    'https://img.freepik.com/free-photo/lavender-field-at-sunset-near-valensole_268835-3910.jpg',
    'https://lifehacker.ru/special/fujifilm/dist/static/img/5.2410a2d.jpg',
    'https://bigpicture.ru/wp-content/uploads/2015/11/nophotoshop29-800x532.jpg',
    'https://www.interfax.ru/ftproot/photos/photostory/2022/04/29/week/week7_1100.jpg',
    'https://where.ru/upload/iblock/ad4/ad4ef7e48f611b6be29e51e9aefaecd1.jpg'
  ]);
  const video = 'https://www.youtube.com/watch?v=HwVh8pmOot4=3s';
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
    const overlay = document.getElementById('overlayProfile');
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
    // const cards = document.getElementsByClassName('photoCardContainerProfile__card');
    // const length = document.getElementsByClassName('photoCardContainerProfile__card').length;
    // cards[length - 1].style.marginLeft = '0';

    document.getElementsByClassName('profileContainer__youtube')[0].style.display = ' none';
    overlay.style.display = 'block';
    overlay.addEventListener('click', () => {
      overlay.style.display = 'none';
      player.destroy();
      document.getElementsByClassName('profileContainer__youtube')[0].style.display = 'block';
      // cards[length - 1].style.marginLeft = '16px';
    });
  };

  return (
    <>
      <AboutMe />
      <div id="overlayProfile" />
      <LinksPortfolio
        onPrice={onPrice}
        onPortfolio={onPortfolio}
      />
      {!isPrice ? (
        <>
          <div className={'profileContainer'}>
            <Sorting />
            <div className={'profileContainer__cardsContainer'}>
              {img.map((img, index) => (
                <PhotoCard
                  id={`photocard${index}`}
                  key={img}
                  src={img}
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
                  width="501"
                  height="300"
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
      <Footer />
    </>
  );
};
