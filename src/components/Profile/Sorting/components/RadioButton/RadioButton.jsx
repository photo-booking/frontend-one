import './RadioButton.css';

export const RadioButtonProfile = props => {
  return (
    <>
      <div className="radioButtonProfileContainer">
        <input
          className="radioButtonProfile"
          value={props.value}
          type="radio"
          name={props.radioName}
          id={props.radioId}
          checked={props.radioIsChecked}
          onChange={props.onChange}
        />
        <label
          htmlFor={props.radioId}
          className="lableRadio"
        >
          {props.radioLabel}
        </label>
      </div>
    </>
  );
};

