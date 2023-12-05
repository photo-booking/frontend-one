import './Orders.css';
import { Contact } from "./Contact/Contact";
import { Chat } from "../Chat/Chat"

import serch from '../../images/search.svg'

export const Orders = () => {
  return (
    <div className='orders'>
      <article className='orders__contacts'>
        <div className="orders__search-container">
          <img className="orders__search" src={serch} alt="search" />
          <input className='orders__input' type="text" placeholder=' Поиск...' />
        </div>
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </article>
      <Chat />
    </div>
  );
};
