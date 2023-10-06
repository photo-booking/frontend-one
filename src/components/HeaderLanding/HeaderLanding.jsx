import './HeaderLanding.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/Logo-header.svg';

export const HeaderLanding = () => {
    return (
        <header className='header-landing'>
                <Link to='/catalog' className='header-landing__logo'>
                    <img className='header-landing__logo' src={logo} alt='Логотип' />
                </Link>
                <nav className='header-landing__link-container'>
                    <NavLink to="/catalog" className='header-landing__link'>Найти специалиста</NavLink>
                    <NavLink to="/" className='header-landing__link'>Связаться с нами</NavLink>
                </nav>
                <div className='header-landing__btn-container'>
                    <Link to='/sign-in' className='header-landing__btn-signin'>
                        <button className='header-landing__btn-signin' type="button">Войти</button>
                    </Link>
                    <Link to='/sign-up' className='header-landing__btn-signup'>
                        <button className='header-landing__btn-signup' type="button">Зарегистрироваться</button>
                    </Link>
                </div>
        </header>
    )
}