import './header-registration.css';
import logo from '../../images/Logo-header.svg'

export const HeaderRegistration = () => {
    return (
        <header className='header-registration'>
            <div className='header-registration__logo_container'>
                <img className='header-registration__logo' src={logo} />
            </div>
            <div className='header-registration__text'>
                <a className='header-registration__title'>Найти специалиста</a>
                <a className='header-registration__title'>Связаться с нами</a>
            </div>
            <div className='header-registration__subtitle'>
                <p className='header-registration__find-expert'>Хотите найти специалиста?</p>
                <a className='header-registration__reg-client'>Зарегистрироваться как клиент</a>
            </div>

        </header>
    )
}