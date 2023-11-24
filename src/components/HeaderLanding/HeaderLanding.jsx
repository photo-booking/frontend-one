import './HeaderLanding.css';
import '../Header-main/header-main.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../images/Logo-header.svg';
import { useState, useContext } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
import test from '../../images/avatar-test.jpg';

export const HeaderLanding = (props) => {
  const { loggedIn, signOut } = props;
  const navigate = useNavigate();
  const currentUser = useContext(CurrentUserContext);
  const secondName = currentUser.last_name;
  const secondNameLetter = secondName?.substr(0, 1).toUpperCase();
  const [isAvatarClick, setisAvatarClick] = useState(false);
  const profilePhoto =
    currentUser.profile_photo === undefined || currentUser.profile_photo === null
      ? test
      : currentUser.profile_photo;

  const onAvatarClick = function (event) {
    event.preventDefault();
    setisAvatarClick(!isAvatarClick);
  };

  const navigateToProfile = (id) => {
    setisAvatarClick(false);
    navigate(`/personal/${id}`);
  };

  const onLogoutClick = function () {
    signOut();
    setisAvatarClick(false);
  };

  return (
    <header className="header-landing">
      <Link
        to="/"
        className="header-landing__logo"
      >
        <img
          className="header-landing__logo"
          src={logo}
          alt="Логотип"
        />
      </Link>
      <nav className="header-landing__link-container">
        <NavLink
          to="/catalog"
          className="header-landing__link"
        >
          Найти специалиста
        </NavLink>
        <NavLink
          to="/"
          className="header-landing__link"
        >
          Связаться с нами
        </NavLink>
      </nav>
      <div className="header-landing__btn-container">
        {!loggedIn ?
          <><Link
            to="/sign-in"
            className="header-landing__btn-signin"
          >
            <button
              className="header-landing__btn-signin"
              type="button"
            >
              Войти
            </button>
          </Link>
            <Link
              to="/sign-up"
              className="header-landing__btn-signup"
            >
              <button
                className="header-landing__btn-signup"
                type="button"
              >
                Зарегистрироваться
              </button>
            </Link></>
          : <>
            <div className="header-main__logged-in">
              <div className="header-main__logged-in_container">

                <p className="header-main__name">{currentUser.first_name} {secondNameLetter}.</p>
                <div className="header-main__avatar_container">
                  <div className="header-main__avatar_box" onClick={onAvatarClick}>
                    <img
                      className="header-main__avatar"
                      src={profilePhoto}
                      alt=""
                    />

                    <div
                      className={
                        !isAvatarClick
                          ? 'header-main__popup'
                          : 'header-main__popup header-main__popup_visible'
                      }
                    >
                      <button
                        className="header-main__popup_link header-main__popup_profile"
                        onClick={() => navigateToProfile(currentUser.id)}
                      >
                        Профиль
                      </button>
                      <Link
                        className="header-main__popup_link header-main__popup_logout"
                        onClick={onLogoutClick}
                      >
                        Выйти
                      </Link>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </>
        }
      </div>
    </header>
  );
};
