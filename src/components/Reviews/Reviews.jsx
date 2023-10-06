import './Reviews.css';
import Stars from './Stars/Stars';
import ReviewsCardList from './ReviewsCardList/ReviewsCardList';

export const Reviews = () => {
  return (
    <section className="reviews">
      <h2 className="reviews__title">Отзывы</h2>
      <div className="reviews__content">
        <Stars />
        <ReviewsCardList />
      </div>
    </section>
  );
};