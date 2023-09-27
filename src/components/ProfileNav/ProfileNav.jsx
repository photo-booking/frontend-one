import './ProfileNav.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const ProfileNav = props => {
  const { isClient } = props;
  const [profile, setProfile] = React.useState(false);
  const [settings, setSettings] = React.useState(false);
  const [orders, setOrders] = React.useState(false);
  const [review, setReview] = React.useState(false);

  const navLinkClassName = param => {
    return `profile-nav__link ${param ? 'profile-nav__link_active' : ''}`;
  };
  return (
    <>
      <nav className="profile-nav">
        <ul className="profile-nav__list">
          <li className="profile-nav__item">
            <NavLink
              to="#"
              className={navLinkClassName(profile)}
              onClick={() => {
                setProfile(true);
                setSettings(false);
                setOrders(false);
                setReview(false);
              }}
            >
              Профиль
            </NavLink>
          </li>
          <li className="profile-nav__item">
            <NavLink
              to="#"
              className={navLinkClassName(settings)}
              onClick={() => {
                setProfile(false);
                setSettings(true);
                setOrders(false);
                setReview(false);
              }}
            >
              Настройки
            </NavLink>
          </li>
          <li className="profile-nav__item">
            <NavLink
              to="#"
              className={navLinkClassName(orders)}
              onClick={() => {
                setProfile(false);
                setSettings(false);
                setOrders(true);
                setReview(false);
              }}
            >
              Заказы
            </NavLink>
          </li>
          {!isClient ? (
            <li className="profile-nav__item">
              <NavLink
                to="#"
                className={navLinkClassName(review)}
                onClick={() => {
                  setProfile(false);
                  setSettings(false);
                  setOrders(false);
                  setReview(true);
                }}
              >
                Отзывы
              </NavLink>
            </li>
          ) : (
            <></>
          )}
        </ul>
      </nav>
      {/* для Профиля  */}
      {profile ? (
        <nav>
          <ul>
            <li>
              <NavLink>Личная информация</NavLink>
            </li>
            <li>
              <NavLink>Контакты</NavLink>
            </li>
            <li>
              <NavLink>Портфолио</NavLink>
            </li>
            <li>
              <NavLink>Прайс-лист</NavLink>
            </li>
          </ul>
        </nav>
      ) : (
        <></>
      )}
      {/* для Настроек  */}
      {settings ? (
        <nav>
          <ul>
            <li>
              <NavLink>Пароль</NavLink>
            </li>
            <li>
              <NavLink>Уведомления</NavLink>
            </li>
            <li>
              <NavLink>Премиум подписка</NavLink>
            </li>
            <li>
              <NavLink>Удалить аккаунт</NavLink>
            </li>
          </ul>
        </nav>
      ) : (
        <></>
      )}
      {/* для Заказов  */}
      {orders ? (
        <nav>
          <ul>
            <li>
              <NavLink>Заказ 1</NavLink>
            </li>
            <li>
              <NavLink>Заказ 2</NavLink>
            </li>
            <li>
              <NavLink>Заказ 3</NavLink>
            </li>
            <li>
              <NavLink>Заказ 4</NavLink>
            </li>
          </ul>
        </nav>
      ) : (
        <></>
      )}
      {/* для Отзывов  */}
      {review ? (
        <nav>
          <ul>
            <li>
              <NavLink>Отзыв 1</NavLink>
            </li>
            <li>
              <NavLink>Отзыв 2</NavLink>
            </li>
            <li>
              <NavLink>Отзыв 3</NavLink>
            </li>
            <li>
              <NavLink>Отзыв 4</NavLink>
            </li>
          </ul>
        </nav>
      ) : (
        <></>
      )}
    </>
  );
};
