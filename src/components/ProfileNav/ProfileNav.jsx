import './ProfileNav.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const ProfileNav = props => {
  const { isClient } = props;

  const navLinkClassName = ({ isActive }) => `profile-nav__link ${isActive ? 'profile-nav__link_active' : ''}`;
  return (
    <nav className='profile-nav'>
      <ul className='profile-nav__list'>
        <li className='profile-nav__item'>
          <NavLink
            to="#"
            className={navLinkClassName}
          >
            Профиль
          </NavLink>
        </li>
        <li className='profile-nav__item'>
          <NavLink
            to="#"
            className={navLinkClassName}
          >
            Настройки
          </NavLink>
        </li>
        <li className='profile-nav__item'>
          <NavLink
            to="#"
            className={navLinkClassName}
          >
            Заказы
          </NavLink>
        </li>
        {!isClient ? (
          <li className='profile-nav__item'>
            <NavLink
              to="#"
              className={navLinkClassName}
            >
              Отзывы
            </NavLink>
          </li>
        ) : (
          <></>
        )}
      </ul>
    </nav>
  );
};
