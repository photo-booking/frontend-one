import './FormAuth.css';

export const FormAuth = props => {
  const { child, buttonTitle, onSubmit, err } = props;
  const disabled = err !== undefined && Object.keys(err).length !== 0;
  const buttonSubmitClassName = `form-auth__button_submit ${
    disabled ? 'form-auth__button_submit_disabled' : ''
  }`;

  return (
    <>
      <form
        className="form-auth"
        onSubmit={onSubmit}
        action="#"
      >
        {child}
        <button
          className={buttonSubmitClassName}
          type="submit"
          disabled={disabled}
        >
          {buttonTitle}
        </button>
        
      </form>
    </>
  );
};
