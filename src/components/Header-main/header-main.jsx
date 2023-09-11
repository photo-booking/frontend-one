import './header-main.css';
import logo from '../../images/Logo-header.svg'
import { Link, NavLink, useMatch } from 'react-router-dom';
import test from '../../images/avatar-test.jpg';
import popup from '../../images/Background.svg'
import { useEffect, useState } from 'react';

export const HeaderMain = ({ isClient, setIsClient, loggedIn, signOut }) => {

    const isCatalog = useMatch('/catalog');
    const isConnectWithUs = useMatch('/');
    const isSignUp = useMatch('/sign-up');
    const isSignIn = useMatch('/sign-in');
    const isResetPassword = useMatch('/reset-password');

    const [isAvatarClick, setisAvatarClick] = useState(false);

    const reload = function () {
        setIsClient(!isClient)
    }



    const onAvatarClick = function (event) {
        event.preventDefault();
        setisAvatarClick(!isAvatarClick)
    }

    const onLogoutClick = function () {
        setisAvatarClick(false);
        signOut();
    }

    return (
        <header className={(isSignIn || isResetPassword || isSignUp) ? 'header-main' : 'header-main_border'}>
            <Link to='/catalog' className='header-main__logo_container'>
                <img className='header-main__logo' src={logo} />
            </Link>
            <div className='header-main__text'>
                <NavLink to='/catalog' className='header-main__title'>
                    <div className={isCatalog ? 'header-main__marker_active' : 'header-main__marker'}></div>
                    Найти специалиста
                </NavLink>
                <NavLink to='/' className='header-main__title'>
                    <div className={isConnectWithUs ? 'header-main__marker_active' : 'header-main__marker'}></div>
                    Связаться с нами
                </NavLink>
            </div>

            {(isSignIn || isResetPassword || (isSignUp && isClient === undefined)) ?
                (<div></div>) :
                (isSignUp && isClient) ?
                    (<div className='header-main__subtitle'>
                        <p className='header-main__find'>Хотите найти работу?</p>
                        <a href='#' className='header-main__reg' onClick={reload}>Зарегистрироваться как специалист</a>
                    </div>) :
                    (isSignUp && !isClient) ?
                        (<div className='header-main__subtitle'>
                            <p className='header-main__find'>Хотите найти специалиста?</p>
                            <a href='#' className='header-main__reg' onClick={reload}>Зарегистрироваться как клиент</a>
                        </div>) :
                        loggedIn ?
                        (<div className='header-main__logged-in'>
                            <div className='header-main__logged-in_container'>
                                <div className='header-main__user-info'>
                                    <p className='header-main__name'>User name</p>
                                    <div className='header-main__avatar_box' onClick={onAvatarClick}>
                                        <img className='header-main__avatar' src={test} />
                                    </div>
                                </div>

                                <div className={!isAvatarClick ? 'header-main__popup':  'header-main__popup header-main__popup_visible'} >
                                    <Link className='header-main__popup_link header-main__popup_profile' to='/profile'>Профиль</Link>
                                    <Link className='header-main__popup_link header-main__popup_logout' onClick={onLogoutClick}>Выйти</Link>
                                </div>
                            </div>
                        </div>)
                :
                    (<div className='header-main__button'>
                        <Link to='/sign-in' className='header-main__button_signin'>Войти</Link>
                        <Link to='/sign-up' className='header-main__button_signup'>Зарегистрироваться</Link>
                    </div>)
            }

        </header>
    )
}

// В NavLink необходимо указать корректные пути перехода