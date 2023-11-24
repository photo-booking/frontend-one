import React from 'react';
import camera from '../../images/ph_camera.svg';

import './PriceListItem.css';

const PriceListItem = () => {
  return (
    <>
      <div className="pricelistitem__block">
        <img
          className="pricelistitem__img"
          src={camera}
          alt="картинка камеры"
        />
        <p className="pricelistitem__type">Love Story</p>
        <p className="pricelistitem__min-time">от 1 часа</p>
        <p className="pricelistitem__deadline">от 7 дней</p>
        <p className="pricelistitem__price">от 2000&#8381;/час</p>
        <button className="pricelistitem__btn" onClick={() => console.log('Хочу создать заказ')}>Заказать</button>
      </div>
      <div className="pricelistitem__line" />
    </>
  );
};

export default PriceListItem;
