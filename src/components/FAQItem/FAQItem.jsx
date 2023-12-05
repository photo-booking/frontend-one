import './FAQItem.css';
import React, { useState } from 'react';
import { BtnFAQ } from '../BtnFAQ/BtnFAQ';

const FAQItem = props => {
  const [visibleAnswer, setVisibleAnswer] = useState(false);

  const changeVesibleAnswer = () => {
    setVisibleAnswer(!visibleAnswer);
  };

  return (
    <>
      <li className="faq__question">
        {props.question}
        <BtnFAQ
          visibleAnswer={visibleAnswer}
          onClick={changeVesibleAnswer}
        />
      </li>
      {visibleAnswer && <p className="faq__answer">{props.answer}</p>}
    </>
  );
};

export default FAQItem;
