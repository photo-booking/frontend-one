import './Reviews.css';
import Stars from './Stars/Stars';
import ReviewsCardList from './ReviewsCardList/ReviewsCardList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = props => {
  const { loggedIn, onGetReviews } = props;
  const expertId = useParams().id;
  const [reviews, setReviews] = useState();

  const handleGetReviews = () => {
    setReviews(onGetReviews(expertId));
  };
  useEffect(() => {
    handleGetReviews();
    console.log(reviews);
  }, []);
  return (
    <section className="reviews">
      <h2 className="reviews__title">Отзывы</h2>
      <div className="reviews__content">
        <Stars
          loggedIn={loggedIn}
          // count={reviews.count}
        />
        <ReviewsCardList onGetReviews={onGetReviews} />
      </div>
    </section>
  );
};
