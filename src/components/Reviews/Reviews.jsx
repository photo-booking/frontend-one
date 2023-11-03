import './Reviews.css';
import Stars from './Stars/Stars';
import ReviewsCardList from './ReviewsCardList/ReviewsCardList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = props => {
  const { loggedIn, onGetReviews, reviews } = props;
  const expertId = useParams().id;

  const handleGetReviews = () => {
    onGetReviews(expertId);
  };
  // useEffect(() => {
  //   handleGetReviews();
  // }, []);

  return (
    <section className="reviews">
      <h2 className="reviews__title">Отзывы</h2>
      <div className="reviews__content">
        <Stars
          loggedIn={loggedIn}
          count={reviews.count}
        />
        <ReviewsCardList />
      </div>
    </section>
  );
};
