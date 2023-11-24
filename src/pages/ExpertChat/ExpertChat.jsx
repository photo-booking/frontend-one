import { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import './ExpertChat.css';
import { Contact } from "../ExpertChat/Contact/Contact";
import { Message } from "./Message/Message";
import serch from '../../images/search.svg'

export const ExpertChat = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  return (
    <div className='expert-сhat'>
      <article className='expert-сhat__contacts'>
        <div className="expert-сhat__search-container">
          <img className="expert-сhat__search" src={serch} alt="search" />
          <input className='expert-сhat__input expert-сhat__input_search' type="text" placeholder=' Поиск...' />
        </div>
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </article>
      <article className='expert-сhat__messages'>
        <Message message={message} />
        <Message message={message} />
        <Message message={message} />
        <form className="expert-сhat__messages-form">
          <input className='expert-сhat__input expert-сhat__input_message' type="text" value={message} onChange={(evt) => setMessage(evt.target.value)} placeholder='Напишите сообщение...' />
          <button className="expert-сhat__btn" type='submit' onClick={(evt) => { evt.preventDefault(); console.log(message); setMessage('') }}>Отправить</button>
        </form>
      </article>
    </div>
  );
};
