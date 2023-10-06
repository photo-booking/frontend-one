import './ReviewsCard.css';
import image from '../../../images/reviews-photo.png';
import { FaStar } from 'react-icons/fa';

const ReviewsCard = () => {
  return (
    <li className="reviewsCard">
      <h3 className="reviewsCard__title">Мария Д.</h3>
      <p className="reviewsCard__date">24 августа 2023</p>
      <div className="reviewsCard__stars">
        {
        [...Array(5)].map(star => {
            return <FaStar size={20} />;
          })
        }
      </div>

      <img
        className="reviewsCard__photo"
        src={image}
        alt="фото ревьюера"
      />

      <p className="reviewsCard__about">
        Отличный фотограф! Фотографии получились просто великолепными. Рекомендую всем, кто ищет
        профессионального фотографа для своей свадьбы.
      </p>
    </li>
  );
};

export default ReviewsCard;
