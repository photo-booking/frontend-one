import './header-main.css';
import logo from '../../images/Logo-header.svg';
import { Link, NavLink, useMatch, useNavigate } from 'react-router-dom';
import test from '../../images/avatar-test.jpg';
import { useState, useContext } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';

export const HeaderMain = ({ isClient, setIsClient, loggedIn, signOut }) => {
    const navigate = useNavigate();
    const currentUser = useContext(CurrentUserContext);
    const isCatalog = useMatch('/catalog');
    const isConnectWithUs = useMatch('/');
    const isSignUp = useMatch('/sign-up');
    const isSignIn = useMatch('/sign-in');
    const isResetPassword = useMatch('/reset-password');

    const [isAvatarClick, setisAvatarClick] = useState(false);
    const profilePhoto =
        currentUser.profile_photo === undefined || currentUser.profile_photo === null
            ? test
            : currentUser.profile_photo;
    const reload = function () {
        setIsClient(!isClient);
    };

    const onAvatarClick = function (event) {
        event.preventDefault();
        setisAvatarClick(!isAvatarClick);
    };

    const onLogoutClick = function () {
        signOut();
        setisAvatarClick(false);
    };

  
    const secondName = currentUser.last_name;
    const secondNameLetter = secondName?.substr(0, 1).toUpperCase();

    // const navigateToProfile = (id) => {
    //     setisAvatarClick(false);
    //     isClient ? navigate(`/client/${id}`) : navigate(`/expert/${id}`);
    // };
    const navigateToProfile = (id) => {
        setisAvatarClick(false);
        navigate(`/personal/${id}`);
    };
    return (
        <header
            className={isSignIn || isResetPassword || isSignUp ? 'header-main' : 'header-main_border'}
        >
            <Link
                to="/catalog"
                className="header-main__logo_container"
            >
                <img
                    className="header-main__logo"
                    src={logo}
                    alt=''
                />
            </Link>
            <div className="header-main__text">
                <NavLink
                    to="/catalog"
                    className="header-main__title"
                >
                    <div className={isCatalog ? 'header-main__marker_active' : 'header-main__marker'}></div>
                    Найти специалиста
                </NavLink>
                <NavLink
                    to="/"
                    className="header-main__title"
                >
                    <div
                        className={isConnectWithUs ? 'header-main__marker_active' : 'header-main__marker'}
                    ></div>
                    Связаться с нами
                </NavLink>
            </div>

            {isSignIn || isResetPassword || (isSignUp && isClient === undefined) ? (
                <div></div>
            ) : isSignUp && isClient ? (
                <div className="header-main__subtitle">
                    <p className="header-main__find">Хотите найти работу?</p>
                    <a
                        href="#"
                        className="header-main__reg"
                        onClick={reload}
                    >
                        Зарегистрироваться как специалист
                    </a>
                </div>
            ) : isSignUp && !isClient ? (
                <div className="header-main__subtitle">
                    <p className="header-main__find">Хотите найти специалиста?</p>
                    <a
                        href="#"
                        className="header-main__reg"
                        onClick={reload}
                    >
                        Зарегистрироваться как клиент
                    </a>
                </div>
            ) : loggedIn ? (
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
             ) : (
                <div className="header-main__button">
                    <Link
                        to="/sign-in"
                        className="header-main__button_signin"
                    >
                        Войти
                    </Link>
                    <Link
                        to="/sign-up"
                        className="header-main__button_signup"
                    >
                        Зарегистрироваться
                    </Link>
                </div>
            )}  
        </header>
    );
};

// В NavLink необходимо указать корректные пути перехода
