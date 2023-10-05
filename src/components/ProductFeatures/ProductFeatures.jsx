import './ProductFeatures.css';
import { FeaturesElement } from '../../components/FeaturesElement/FeaturesElement';
import { Link } from 'react-router-dom';
import baseIcon from '../../images/base-icon.svg';
import privacyIcon from '../../images/privacy-icon.svg';
import rarityIcon from '../../images/rarity-icon.svg';
import reviewsIcon from '../../images/reviews-icon.svg';
import chatIcon from '../../images/chat-icon.svg';
import studioIcon from '../../images/studio-icon.svg';

export const ProductFeatures = () => {
    return (
        <section className='product-features'>
            <h1 className='product-features__title'>Мы заботимся о вас</h1>
            <div className='product-features__list'>
                <FeaturesElement
                img={baseIcon}
                alt="Иконка папок"
                title="Курируемая база"
                text="Предоставляем только профессиональных фотографов и видеооператоров, чтобы вы получили результат, который понравится."
                />
                <FeaturesElement
                img={privacyIcon}
                alt="Иконка замка"
                title="Безопасная сделка"
                text="Безопасная сделка хранит ваши финансы и отправляет их специалисту, только если вам понравился результат."
                />
                <FeaturesElement
                img={rarityIcon}
                alt="Иконка алмаза"
                title="Экзотические кадры"
                text="Отправьте нам заявку и мы подберём специалиста под запрос, если вы не нашли нужного на нашей платформе."
                />
                <FeaturesElement
                img={reviewsIcon}
                alt="Иконка хорошего рейтинга"
                title="Реальные отзывы"
                text="Оставлять отзывы можно только после завершения заказа, так мы исключаем ложные оценки от конкурентов."
                />
                <FeaturesElement
                img={chatIcon}
                alt="Иконка чата"
                title="Собственный чат"
                text="Общение происходит через чат на нашей платформе, чтобы все чувствовали себя комфортно и безопасно."
                />
                <FeaturesElement
                img={studioIcon}
                alt="Иконка пазла"
                title="Партнёрские студии"
                text="Лофт-студии предоставляют место и всё необходимое, чтобы вы могли как можно скорее приступить к съёмке."
                />
            </div>
            <Link to='/sign-up'>
                <button className='product-features__btn'>Зарегистрироваться</button>
            </Link>
        </section>
    )
}
