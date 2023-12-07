import './Message.css';
import avatar from '../../../images/Avatar.svg';
import { useState, useContext } from 'react';
import { CurrentUserContext } from '../../../components/context/CurrentUserContext';

export const Message = ({ message, currentExpert }) => {
  // console.log(message);
  const currentUser = useContext(CurrentUserContext);
  // console.log(currentExpert);
  // console.log(currentUser);
  // console.log(message);

  const messageClassName = `message ${(currentExpert.first_name === message.user) ? 'message_left' : 'message_right'}`;
  const messageContainerClassName = `message__container ${(currentExpert.first_name === message.user) ? 'message__container_left' : 'message__container_right'
    }`;
  const messageTextClassName = `message__text ${(currentExpert.first_name === message.user) ? 'message__text_left' : 'message__text_right'
    }`;

  const avatarImage = (currentExpert.first_name === message.user) ? (currentExpert.profile_photo ? currentExpert.profile_photo : avatar) : (currentUser.profile_photo ? currentUser.profile_photo : avatar);

  return (
    <section className={messageClassName}>
      <img
        className="message__image"
        src={avatarImage}
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
