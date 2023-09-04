import './card.css';
import test from '../../images/avatar-test.jpg'

export const Card = () => {

    return (
        <section className="card">
            <div className='card__portfolio'>
                <img className='card__portfolio_item' src={test}/>
            </div>

            <div className='card__about'>
                <div className='card__about_profile'>
                    <div className='card__about_info'>
                        <p className='card__about_name'>Name Surname</p>
                        <p className='card__about_profession'>Фотограф</p>
                    </div>
                    <div className='card__avatar_box'>
                        <img className='card__avatar' src={test} />
                    </div>
                </div>
                <p className='card__about-me'>Меня зовут Алена и я профессионально вижу и фотографирую даже тех,
                    кто стесняется и говорит, что не фотогеничен🤍 За очень короткое время я создаю пространство,
                    в котором человеку можно быть любым.
                    Помогаю раскрыть индивидуальность через камеру и принять свои лучшие качества.
                    Если хотите получить эстетичные кадры и увидеть себя с новой стороны, буду рада познакомиться лично💌
                </p>
                <p className='card__price'>от 1234₽/час </p>
            </div>
        </section>
    )
}