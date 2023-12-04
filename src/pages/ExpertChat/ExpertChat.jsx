import './ExpertChat.css';
import { Chat } from '../../components/Chat/Chat';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { socketUrl } from '../../const/socketUrl';

export const ExpertChat = props => {
  const { chatHistory, currentExpert } = props;
  const users = useSelector(state => state.users.data.results);
  let user;
  if (users) {
    user = users.find(user => user.email === currentExpert);
  }
  const token = localStorage.getItem('token');
  const param = useParams();
  const chatId = param.id;

  const [wsChanel, setWsChanel] = useState(null);

  useEffect(() => {
    let connection;

    const onClose = () => {
      console.log('close webSocket');
      setTimeout(createConnection, 3000);
    };

    const onOpen = () => {
      console.log('open WebSocket');
    };

    const onMessage = event => {
      console.log('Message from server ', event.data);
    };

    const createConnection = () => {
      connection?.removeEventListener('close', onClose);
      //   if (connection && connection.readyState <= 1) {
      connection?.close();
      //   }
      console.log('before constructor');
      connection = new WebSocket(`${socketUrl}${chatId}/?token=${token}`);
      console.log('after constructor');
      connection?.addEventListener('close', onClose);
      connection?.addEventListener('message', onMessage);
      connection?.addEventListener('open', onOpen);
      setWsChanel(connection);
    };

    createConnection();

    return () => {
      connection?.removeEventListener('close', onClose);
      connection?.removeEventListener('open', onOpen);
      connection?.removeEventListener('message', onMessage);
      connection.close();
    };
  }, [chatId, token]);
  return (
    <div className="expert-chat">
      {user ? (
        <h1>{`This is chat with ${user.first_name}  ${user.last_name}`}</h1>
      ) : (
        <h1>User is undefined. Wait please...</h1>
      )}
      <Chat
        chatHistory={chatHistory}
        wsChanel={wsChanel}
      />
    </div>
  );
};

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
