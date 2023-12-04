import './Chat.css';
import { Messages } from './Messages/Messages';
import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';

import { socketUrl } from '../../const/socketUrl';
import { useParams } from 'react-router-dom';

// const messages = [
//   { text: 'Hello!', name: 'Kate Polyntseva', time: '12.00' },
//   { text: 'Hello, world', name: 'Petr Petrov', time: '13.30' },
//   { text: 'My name is Kate', name: 'Slava Ivanov', time: '15.45' }
// ];

export const Chat = props => {
  const { chatHistory } = props;
  const currentUser = useContext(CurrentUserContext);
  const token = localStorage.getItem('token');
  const param = useParams();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(chatHistory); //initialState messageHistory from API

  const chatId = param.id;

  // const connection = new WebSocket(`${socketUrl}${chatId}/?token=${token}`);

  // connection.onopen = () => {
  //   alert('соединение установлено');
  // };
  // connection.onclose = () => {
  //   alert('соединение закрыто');
  // };
  // connection.onmessage = evt => {
  //   setMessages([...messages, JSON.parse(evt.data)]);
  // };
  // connection.onerror = err => {
  //   alert(`произошла ошибка ${err}`);
  // };

  // const sendMessage = message => {
  //   connection.send(JSON.stringify({ event: 'chat-message', payload: { currentUser, message } }));
  // };

  const handleSubmit = evt => {
    evt.preventDefault();
    // const data = new Date();
    // const newMessage = {
    //   text: message,
    //   name: currentUser.first_name + currentUser.last_name,
    //   time: `${data.getHours()}.${data.getMinutes()}`
    // };
    // messages.push(newMessage);
    console.log(message);
    // sendMessage(message);
    setMessage('');
  };

  return (
    <article className="сhat">
      <span>The WebSocket is currently {}</span>
      <Messages messages={messages} />
      <form
        className="сhat__form"
        onSubmit={handleSubmit}
      >
        <input
          className="сhat__input"
          type="text"
          value={message}
          onChange={evt => setMessage(evt.target.value)}
          placeholder="Напишите сообщение..."
        />
        <button
          className="сhat__btn"
          type="submit"
          // disabled={}
        >
          Отправить
        </button>
      </form>
    </article>
  );
};
