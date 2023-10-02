import './ExpertCard.css';
import expertPhoto from '../../images/ExpertPhoto.png';
import expertAvatar from '../../images/ExpertAvatar.png';

export const ExpertCard = () => {
    return (
        <div className='expert-card'>
            <img className='expert-card__img' src={expertPhoto} alt='Пример работы фотографа' />
            <div className='expert-card__container'>
                <div className='expert-card__about'>
                    <div className='expert-card__text-part'>
                        <h1 className='expert-card__name'>Алена Коновалова</h1>
                        <p className='expert-card__position'>Фотограф, видеооператор</p>
                    </div>
                    <img className='expert-card__avatar' src={expertAvatar} alt='Аватар специалиста' />
                </div>
                <div className='expert-card__work-type'>
                    <span className='expert-card__work-position'>Свадебная</span>
                    <span className='expert-card__work-position'>Love Story</span>
                    <span className='expert-card__work-position'>Индивидуальная</span>
                    <span className='expert-card__work-position'>Аэросъемка</span>
                    <span className='expert-card__work-position'>Для стока</span>
                </div>
                <div className='expert-card__check'>
                    <div className='expert-card__amount'>от 2500₽/час</div>
                    <div className='expert-card__grade'>
                        <span className='expert-card__grade-rating'>4.78</span>
                        <span className='expert-card__grade-count'>(137)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}