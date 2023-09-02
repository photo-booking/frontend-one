import './PriceList.css';

import React from 'react';
import PriceListItem from '../PriceListItem/PriceListItem';

const PriceList = () => {
  return (
    <section className="pricelist">
      <h2 className="pricelist__title">
        <span>Портфолио</span>
        <span>Прайс-лист</span>
      </h2>
      <div className="pricelist__headlines">
        <p className="pricelist__headline-item">Вид съёмок</p>
        <p className="pricelist__headline-item">Минимальное время съёмки</p>
        <p className="pricelist__headline-item">Срок сдачи заказа</p>
        <p className="pricelist__headline-item">Стоимость</p>
      </div>
      <div className="pricelist__prices">
        <PriceListItem />
        <PriceListItem />
        <PriceListItem />
        <PriceListItem />
      </div>
    </section>
  );
};

export default PriceList;
