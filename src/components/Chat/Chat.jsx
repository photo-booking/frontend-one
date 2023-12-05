import './Chat.css';
import { Message } from "../Message/Message";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";


export const Chat = () => {
    const [message, setMessage] = useState('');
    return (
        <article className='сhat'>
            <Message message={message} />
            <Message message={message} />
            <Message message={message} />
            <form className="сhat__form">
                <input
                    className='сhat__input'
                    type="text"
                    value={message}
                    onChange={(evt) => setMessage(evt.target.value)}
                    placeholder='Напишите сообщение...' />
                <button
                    className="сhat__btn"
                    type='submit'
                    onClick={(evt) => {
                        evt.preventDefault();
                        console.log(message);
                        setMessage('')
                    }
                    }
                >
                    Отправить
                </button>
            </form>
        </article>
    )
}