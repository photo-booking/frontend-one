import './FormAuth.css';

export const FormAuth = props => {
  const { child, buttonTitle, onSubmit, onChange, values, errors, isFormValid } = props;
  // const [isClient, setIsClient] = React.useState("true");
  // const [isExpert, setIsExpert] = React.useState("false");

  return (
    <>
      <form
        className="form-auth"
        onSubmit={onSubmit}
        action="#"
      >
        {child}
        
        <button
          className=""
          type="submit"
          disabled={!isFormValid}
        >
          {buttonTitle}
        </button>
      </form>
    </>
  );
};
