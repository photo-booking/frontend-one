import './Message.css';
import avatar from '../../../images/Avatar.svg';
import { useState } from 'react';

export const Message = ({ message }) => {
  // console.log(message);
  const [isExpert, setIsExpert] = useState(false);
  const messageClassName = `message ${isExpert ? 'message_left' : 'message_right'}`;
  const messageContainerClassName = `message__container ${
    isExpert ? 'message__container_left' : 'message__container_right'
  }`;
  const messageTextClassName = `message__text ${
    isExpert ? 'message__text_left' : 'message__text_right'
  }`;

  return (
    <section className={messageClassName}>
      <img
        className="message__image"
        src={avatar}
        alt="avatar"
      />
      <div className={`${messageContainerClassName} message__container_column`}>
        <div className={`${messageContainerClassName} message__container_row`}>
          <h2 className="message__name">{message.user}</h2>
          <p className="message__time">{message.created_at}</p>
        </div>
        <p className={messageTextClassName}>{message.text}</p>
      </div>
    </section>
  );
};
