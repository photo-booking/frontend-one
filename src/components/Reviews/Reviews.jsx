import './Reviews.css';
import Stars from './Stars/Stars';
import ReviewsCardList from './ReviewsCardList/ReviewsCardList';

export const Reviews = (props) => {
  const {loggedIn} = props;
  return (
    <section className="reviews">
      <h2 className="reviews__title">Отзывы</h2>
      <div className="reviews__content">
        {loggedIn ? <Stars /> : <></>}
        <ReviewsCardList />
      </div>
    </section>
  );
};