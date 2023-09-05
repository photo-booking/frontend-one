import './RangeInput.css';
import { useState } from 'react';

export const RangeInput = props => {
  const [minCost, setMinCost] = useState('350');
  const [maxCost, setMaxCost] = useState('2500');
  const sliderOne = e => {
    if (minCost > +maxCost) {
      setMinCost(e.target.value);
      setMaxCost(e.target.value);
    }
    setMinCost(e.target.value);
  };

  const sliderTwo = e => {
    if (minCost > +maxCost) {
      setMinCost(e.target.value);
      setMaxCost(e.target.value);
    } else {
      setMaxCost(e.target.value);
    }
  };

  const inputMinValue = e => {
    setMinCost(e.target.value);
  };

  const inputMaxValue = e => {
    if (e.target.value > 2500) {
      setMaxCost(2500);
    } else {
      setMaxCost(e.target.value);
    }
  };

  const sendSortingRequest = () => {
    console.log(minCost, maxCost);
  };

  return (
    <div className="slider">
      <div className="slider__container">
        <div className="slider-range">
          <div className="slider-range__track"></div>
          <input
            type="range"
            name="min-cost"
            min="0"
            max="2500"
            step="50"
            value={minCost}
            id="slider-1"
            onChange={e => sliderOne(e)}
            onMouseUp={sendSortingRequest}
            className="slider__input"
          />

          <input
            type="range"
            name="max-cost"
            min="50"
            max="2500"
            step="50"
            value={maxCost}
            id="slider-2"
            onChange={e => sliderTwo(e)}
            onMouseUp={sendSortingRequest}
            className="slider__input"
          />
        </div>
        <div className="slider__values">
          <div className="values__container">
            <p className="values__info">от</p>
            <input
              type="number"
              min="350"
              max="2500"
              value={minCost}
              onChange={inputMinValue}
              onBlur={sendSortingRequest}
              id="slider-1-meaning"
              className="meaning__input"
            />
            <p className="values__info">&#8381;</p>
          </div>
          <div className="values__container">
            <p className="values__info">до</p>
            <input
              type="number"
              min="50"
              max="2500"
              value={maxCost}
              onChange={inputMaxValue}
              onBlur={sendSortingRequest}
              id="slider-2-meaning"
              className="meaning__input"
            />
            <p className="values__info">&#8381;</p>
          </div>
        </div>
      </div>
    </div>
  );
};
