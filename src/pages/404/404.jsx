import './404.css';
import { useNavigate } from 'react-router-dom';

export const Page404 = () => {
  const navigate = useNavigate();

  return (
    <section className='page-error'>
      <div className='page-error__container'>
          <span className='page-error__number'>404</span>
          <h1 className='page-error__title'>Страница не найдена</h1>
          <button className='page-error__btn' type='button' onClick={() => navigate(-1)}>Вернуться на главную</button>
      </div>
    </section>
  );
};
