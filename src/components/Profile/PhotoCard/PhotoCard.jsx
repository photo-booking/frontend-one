import './PhotoCard.css';
import { CardInfoProfile } from './CardInfo/CardInfo';
export const PhotoCard = props => {
  return (
    <div
      className={'photoCardContainerProfile'}
      onClick={props.onOpenImg}
    >
      <img
        id={props.id}
        className={'photoCardContainerProfile__card'}
        src={props.src}
        alt={props.alt}
      />
      <CardInfoProfile />
    </div>
  );
};
