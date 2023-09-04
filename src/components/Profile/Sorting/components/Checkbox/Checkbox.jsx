import './Checkbox.css';
import { useState } from 'react';

export const CheckboxProfile = props => {
  const [isChecked, setIsChecked] = useState(false);
  const onChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <div className="checkboxProfile-container">
        <input
          className="checkboxProfile"
          type="checkbox"
          id={props.checkboxId}
          checked={isChecked}
          onChange={onChange}
        />
        <label
          htmlFor={props.checkboxId}
          className="labelProfile"
        >
          {props.checkboxLabel}
        </label>
      </div>
    </>
  );
};
