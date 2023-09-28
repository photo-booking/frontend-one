import './ProfileNav.css';
import React from 'react';
import { Contacts } from '../../pages/PersonalArea/Contacts/Contacts';
import { DeleteAccount } from '../../pages/PersonalArea/DeleteAccount/DeleteAccount';
import { Notice } from '../../pages/PersonalArea/Notice/Notice';
import { Password } from '../../pages/PersonalArea/Password/Password';
import { PersonalInfo } from '../../pages/PersonalArea/PersonalInfo/PersonalInfo';
import { Portfolio } from '../../pages/PersonalArea/Portfolio/Portfolio';
import { PriceList } from '../../pages/PersonalArea/PriceList/PriceList';
import { VipSubscription } from '../../pages/PersonalArea/VipSubscription/VipSubscription';

export const ProfileNav = props => {
  const { isClient } = props;

  //   Верхняя навигация
  const [profile, setProfile] = React.useState(false);
  const [settings, setSettings] = React.useState(false);
  const [orders, setOrders] = React.useState(false);
  const [review, setReview] = React.useState(false);

  //   Боковая навигация - Профиль
  const [personalInfo, setPersonalInfo] = React.useState(false);
  const [contacts, setContacts] = React.useState(false);
  const [portfolio, setPortfolio] = React.useState(false);
  const [priceList, setPriceList] = React.useState(false);

  //   Боковая навигация - Настройки
  const [password, setPassword] = React.useState(false);
  const [notice, setNotice] = React.useState(false);
  const [vipSubscription, setVipSubscription] = React.useState(false);
  const [deleteAccount, setdeleteAccount] = React.useState(false);

  //   Боковая навигация - Заказы

  //   Боковая навигация - Отзывы

  const buttonClassName = param => {
    return `profile-nav__btn ${param ? 'profile-nav__btn_active' : ''}`;
  };
  const sideNavButtonClassName = param => {
    return `profile-nave__side-nav-btn ${param ? 'profile-nave__side-nav-btn_active' : ''}`;
  };
  return (
    <section className="profile-nav">
      {/* Верхняя навигация  */}
      <nav className="profile-nav__container">
        <ul className="profile-nav__list">
          <li className="profile-nav__item">
            <button
              className={buttonClassName(profile)}
              onClick={() => {
                setProfile(true);
                setSettings(false);
                setOrders(false);
                setReview(false);
              }}
            >
              Профиль
            </button>
          </li>
          <li className="profile-nav__item">
            <button
              className={buttonClassName(settings)}
              onClick={() => {
                setProfile(false);
                setSettings(true);
                setOrders(false);
                setReview(false);
              }}
            >
              Настройки
            </button>
          </li>
          <li className="profile-nav__item">
            <button
              className={buttonClassName(orders)}
              onClick={() => {
                setProfile(false);
                setSettings(false);
                setOrders(true);
                setReview(false);
              }}
            >
              Заказы
            </button>
          </li>
          {!isClient ? (
            <li className="profile-nav__item">
              <button
                className={buttonClassName(review)}
                onClick={() => {
                  setProfile(false);
                  setSettings(false);
                  setOrders(false);
                  setReview(true);
                }}
              >
                Отзывы
              </button>
            </li>
          ) : (
            <></>
          )}
        </ul>
      </nav>
      <section className="profile-nav__content">
        {/* для Профиля  */}
        {profile ? (
          <nav className="profile-nav__side-nav">
            <ul className="profile-nav__list profile-nav__list_column">
              <li className="profile-nav__side-item">
                <button
                  className={sideNavButtonClassName(personalInfo)}
                  onClick={() => {
                    setPersonalInfo(true);
                    setContacts(false);
                    setPortfolio(false);
                    setPriceList(false);
                  }}
                >
                  Личная информация
                </button>
              </li>
              <li className="profile-nav__side-item">
                <button
                  className={sideNavButtonClassName(contacts)}
                  onClick={() => {
                    setPersonalInfo(false);
                    setContacts(true);
                    setPortfolio(false);
                    setPriceList(false);
                  }}
                >
                  Контакты
                </button>
              </li>
              <li className="profile-nav__side-item">
                <button
                  className={sideNavButtonClassName(portfolio)}
                  onClick={() => {
                    setPersonalInfo(false);
                    setContacts(false);
                    setPortfolio(true);
                    setPriceList(false);
                  }}
                >
                  Портфолио
                </button>
              </li>
              <li className="profile-nav__side-item">
                <button
                  className={sideNavButtonClassName(priceList)}
                  onClick={() => {
                    setPersonalInfo(false);
                    setContacts(false);
                    setPortfolio(false);
                    setPriceList(true);
                  }}
                >
                  Прайс-лист
                </button>
              </li>
            </ul>
          </nav>
        ) : (
          <></>
        )}
        {/* для Настроек  */}
        {settings ? (
          <nav className="profile-nav__side-nav">
            <ul className="profile-nav__list profile-nav__list_column">
              <li className="profile-nav__side-item">
                <button
                  className={sideNavButtonClassName(password)}
                  onClick={() => {
                    setPassword(true);
                    setNotice(false);
                    setVipSubscription(false);
                    setdeleteAccount(false);
                  }}
                >
                  Пароль
                </button>
              </li>
              <li className="profile-nav__side-item">
                <button
                  className={sideNavButtonClassName(notice)}
                  onClick={() => {
                    setPassword(false);
                    setNotice(true);
                    setVipSubscription(false);
                    setdeleteAccount(false);
                  }}
                >
                  Уведомления
                </button>
              </li>
              <li className="profile-nav__side-item">
                <button
                  className={sideNavButtonClassName(vipSubscription)}
                  onClick={() => {
                    setPassword(false);
                    setNotice(false);
                    setVipSubscription(true);
                    setdeleteAccount(false);
                  }}
                >
                  Премиум подписка
                </button>
              </li>
              <li className="profile-nav__side-item">
                <button
                  className={sideNavButtonClassName(deleteAccount)}
                  onClick={() => {
                    setPassword(false);
                    setNotice(false);
                    setVipSubscription(false);
                    setdeleteAccount(true);
                  }}
                >
                  Удалить аккаунт
                </button>
              </li>
            </ul>
          </nav>
        ) : (
          <></>
        )}
        {/* для Заказов  пока нет макета не понятно что отображать мб цикл по заказам???*/}
        {orders ? (
          <nav className="profile-nav__side-nav">
            <ul className="profile-nav__list profile-nav__list_column">
              <li className="profile-nav__side-item">
                <button>Заказ 1</button>
              </li>
              <li className="profile-nav__side-item">
                <button>Заказ 2</button>
              </li>
              <li className="profile-nav__side-item">
                <button>Заказ 3</button>
              </li>
              <li className="profile-nav__side-item">
                <button>Заказ 4</button>
              </li>
            </ul>
          </nav>
        ) : (
          <></>
        )}
        {/* для Отзывов пока нет макета не понятно что отображать мб цикл по отзывам??? */}
        {review ? (
          <nav className="profile-nav__side-nav">
            <ul className="profile-nav__list profile-nav__list_column">
              <li className="profile-nav__side-item">
                <button>Отзыв 1</button>
              </li>
              <li className="profile-nav__side-item">
                <button>Отзыв 2</button>
              </li>
              <li className="profile-nav__side-item">
                <button>Отзыв 3</button>
              </li>
              <li className="profile-nav__side-item">
                <button>Отзыв 4</button>
              </li>
            </ul>
          </nav>
        ) : (
          <></>
        )}
        {/* Отображение компонентов - Профиль*/}
        {profile && personalInfo ? <PersonalInfo /> : <></>}
        {profile && contacts ? <Contacts /> : <></>}
        {profile && portfolio ? <Portfolio /> : <></>}
        {profile && priceList ? <PriceList /> : <></>}
        {/* Отображение компонентов - Настройки*/}
        {settings && password ? <Password /> : <></>}
        {settings && notice ? <Notice /> : <></>}
        {settings && vipSubscription ? <VipSubscription /> : <></>}
        {settings && deleteAccount ? <DeleteAccount /> : <></>}
      </section>
    </section>
  );
};
