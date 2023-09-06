import { useNavigate } from 'react-router-dom'
import './card.css';
import test from '../../images/avatar-test.jpg'

export const Card = ({user}) => {

    const navigate = useNavigate();
    const navigateProfile = (event) => {
      navigate('/card/1');
    };


    return (
        <section className="card" onClick={navigateProfile}>
            <div className='card__portfolio'>
                <img className='card__portfolio_item' src={user.portfolio}/>
            </div>

            <div className='card__about'>
                <div className='card__about_profile'>
                    <div className='card__about_info'>
                        <p className='card__about_name'>{user.name}</p>
                        <p className='card__about_profession'>{user.profession}</p>
                    </div>
                    <div className='card__avatar_box'>
                        <img className='card__avatar' src={user.avatar} />
                    </div>
                </div>
                <p className='card__about-me'>{user.about}</p>
                <p className='card__price'>от {user.price}₽/час </p>
            </div>
        </section>
    )
}