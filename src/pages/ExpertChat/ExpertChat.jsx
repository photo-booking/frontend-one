import './ExpertChat.css'
import { Chat } from '../../components/Chat/Chat'
import { useParams } from 'react-router-dom'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'


export const ExpertChat = () => {
    const param = useParams()
    const users = useSelector((state) => state.users.data.results);
    const user = users.find((user) => user.id === Number(param.id));
    return (
        <div className='expert-chat'>
            <h1>{`This is chat with ${user.first_name} ${user.last_name}`}</h1>
            <Chat />
        </div>
    )
}
