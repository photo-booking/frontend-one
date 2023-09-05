import './footer.css';
import logo from '../../images/Logo-header.svg';
import logo2 from '../../images/Logo_aligner.png';
import { Link, useMatch } from 'react-router-dom';
import up from '../../images/Button_Back_to_top.svg';

export const Footer = ({ isClient }) => {

    const isSignUp = useMatch('/sign-up');
    const isSignIn = useMatch('/sign-in');

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {((isClient === undefined) && isSignUp) || isSignIn ?
                <div></div> :
                (isSignUp && (isClient !== undefined)) ?
                    (<div className='footer__signUp'>
                        <p className='footer__signUp_text'>Регистрируясь вы соглашаетесь с нашими</p>
                        <p className='footer__signUp_text'>
                            <Link className='footer__signUp_link'>Условиями использования</Link> и <Link className='footer__signUp_link'>Политикой конфиденциальности</Link>
                        </p>
                    </div>) :
                    (<footer className="footer">
                        <Link to='/catalog'><img className='footer__logo' src={logo2} /></Link>
                        <nav className='footer__nav'>
                            <p className='footer__nav_title'>Навигация</p>
                            <ul className='footer__nav_list'>
                                <li><Link to='/' className='footer__nav_item'>Главная страница</Link></li>
                                <li><Link to='/catalog' className='footer__nav_item'>Найти специалиста</Link></li>
                                <li><Link to='/' className='footer__nav_item'>Связаться с нами</Link></li>
                            </ul>
                        </nav>
                        <nav className='footer__nav'>
                            <p className='footer__nav_title'>Медиа</p>
                            <ul className='footer__nav_list'>
                                <li><Link to='https://vk.com/' className='footer__nav_item'>VK</Link></li>
                                <li><Link to='https://web.telegram.org/' className='footer__nav_item'>Telegram</Link></li>
                            </ul>
                        </nav>
                        <div className='footer__privacy'>
                            <Link to='/' className='footer__privacy_link'>Условия использования</Link>
                            <Link to='/' className='footer__privacy_link'>Политика конфиденциальности</Link>
                        </div>
                        <p className='footer__by'>© LensHire. 2023</p>
                        <img src={up} className='footer__up' onClick={scrollUp} />
                    </footer>)
            }
        </>
    )
}