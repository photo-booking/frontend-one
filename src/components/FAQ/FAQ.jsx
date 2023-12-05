import './FAQ.css';
import FAQItem from '../FAQItem/FAQItem';
import { items } from '../../const/itemsFAQ';

export const FAQ = () => {
  return (
    <section className="faq">
      <div className="faq__container">
        <h1 className="faq__title">Зачем мне нужен профессиональный фотограф или видеооператор?</h1>
        <ul className="faq__list">
          {items.map(item => (
            <FAQItem
              key={item.id}
              id={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
