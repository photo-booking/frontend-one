import './Links.css';
export const LinksPortfolio = props => {
  return (
    <div className="linksContainer">
      <button
        className="linksContainer__profile-button  portfolio-button active"
        onClick={props.onPortfolio}
      >
        Портфолио
      </button>
      <button
        className="linksContainer__profile-button price-button"
        onClick={props.onPrice}
      >
        Прайс-лист
      </button>
    </div>
  );
};
