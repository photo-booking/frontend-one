import "./Contact.css"
import avatar from "../../../images/Avatar.svg"

export const Contact = () => {
    return (
        <div className="contact">
            <img className="contact__image" src={avatar} alt="avatar" />
            <p className="contact__name">Alena Konovalova</p>
        </div>
    )
}