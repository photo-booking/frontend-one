import './Message.css';
import avatar from '../../../images/Avatar.svg';
import notification from '../../../images/double-tick-icon.svg';
import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../../components/context/CurrentUserContext';
import useIsInViewport from '../../../hooks/useIsInViewport';

export const Message = ({ message, currentExpert, wsChanel }) => {
  // console.log(message);
  const currentUser = useContext(CurrentUserContext);
  // console.log(currentExpert);
  // console.log(currentUser);

  const { elementRef, isInViewPort } = useIsInViewport()

  useEffect(() => {
    if (!isInViewPort) {
      return;
    } else {
      if (currentExpert.first_name === message.user && message.received === false && wsChanel && wsChanel.readyState === 1) {
        wsChanel?.send(JSON.stringify({ message: message, type: "received", pk: message.pk }));
      } else {
        return;
      }
    }
  }, [isInViewPort, message, message.pk, message.received, wsChanel]);

  const scrollToLastMessage = () => {
    const lastChildElement = elementRef.current?.lastElementChild;
    lastChildElement?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToLastMessage();
  }, []);

  const messageClassName = `message ${(currentExpert.first_name === message.user) ? 'message_left' : 'message_right'}`;
  const messageContainerClassName = `message__container ${(currentExpert.first_name === message.user) ? 'message__container_left' : 'message__container_right'
    }`;
  const messageTextClassName = `message__text ${(currentExpert.first_name === message.user) ? 'message__text_left' : 'message__text_right'
    }`;

  const messageNotificationClassName = `message__notification ${message.received ? 'message__notification_visible' : ''}`;

  const avatarImage = (currentExpert.first_name === message.user)
    ? (currentExpert.profile_photo ? currentExpert.profile_photo : avatar)
    : (currentUser.profile_photo ? currentUser.profile_photo : avatar);

  return (
    <section className={messageClassName} ref={elementRef}>
      <img
        className="message__image"
        src={avatarImage}
        alt="avatar"
      />
      <div className={`${messageContainerClassName} message__container_column`}>
        <div className={`${messageContainerClassName} message__container_row`}>
          <h2 className="message__name">{message.user}</h2>
          <p className="message__time">{message.created_at.split('+')[0]}</p>
        </div>
        <div className={messageContainerClassName}>
          <p className={messageTextClassName}>{message.text}</p>
          {(currentUser.first_name === message.user) && message.received ?
            <img className={messageNotificationClassName} src={notification} alt='notification' />
            : <></>
          }
        </div>
      </div>
    </section>
  );
};
