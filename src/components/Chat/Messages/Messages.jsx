import './Messages.css';
import { Message } from '../Message/Message';

export const Messages = ({ messages }) => {
  return (
    <ul>
      {messages.map((message) => {
        return (
          <Message
            message={message ? message : null}
            key={message.pk}
          />
        );
      })}
    </ul>
  );
};
