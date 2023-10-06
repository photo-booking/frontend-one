import ok_image from '../../../images/Illustration -Success.svg';

const ReviewsPopup = ({isOpen}) => {
  return (
    <div className={`reviewsPopup ${
        isOpen ? "reviewsPopup_opened" : ""
      }`}>
      <div className="reviewsPopup__container">
        <img
          className="reviewsPopup__icon"
          alt="Иконка успешная отправка"
          src={ok_image}
        ></img>

        <h2 className="reviewsPopup__title">Ваш отзыв отправлен!</h2>

        <p className="reviewsPopup__subtitle">И скоро будет опубликован в профиле</p>
      </div>
    </div>
  );
};

export default ReviewsPopup;
