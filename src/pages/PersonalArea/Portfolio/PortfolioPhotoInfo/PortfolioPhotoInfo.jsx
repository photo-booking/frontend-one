import './PortfolioPhotoInfo.css';
import cameraSvg from '../../../../images/worker icon_photo.svg';

export const PortfolioPhotoInfo = () => {

    // тут надо получить инфо с сервера с данными о съемке (название и цена)
    const typeOfPhoto = 'Мисс мира 2024';
    const photoPrice = 'от 10 р'

    return (
        <>
            <div className='photo-info'>
                <div className='photo-info__content'>
                    <div className='photo-info__type-name'>
                        <img className='photo-info__type-name_icon' src={cameraSvg} alt='icon' />
                        <p className='photo-info__type-name_text'>{typeOfPhoto}</p>
                    </div>
                    <p className='photo-info__price'>{photoPrice}</p>
                </div>
            </div>
        </>
    )

}