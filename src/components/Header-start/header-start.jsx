import './header-start.css';
import logo from '../../images/Logo-header.svg'

export const HeaderStart = () => {
    return (
        <header className='header-start'>
            <img className='header-start__logo' src={logo}/>
            <div className='header-start__text'>
                <a className='header-start__title'>Найти специалиста</a>
                <a className='header-start__title'>Связаться с нами</a>
            </div>
        </header>
    )
}