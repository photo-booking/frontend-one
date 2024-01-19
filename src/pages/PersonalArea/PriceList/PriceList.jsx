import './PriceList.css';
import PriceListForm from './PriceListForm/PriceListForm';
import photoIcon from '../../../images/worker icon_photo.svg';
import videoIcon from '../../../images/worker icon_video.svg';
import { useState } from 'react';

const photoTypes = ['Свадебная', 'Love Story', 'Индивидуальная', 'Семейная', 'Fashion', 'Питомцы'];
const videoTypes = ['Свадебная', 'Love Story', 'Индивидуальная', 'Семейная', 'Fashion', 'Питомцы', 'Интервью', 'Аэросъёмка', 'Стоковая', 'Клипы'];

export const PriceList = () => {
  const [hoveredPhotoItem, setHoveredPhotoItem] = useState(null);
  const [hoveredVideoItem, setHoveredVideoItem] = useState(null);

  const handlePhotoItemHover = (index) => {
    setHoveredPhotoItem(index);
  };

  const handleVideoItemHover = (index) => {
    setHoveredVideoItem(index);
  };

  const generateListItems = (types, namePrefix, hoveredItem, handleItemHover) =>
    types.map((type, index) => (
      <li
        className="profile-pricelist__list-item"
        key={index}
        onMouseEnter={() => handleItemHover(index)}
        onMouseLeave={() => handleItemHover(null)}
      >
        <div className="profile-pricelist__checkbox-wraper">
          <input
            className="profile-pricelist__checkbox"
            type="checkbox"
            name={`${namePrefix}${index}`}
            id={`${namePrefix}${index}`}
          />
          <label
            className="profile-pricelist__label"
            htmlFor={`${namePrefix}${index}`}
          >
            {type}
          </label>
          {hoveredItem === index && <PriceListForm />}
        </div>
      </li>
    ));

  return (
    <article className="profile-pricelist">
      <h2 className="profile-pricelist__title">Прайс-лист</h2>
      <p className="profile-pricelist__description">Эта информация видна всем в вашем профиле</p>

      <div className="profile-pricelist__wrapper">
        <img
          className="profile-pricelist__icon"
          src={photoIcon}
          alt="фото иконка"
        />
        <h3 className="profile-pricelist__subtitle">Виды фотосъёмки</h3>
      </div>

      <ul className="profile-pricelist__list">
        {generateListItems(photoTypes, 'photoChoice', hoveredPhotoItem, handlePhotoItemHover)}
      </ul>

      <div className="profile-pricelist__wrapper">
        <img
          className="profile-pricelist__icon"
          src={videoIcon}
          alt="видео иконка"
        />
        <h3 className="profile-pricelist__subtitle">Виды видеосъёмки</h3>
      </div>

      <ul className="profile-pricelist__list">
        {generateListItems(videoTypes, 'videoChoice', hoveredVideoItem, handleVideoItemHover)}
      </ul>
    </article>
  );
};
