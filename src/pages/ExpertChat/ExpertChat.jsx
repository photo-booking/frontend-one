import './ExpertChat.css';
import { Chat } from '../../components/Chat/Chat';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export const ExpertChat = props => {
  const { chatHistory, currentExpert } = props;
  const users = useSelector(state => state.users.data.results);
  let user;
  if (users) {
    user = users.find(user => user.email === currentExpert);
  }
  return (
    <div className="expert-chat">
      {user ? (
        <h1>{`This is chat with ${user.first_name} ${user.last_name}`}</h1>
      ) : (
        <h1>User is undefined. Wait please...</h1>
      )}
      <Chat chatHistory={chatHistory} />
    </div>
  );
};
