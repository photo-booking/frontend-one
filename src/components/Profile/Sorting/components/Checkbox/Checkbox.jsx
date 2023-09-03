import './Checkbox.css';
import { useState } from 'react';

export const CheckboxProfile = props => {
  const [isChecked, setIsChecked] = useState(false);
  const onChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <div className="checkbox-container">
        <input
          className="checkbox"
          type="checkbox"
          id={props.checkboxId}
          checked={isChecked}
          onChange={onChange}
        />
        <label
          htmlFor={props.checkboxId}
          className="lable"
        >
          {props.checkboxLabel}
        </label>
      </div>
    </>
  );
};
