import './slider.css';
import { v4 as uuidv4 } from 'uuid';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { useEffect, useState } from 'react';

export const Slider = ({ children: slides }) => {
  const [current, setCurrent] = useState(0);
  const [isChevron, setIsChevron] = useState(true);
  const prev = () => {
    setCurrent(current => (current === 0 ? slides.length - 1 : current - 1));
  };
  const next = () => {
    setCurrent(current => (current === slides.length - 1 ? 0 : current + 1));
  };
  useEffect(() => {
    if (!Array.isArray(slides)) {
      setIsChevron(false);
    } else {
      setIsChevron(true);
      console.log(slides);
    }
  });
  return (
    <div className="slider__container">
      <div
        className="slider"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides}
      </div>
      <div className="slider__visible">
        {isChevron && (
          <div className="slider__button_container">
            <button
              className="slider__button"
              onClick={prev}
            >
              <ChevronLeft className="slider__button_image" />
            </button>
            <button
              className="slider__button"
              onClick={next}
            >
              {isChevron && <ChevronRight className="slider__button_image" />}
            </button>
          </div>
        )}
        <div className="slider__dot_container">
          {Array.isArray(slides) &&
            slides.map((_, index) => {
              if (current === index) {
                return (
                  <div
                    className="slider__dot_active"
                    key={uuidv4()}
                  ></div>
                );
              } else {
                return (
                  <div
                    className="slider__dot"
                    key={uuidv4()}
                  ></div>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
};
