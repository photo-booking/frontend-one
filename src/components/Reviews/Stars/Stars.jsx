import './Stars.css';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';

const Stars = props => {
  const { loggedIn, count } = props;
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const [isFormVisible, setIsFormVisible] = useState(false);

  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [isTextBlocked, setIsTextBlocked] = useState(false);

  const handleCommentChange = event => {
    setComment(event.target.value);
  };

  const [editing, setEditing] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitted(true);
    setIsTextBlocked(true);
  };

  const handleEdit = event => {
    event.preventDefault();
    setEditing(true);
    setIsTextBlocked(false);
  };

  const handleSave = event => {
    event.preventDefault();
    setEditing(false);
    setSubmitted(true);
    setIsTextBlocked(true);
  };

  const handleCancel = event => {
    event.preventDefault();
    setEditing(false);
    setIsTextBlocked(true);
  };

  return (
    <div className="stars">
      <div className="stars__wrapper">
        {/* Здесь рейтинг */}
        <p className="stars__rating">4.8</p>
        <div className="stars__wrapper-stars">
          <div className="stars__specialist-stars">
            {[...Array(5)].map((__, i) => {
              return <FaStar size={20} key={i} />;
            })}
          </div>
          {/* Здесь count */}
          <p className="stars__value">{count} оценки</p>
        </div>
      </div>
      {loggedIn ? (
        <>
          <h3 className="stars__title">Оцените и напишите отзыв</h3>

          <div className="stars__user-stars">
            {[...Array(5)].map((star, index) => {
              const ratingValue = index + 1;
              return (
                <label key={index}>
                  <input
                    type="radio"
                    name="rating"
                    className="stars__radio"
                    value={ratingValue}
                    onClick={() => {
                      setRating(ratingValue);
                      setIsFormVisible(true);
                    }}
                  />
                  <FaStar
                    size={50}
                    color={ratingValue <= (hover || rating) ? '#91E500' : '#A1A1A1'}
                    className="stars__star"
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </div>

          <form className={`stars__form ${isFormVisible ? 'stars__form_visible' : ''}`}>
            {!submitted && <p className="stars__subtitle">Расскажите о своих впечатлениях</p>}
            <div
              className={`stars__wrapper-comment ${isTextBlocked ? 'stars__wrapper-comment_unactive' : ''
                }`}
            >
              <textarea
                className="stars__comment"
                name="comment"
                cols="40"
                rows="5"
                value={comment}
                onChange={handleCommentChange}
                maxLength={150}
                required
                disabled={isTextBlocked}
              ></textarea>
              {!submitted && <p className="stars__comment-count">{comment.length}/150</p>}
            </div>
            {!submitted && !editing && (
              <input
                type="submit"
                value="Отправить"
                className={`stars__button ${comment ? 'stars__button_active' : ''}`}
                disabled={!comment}
                onClick={handleSubmit}
              />
            )}
            {submitted && !editing && (
              <div>
                <input
                  type="submit"
                  value="Изменить"
                  className="stars__button"
                  onClick={handleEdit}
                />
              </div>
            )}
            {editing && (
              <div>
                <input
                  type="submit"
                  value="Сохранить"
                  className="stars__button stars__button_active"
                  onClick={handleSave}
                />
                <button
                  className="stars__button"
                  onClick={handleCancel}
                >
                  Отменить
                </button>
              </div>
            )}
          </form>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Stars;
