import './Checkbox.css';
import { useState } from 'react';

export const CheckboxProfile = props => {
  const [isChecked, setIsChecked] = useState(false);
  const onChange = (e) => {
    setIsChecked(e.target.checked);
    console.log(`${props.checkboxLabel} : ${e.target.checked}`)
  };
  return (
    <>
      <div className="checkboxProfile-container">
        <input
          className="checkboxProfile"
          type="checkbox"
          id={props.checkboxId}
          checked={isChecked}
          onChange={e => onChange(e)}
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
