import './PriceList.css';
import PriceListForm from './PriceListForm/PriceListForm';
import photoIcon from '../../../images/worker icon_photo.svg';
import videoIcon from '../../../images/worker icon_video.svg';

export const PriceList = () => {
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
        <li className="profile-pricelist__list-item">
          <div className="profile-pricelist__checkbox-wraper">
            <input
              className="profile-pricelist__checkbox"
              type="checkbox"
              name="choice1"
              id="choice1"
            />
            <label
              className="profile-pricelist__label"
              for="choice1"
            >
              Свадебная
            </label>
          </div>
          <PriceListForm />
        </li>
        <li className="profile-pricelist__list-item">
          <div className="profile-pricelist__checkbox-wraper">
            <input
              className="profile-pricelist__checkbox"
              type="checkbox"
              name="choice2"
              id="choice2"
            />
            <label
              className="profile-pricelist__label"
              for="choice2"
            >
              Love Story
            </label>
          </div>
        </li>
        <li className="profile-pricelist__list-item">
          <input
            className="profile-pricelist__checkbox"
            type="checkbox"
            name="choice3"
            id="choice3"
          />
          <label
            className="profile-pricelist__label"
            for="choice3"
          >
            Индивидуальная
          </label>
        </li>
        <li className="profile-pricelist__list-item">
          <input
            className="profile-pricelist__checkbox"
            type="checkbox"
            name="choice4"
            id="choice4"
          />
          <label
            className="profile-pricelist__label"
            for="choice4"
          >
            Семейная
          </label>
        </li>
        <li className="profile-pricelist__list-item">
          <input
            className="profile-pricelist__checkbox"
            type="checkbox"
            name="choice5"
            id="choice5"
          />
          <label
            className="profile-pricelist__label"
            for="choice5"
          >
            Fashion
          </label>
        </li>
        <li className="profile-pricelist__list-item">
          <input
            className="profile-pricelist__checkbox"
            type="checkbox"
            name="choice6"
            id="choice6"
          />
          <label
            className="profile-pricelist__label"
            for="choice6"
          >
            Питомцы
          </label>
        </li>
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
        <li className="profile-pricelist__list-item">
          <input
            className="profile-pricelist__checkbox"
            type="checkbox"
            name="choice1"
            id="choice1"
          />
          <label
            className="profile-pricelist__label"
            for="choice1"
          >
            Свадебная
          </label>
        </li>
        <li className="profile-pricelist__list-item">
          <input
            className="profile-pricelist__checkbox"
            type="checkbox"
            name="choice1"
            id="choice1"
          />
          <label
            className="profile-pricelist__label"
            for="choice1"
          >
            Love Story
          </label>
        </li>
        <li className="profile-pricelist__list-item">
          <input
            className="profile-pricelist__checkbox"
            type="checkbox"
            name="choice1"
            id="choice1"
          />
          <label
            className="profile-pricelist__label"
            for="choice1"
          >
            Индивидуальная
          </label>
        </li>
        <li className="profile-pricelist__list-item">
          <input
            className="profile-pricelist__checkbox"
            type="checkbox"
            name="choice1"
            id="choice1"
          />
          <label
            className="profile-pricelist__label"
            for="choice1"
          >
            Семейная
          </label>
        </li>
        <li className="profile-pricelist__list-item">
          <input
            className="profile-pricelist__checkbox"
            type="checkbox"
            name="choice1"
            id="choice1"
          />
          <label
            className="profile-pricelist__label"
            for="choice1"
          >
            Fashion
          </label>
        </li>
        <li className="profile-pricelist__list-item">
          <input
            className="profile-pricelist__checkbox"
            type="checkbox"
            name="choice1"
            id="choice1"
          />
          <label
            className="profile-pricelist__label"
            for="choice1"
          >
            Питомцы
          </label>
        </li>
        <li className="profile-pricelist__list-item">
          <input
            className="profile-pricelist__checkbox"
            type="checkbox"
            name="choice1"
            id="choice1"
          />
          <label
            className="profile-pricelist__label"
            for="choice1"
          >
            Интервью
          </label>
        </li>
        <li className="profile-pricelist__list-item">
          <input
            className="profile-pricelist__checkbox"
            type="checkbox"
            name="choice1"
            id="choice1"
          />
          <label
            className="profile-pricelist__label"
            for="choice1"
          >
            Аэросъёмка
          </label>
        </li>
        <li className="profile-pricelist__list-item">
          <input
            className="profile-pricelist__checkbox"
            type="checkbox"
            name="choice1"
            id="choice1"
          />
          <label
            className="profile-pricelist__label"
            for="choice1"
          >
            Стоковая
          </label>
        </li>
        <li className="profile-pricelist__list-item">
          <input
            className="profile-pricelist__checkbox"
            type="checkbox"
            name="choice1"
            id="choice1"
          />
          <label
            className="profile-pricelist__label"
            for="choice1"
          >
            Клипы
          </label>
        </li>
      </ul>
    </article>
  );
};
