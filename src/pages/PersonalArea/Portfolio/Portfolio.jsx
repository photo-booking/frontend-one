import './Portfolio.css';
import photoIcon from '../../../images/photo-icon.svg';
import videoIcon from '../../../images/video-icon.svg';
import { DropDownList } from './DropDownList/dropdownlist';

export const Portfolio = () => {
  return (
    <article className='portfolio'>
      <h1 className='portfolio__title'>Портфолио</h1>
      <p className='portfolio__subtitle'>Эта информация видна всем в вашем профиле</p>

      <div className='portfolio__download-fields_conteiner'>
        <button className='portfolio__download-fields'>
          <p className='portfolio__download-fields_text'>Загрузить фото</p>
          <img src={photoIcon} />
        </button>
        <button className='portfolio__download-fields'>
          <p className='portfolio__download-fields_text'>Загрузить видео</p>
          <img src={videoIcon} />
        </button>
      </div>

      <DropDownList/>

      

    </article>
  );
};
