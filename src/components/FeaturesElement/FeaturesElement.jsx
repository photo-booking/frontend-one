import './FeaturesElement.css';

export const FeaturesElement = (props) => {
    return (
        <section className='features-element'>
            <img className='features-element__img' src={props.img} alt={props.alt}/>
            <div className='features-element__container-text'>
                <h1 className='features-element__title'>{props.title}</h1>
                <p className='features-element__text'>{props.text}</p>
            </div>
        </section>
    )
}