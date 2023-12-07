import './Messages.css';
import { Message } from '../Message/Message';

export const Messages = ({ messages, currentExpert }) => {
  return (
    <ul className='messages'>
      {messages.map((message) => {
        return (
          <Message
            message={message ? message : null}
            key={message.pk}
            currentExpert={currentExpert}
          />
        );
      })}
    </ul>
  );
};
