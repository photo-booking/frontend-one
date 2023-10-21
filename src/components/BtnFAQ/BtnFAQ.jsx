import './BtnFAQ.css';

export const BtnFAQ = (props) => {

    return (
        <button className={props.visibleAnswer ? 'faq__btn faq__btn-minus' : 'faq__btn faq__btn-plus'}
        type='button'
        onClick={props.changeVesibleAnswer}
        id={props.id}
        />
    )
}