import './ExpertChat.css';
import { Chat } from '../../components/Chat/Chat';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { socketUrl } from '../../const/socketUrl';

import { getIdChatAndChatHistory } from '../../utils/chat';
import { getExpertProfile } from '../../utils/api';

export const ExpertChat = () => {
    const [chatHistory, setChatHistory] = useState([]);
    const [currentExpert, setCurrentExpert] = useState({});
    const [wsChanel, setWsChanel] = useState(null);

    const token = localStorage.getItem('token');
    const param = useParams();
    const currentUserId = param.id;

    const onGetIdChatAndChatHistory = (userId, createConnection) => {
        const token = localStorage.getItem('token');
        getIdChatAndChatHistory(token, userId)
            .then(res => {
                setChatHistory(res.messages);
                createConnection(res.pk);
            })
            .catch(err => console.log(err));
    };

    const onGetCurrentExpertInfo = userId => {
        getExpertProfile(userId)
            .then(res => {
                setCurrentExpert(res);
            })
            .catch(err => console.log(err));
    };

    //   const returnReadyState = readyState => {
    //     console.log(readyState);
    //     //   const readyState = wsChanelIn.readyState;
    //     if (readyState === 0) {
    //       return 'Socket has been created. The connection is not yet open';
    //     } else if (readyState === 1) {
    //       return 'The connection is open and ready to communicate';
    //     } else if (readyState === 2) {
    //       return 'The connection is in the process of closing';
    //     } else if (readyState === 3) {
    //       return `The connection is closed or couldn't be opened`;
    //     } else {
    //       return 'XZZZZZZ what`s happend';
    //     }
    //   };

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
            setChatHistory((oldArray) => {
                const newMessage = JSON.parse(event.data);
                const messageInHistory = oldArray.find((elem) => elem.pk === newMessage.pk)
                if (!messageInHistory) {
                    const newChatHistory = [...oldArray, newMessage]
                    return newChatHistory
                } else { return oldArray }
            });
        };

        const createConnection = chatId => {
            connection?.removeEventListener('close', onClose);
            // //   if (connection && connection.readyState <= 1) {
            connection?.close();
            //   }
            connection = new WebSocket(`${socketUrl}${chatId}/?token=${token}`);
            connection?.addEventListener('close', onClose);
            connection?.addEventListener('message', onMessage);
            connection?.addEventListener('open', onOpen);
            setWsChanel(connection);
        };

        onGetIdChatAndChatHistory(currentUserId, createConnection);
        onGetCurrentExpertInfo(currentUserId);

        return () => {
            connection?.removeEventListener('close', onClose);
            connection?.removeEventListener('open', onOpen);
            connection?.removeEventListener('message', onMessage);
            connection?.close();
        };
    }, []);

    return (
        <div className="expert-chat">
            {currentExpert ? (
                <div
                    style={{ display: 'flex', flexDirection: 'column', rowGap: '20px', alignItems: 'center' }}
                >
                    <h1>{`This is chat with ${currentExpert.first_name}  ${currentExpert.last_name}`}</h1>
                    {/* <span>{returnReadyState(wsChanel?.readyState)}</span> */}
                </div>
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
