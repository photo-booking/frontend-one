import './ReviewsCardList.css';
import ReviewsCard from '../ReviewsCard/ReviewsCard';
import { useEffect, useState } from 'react';

const CardList = () => {
  const [numCards, setNumCards] = useState(0);

  const сardsArray = Array(11).fill(<ReviewsCard />);

  let resizeTimeout;

  function getNumCardsToAdd() {
    if (window.innerWidth >= 1280) {
      return 6;
    } else if (window.innerWidth >= 990) {
      return 4;
    } else if (window.innerWidth >= 768) {
      return 2;
    }
  }

  function handleResize() {
    if (resizeTimeout) {
      clearTimeout(resizeTimeout);
    }

    resizeTimeout = setTimeout(() => {
      setNumCards(getNumCardsToAdd());
    }, 200);
  }

  useEffect(
    () => {
      setNumCards(getNumCardsToAdd());

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  function loadMoreCards() {
    if (window.innerWidth >= 1280) {
      setNumCards(prevNumCards => prevNumCards + 6);
    } else if (window.innerWidth >= 990) {
      setNumCards(prevNumCards => prevNumCards + 4);
    } else {
      setNumCards(prevNumCards => prevNumCards + 2);
    }
  }
  return (
    <section className="reviewsCardList">
      <ul className="reviewsCardList__list">
        {сardsArray.slice(0, numCards).map((card, index) => (
          //key = {review.id} id отзыва
          <li key={index}>{card}</li>
        ))}
      </ul>

      {/* <ul className="cardList__list">
        {cards.map(card => (
          <Card
            key={card.id}
            {...card}
            card={card}
          />
        ))}
      </ul> */}

      <button
        type="button"
        className="reviewsCardList__button"
        onClick={loadMoreCards}
        style={{ display: numCards >= сardsArray.length ? 'none' : 'flex' }}
      >
        Показать ещё
      </button>
    </section>
  );
};

export default CardList;
