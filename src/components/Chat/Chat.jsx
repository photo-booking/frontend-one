import './Chat.css';
import { Messages } from './Messages/Messages';
import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';

export const Chat = props => {
  const { chatHistory, wsChanel } = props;
  const currentUser = useContext(CurrentUserContext);

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(chatHistory); //initialState messageHistory from API
  // const [readyState, setreadyState] = useState(undefined);

  const returnReadyState = wsChanelIn => {
    if (wsChanelIn && wsChanelIn.readyState) {
      const readyState = wsChanelIn.readyState;
      if (readyState === 0) {
        return 'Socket has been created. The connection is not yet open';
      } else if (readyState === 1) {
        return 'The connection is open and ready to communicate';
      } else if (readyState === 2) {
        return 'The connection is in the process of closing';
      } else if (readyState === 3) {
        return `The connection is closed or couldn't be opened`;
      }
    } else {
      return 'XZZZZZZ';
    }
  };

  const sendMessage = evt => {
    evt.preventDefault();
    if (!message) {
      return;
    }
    // console.log(message);
    wsChanel?.send(JSON.stringify({ message }));

    // const data = new Date();
    // const newMessage = {
    //   text: message,
    //   name: currentUser.first_name + currentUser.last_name,
    //   time: `${data.getHours()}.${data.getMinutes()}`
    // };
    // messages.push(newMessage);
    setMessage('');
  };

  return (
    <article className="сhat">
      <span>{returnReadyState(wsChanel)}</span>
      <Messages messages={messages} />
      <form className="сhat__form">
        <input
          className="сhat__input"
          type="text"
          value={message}
          onChange={evt => setMessage(evt.target.value)}
          placeholder="Напишите сообщение..."
        />
        <button
          className="сhat__btn"
          // disabled={wsChanel == null || readyState !== true}
          onClick={sendMessage}
        >
          Отправить
        </button>
      </form>
    </article>
  );
};
