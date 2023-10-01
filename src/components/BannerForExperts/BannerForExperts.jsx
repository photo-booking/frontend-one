import './BannerForExperts.css';

export const BannerForExperts = () => {
    return (
        <section className='banner-for-experts'>
            <div className='banner-for-experts__text-block'>
                <h1 className='banner-for-experts__title'>Находите заказы. Работайте комфортно.</h1>
                <h2 className='banner-for-experts__subtitle'>Фотографам и видеооператорам доступна доска заказов, где можно найти новых клиентов.</h2>
                <button className='banner-for-experts__btn'>Стать специалистом</button>
            </div>
            <div className='banner-for-experts__frame-block'>
                <div className='banner-for-experts__chart'>
                    <span className='banner-for-experts__chart-text'>Заработано за неделю</span>
                    <span className='banner-for-experts__chart-count'>15 000</span>
                </div>
                <div className='banner-for-experts__statistics'>
                    <span className='banner-for-experts__statistics-signature'>всего заработано</span>
                    <span className='banner-for-experts__statistics-count'>174 800</span>
                    <span className='banner-for-experts__statistics-text'>рублей</span>
                    <div className='banner-for-experts__statistics-percent-container'>
                        <div className='banner-for-experts__statistics-percent-decor'></div>
                        <span className='banner-for-experts__statistics-percent-count'>37%</span>
                        <span className='banner-for-experts__statistics-percent-text'>за последний месяц</span>
                    </div>
                </div>
            </div>
        </section>
    )
}