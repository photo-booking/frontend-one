import './PriceListForm.css';
import { useState } from 'react';

const PriceListForm = () => {
    const [cost, setCost] = useState('');
    const [minTime, setMinTime] = useState('');
    const [deadline, setDeadline] = useState('');
  
    const handleCostChange = (event) => {
      setCost(event.target.value);
    }
  
    const handleMinTimeChange = (event) => {
      setMinTime(event.target.value);
    }
  
    const handleDeadlineChange = (event) => {
      setDeadline(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
      }
  
    return (
      <form className="pricelist__form" onSubmit={handleSubmit}>
        <div className="pricelist__form-item">
          <label htmlFor="cost" className="pricelist__form-label">
            Стоимость
          </label>
          <input
            type="text"
            id="cost"
            className="pricelist__form-input"
            placeholder="₽/час"
            value={cost + (cost.length > 0 ? " дней" : "")}
            onChange={handleCostChange}
          />
        </div>
        <div className="pricelist__form-item">
          <label htmlFor="min-time" className="pricelist__form-label">
            Минимальное время
          </label>
          <input
            type="text"
            id="min-time"
            className="pricelist__form-input"
            placeholder="час"
            value={minTime}
            onChange={handleMinTimeChange}
          />
        </div>
        <div className="pricelist__form-item">
          <label htmlFor="deadline" className="pricelist__form-label">
            Срок сдачи
          </label>
          <input
            type="text"
            id="deadline"
            className="pricelist__form-input"
            placeholder="от, дней"
            value={deadline}
            onChange={handleDeadlineChange}
          />
        </div>
        <button
          type="submit"
          className="pricelist__form-button"
          disabled={!cost || !minTime || !deadline}

        >
          Сохранить
        </button>
      </form>
    );
};

export default PriceListForm;
