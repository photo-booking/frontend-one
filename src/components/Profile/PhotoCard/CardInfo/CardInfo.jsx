import cameraSvg from '../../../../images/ph_camera.svg';
import '../CardInfo/CardInfo.css';

export const CardInfoProfile = () => {
  return (
    <div className="photoCardContainerProfile-info">
      <div className="photoCardContainerProfile-info__title-container">
        <div className="photoCardContainerProfile-info__img">
          <img
            src={cameraSvg}
            alt={'camera'}
          />
        </div>
        <div className="photoCardContainerProfile-info__title">Love story</div>
      </div>
      <div className="photoCardContainerProfile-info__title">от 2000₽/час</div>
    </div>
  );
};
