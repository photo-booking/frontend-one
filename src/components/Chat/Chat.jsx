import './Chat.css';
import { Messages } from './Messages/Messages';
import { useState } from 'react';


export const Chat = props => {
  const { chatHistory, wsChanel, currentExpert } = props;


  const [message, setMessage] = useState('');

  const sendMessage = evt => {
    evt.preventDefault();
    if (!message) {
      return;
    }
    wsChanel?.send(JSON.stringify({ message }));
    setMessage('');
  };

  return (
    <article className="сhat">
      <Messages messages={chatHistory} currentExpert={currentExpert} />
      <form className="сhat__form">
        <textarea
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
