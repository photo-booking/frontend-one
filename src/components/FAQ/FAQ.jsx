import { useState } from 'react';
import './FAQ.css';
import { BtnFAQ } from '../../components/BtnFAQ/BtnFAQ';

export const FAQ = () => {
    const [visibleAnswer, setVisibleAnswer] = useState(false);

    const changeVesibleAnswer = () => {
        setVisibleAnswer(!visibleAnswer);
    }

    return (
        <section className='faq'>
            <div className='faq__container'>
                <h1 className='faq__title'>Зачем мне нужен профессиональный фотограф или видеооператор?</h1>
                <ul className='faq__list'>
                    <li className='faq__question'>В чем преимущества профессионалов?
                        <BtnFAQ visibleAnswer={visibleAnswer} changeVesibleAnswer={changeVesibleAnswer} id='1'/>
                    </li>
                    {visibleAnswer && <li className='faq__answer'>Опыт, мастерство, высокое качество оборудования и индивидуальный подход к каждому клиенту.</li>}
                    <li className='faq__question'>Как выбрать подходящего специалиста?
                        <BtnFAQ visibleAnswer={visibleAnswer} changeVesibleAnswer={changeVesibleAnswer} id='2'/>
                    </li>
                    {visibleAnswer && <li className='faq__answer'>Исследуйте портфолио и отзывы предыдущих клиентов. Важно, чтобы
                        их стиль соответствовал вашим предпочтениям. С важными
                        событиями, такими как свадьба, важно также провести встречу, чтобы
                        обсудить детали и узнать друг о друге.
                    </li>}
                    <li className='faq__question'>Что включает типичный пакет услуг?
                        <BtnFAQ visibleAnswer={visibleAnswer} changeVesibleAnswer={changeVesibleAnswer} id='3'/>
                    </li>
                    {visibleAnswer && <li className='faq__answer'>Съемка, обработка, предоставление готовых материалов и, возможно, дополнительные услуги по желанию клиента.</li>}
                    <li className='faq__question'>Разница между фотографом и видеооператором
                        <BtnFAQ visibleAnswer={visibleAnswer} changeVesibleAnswer={changeVesibleAnswer} id='4'/>
                    </li>
                    {visibleAnswer && <li className='faq__answer'>Фотограф делает статичные снимки, а видеооператор снимает движущиеся изображения.</li>}
                    <li className='faq__question'>Могу ли я говорить о своих идеях и пожеланиях?
                        <BtnFAQ visibleAnswer={visibleAnswer} changeVesibleAnswer={changeVesibleAnswer} id='5'/>
                    </li>
                    {visibleAnswer && <li className='faq__answer'>Конечно! Ваши идеи и пожелания помогут создать идеальный результат.</li>}
                    <li className='faq__question'>Как долго занимает обработка и монтаж?
                        <BtnFAQ visibleAnswer={visibleAnswer} changeVesibleAnswer={changeVesibleAnswer} id='6'/>
                    </li>
                    {visibleAnswer && <li className='faq__answer'>В зависимости от объема работы, это может занять от нескольких дней до нескольких недель.</li>}
                    <li className='faq__question'>Могу ли я получить исходный файлы после съемки?
                        <BtnFAQ visibleAnswer={visibleAnswer} changeVesibleAnswer={changeVesibleAnswer} id='7'/>
                    </li>
                    {visibleAnswer && <li className='faq__answer'>Обычно да, но уточните это заранее с вашим специалистом.</li>}
                    <li className='faq__question'>Что делать, есть мне не понравился результат?
                        <BtnFAQ visibleAnswer={visibleAnswer} changeVesibleAnswer={changeVesibleAnswer} id='8'/>
                    </li>
                    {visibleAnswer && <li className='faq__answer'>Обсудите свои замечания со специалистом, чтобы найти решение и улучшить результат.
                        Сообщить нам и мы придем на помощь.
                    </li>}
                </ul>
            </div>
        </section>
    )
}