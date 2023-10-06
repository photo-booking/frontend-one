import './FirstScreen.css';
import { Link } from 'react-router-dom';
import { HeaderLanding } from '../../components/HeaderLanding/HeaderLanding';

export const FirstScreen = () => {
    return (
        <section className='first-screen'>
            <HeaderLanding />
            <h1 className='first-screen__title'>Запечатлите лучшие моменты жизни</h1>
            <h2 className='first-screen__subtitle'>Наймите профессиональных фотографов и видеооператоров
для ваших моментов или станьте специалистом, чтобы найти клиентов и упростить свою работу.</h2>
            <div className='first-screen__container-btn'>
                <Link to='/catalog'>
                    <button className='first-screen__btn-find'>Найти специалиста</button>
                </Link>
                <Link to='/sign-up'>
                    <button className='first-screen__btn-stay'>Стать специалистом</button>
                </Link>
            </div>
            <div className='first-screen__scroll'>Скролльте вниз</div>
        </section>
    )
}