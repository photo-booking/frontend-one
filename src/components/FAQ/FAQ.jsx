import './FAQ.css';

export const FAQ = () => {
    return (
        <section className='faq'>
            <div className='faq__container'>
                <h1 className='faq__title'>Зачем мне нужен профессиональный фотограф или видеооператор?</h1>
                <ul className='faq__list'>
                    <li className='faq__question'>В чем преимущества профессионалов?
                        <button className='faq__btn' type='button'/>
                    </li>
                    <li className='faq__answer'>Опыт, мастерство, высокое качество оборудования и индивидуальный подход к каждому клиенту.</li>
                    <li className='faq__question'>Как выбрать подходящего специалиста?
                        <button className='faq__btn' type='button'/>
                    </li>
                    <li className='faq__answer'>Исследуйте портфолио и отзывы предыдущих клиентов. Важно, чтобы
                        их стиль соответствовал вашим предпочтениям. С важными
                        событиями, такими как свадьба, важно также провести встречу, чтобы
                        обсудить детали и узнать друг о друге.
                    </li>
                    <li className='faq__question'>Что включает типичный пакет услуг?
                        <button className='faq__btn' type='button'/>
                    </li>
                    <li className='faq__answer'>Съемка, обработка, предоставление готовых материалов и, возможно, дополнительные услуги по желанию клиента.</li>
                    <li className='faq__question'>Разница между фотографом и видеооператором
                        <button className='faq__btn' type='button'/>
                    </li>
                    <li className='faq__answer'>Фотограф делает статичные снимки, а видеооператор снимает движущиеся изображения.</li>
                    <li className='faq__question'>Могу ли я говорить о своих идеях и пожеланиях?
                        <button className='faq__btn' type='button'/>
                    </li>
                    <li className='faq__answer'>Конечно! Ваши идеи и пожелания помогут создать идеальный результат.</li>
                    <li className='faq__question'>Как долго занимает обработка и монтаж?
                        <button className='faq__btn' type='button'/>
                    </li>
                    <li className='faq__answer'>В зависимости от объема работы, это может занять от нескольких дней до нескольких недель.</li>
                    <li className='faq__question'>Могу ли я получить исходный файлы после съемки?
                        <button className='faq__btn' type='button'/>
                    </li>
                    <li className='faq__answer'>Обычно да, но уточните это заранее с вашим специалистом.</li>
                    <li className='faq__question'>Что делать, есть мне не понравился результат?
                        <button className='faq__btn' type='button'/>
                    </li>
                    <li className='faq__answer'>Обсудите свои замечания со специалистом, чтобы найти решение и улучшить результат.
                        Сообщить нам и мы придем на помощь.
                    </li>
                </ul>
            </div>
        </section>
    )
}