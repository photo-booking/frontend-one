import { useLocation, useNavigate } from 'react-router-dom';
import './Profile.css';
import { PhotoCard } from '../../components/Profile/PhotoCard/PhotoCard';
import { useState } from 'react';
import { LinksPortfolio } from '../../components/Profile/Links/Links';
import { Sorting } from '../../components/Profile/Sorting/Sorting';
import PricesPage from "../PricesPage/PricesPage";
export const Profile = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  // const { name, id } = state;
  const [img, setImg] = useState([
    'https://img.freepik.com/free-photo/lavender-field-at-sunset-near-valensole_268835-3910.jpg',
    'https://i.pinimg.com/originals/b3/e7/a9/b3e7a9f02e9b56614602ee7cdd8c97fe.jpg',
    'https://cdn.fotosklad.ru/unsafe/00b0ecf9768e44e0a4ddc59e94bacc25/image.jpg',
    'https://bigpicture.ru/wp-content/uploads/2015/11/nophotoshop29-800x532.jpg',
    'https://img.freepik.com/free-photo/lavender-field-at-sunset-near-valensole_268835-3910.jpg',
    'https://i.pinimg.com/originals/b3/e7/a9/b3e7a9f02e9b56614602ee7cdd8c97fe.jpg',
    'https://cdn.fotosklad.ru/unsafe/00b0ecf9768e44e0a4ddc59e94bacc25/image.jpg',
    'https://bigpicture.ru/wp-content/uploads/2015/11/nophotoshop29-800x532.jpg'
  ]);
  const [isPrice, setIsPrice] = useState(false);
  const name = 'hh';
  const id = 1;
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

  return (
    <>
      <LinksPortfolio
        onPrice={onPrice}
        onPortfolio={onPortfolio}
      />
      {!isPrice ? (
        <>
          <div className={'profileContainer'}>
            <Sorting />
            <div className={'profileContainer__cardsContainer'}>
              {img.map(img => (
                <PhotoCard
                  key={img}
                  src={img}
                  alt={'photo-booking'}
                />
              ))}
              <button
                className="button-showMore"
                onClick={onShowMore}
              >
                Показать ещё
              </button>
            </div>
          </div>
        </>
      ) : (
        <PricesPage/>
      )}
    </>
  );
};
