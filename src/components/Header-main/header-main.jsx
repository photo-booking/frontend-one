import './header-main.css';
import logo from '../../images/Logo-header.svg'
import { Link, NavLink, useMatch } from 'react-router-dom';

export const HeaderMain = ({ isClient, setIsClient }) => {

    const isCatalog = useMatch('/catalog');
    const isConnectWithUs = useMatch('/');
    const isSignUp = useMatch('/sign-up');
    const isSignIn = useMatch('/sign-in');
    const isResetPassword = useMatch('/reset-password');

    const reload = function () {
        setIsClient(!isClient)
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
                        (
                            <div className='header-main__button'>
                                <Link to='/sign-in' className='header-main__button_signin'>Войти</Link>
                                <Link to='/sign-up' className='header-main__button_signup'>Зарегистрироваться</Link>
                            </div>
                        )
            }

        </header>
    )
}

// В NavLink необходимо указать корректные пути перехода