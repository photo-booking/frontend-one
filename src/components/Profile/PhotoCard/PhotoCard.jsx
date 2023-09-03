import './PhotoCard.css';
import cameraSvg from '../../../images/ph_camera.svg';
export const PhotoCard = props => {
  return (
    <div
      className={'photoCardContainer'}
      onClick={() => console.log('click')}
    >
      <img
        className={'photoCardContainer__card'}
        src={props.src}
        alt={props.alt}
      />
      <div className="photoCardContainer__info">
        <div className="photoCardContainer__info__title-container">
          <div className="photoCardContainer__info__img">
            <img
              src={cameraSvg}
              alt={'camera'}
            />
          </div>
          <div className="photoCardContainer__info__title">Love story</div>
        </div>
        <div className="photoCardContainer__info__title">от 2000₽/час</div>
      </div>
    </div>
  );
};
