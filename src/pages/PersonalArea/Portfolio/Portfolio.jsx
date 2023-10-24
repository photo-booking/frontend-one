import '../PersonalArea.css';
import './Portfolio.css';
import { v4 as uuidv4 } from 'uuid';
import photoIcon from '../../../images/photo-icon.svg';
import videoIcon from '../../../images/video-icon.svg';
import { DropDownList } from './DropDownList/dropdownlist';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchProfile } from '../../../services/redusers/profile';
import tick from '../../../images/tickCheckbox.svg';

export const Portfolio = () => {

  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    dispatch(fetchProfile(params.id));
  }, []);

  const [isSelected, setIsCelected] = useState([]);

  const handleChange = (e) => {
    console.log(e.target.name);
    // if (e.target.checked) {
    //   setIsCelected(isSelected.push(e.target.name))
    //   console.log(isSelected);
    // }
  }

  const media = [
    'https://media.istockphoto.com/id/1496292974/photo/happy-asian-chinese-young-woman-crossing-road-carrying-skateboard-in-old-town.jpg?s=1024x1024&w=is&k=20&c=KxEElEsWUG6fFQB9a5OLH-BzNK1iRFiqOhA6HV1Shio=',
    'https://media.istockphoto.com/id/1496292974/photo/happy-asian-chinese-young-woman-crossing-road-carrying-skateboard-in-old-town.jpg?s=1024x1024&w=is&k=20&c=KxEElEsWUG6fFQB9a5OLH-BzNK1iRFiqOhA6HV1Shio=',
    'https://media.istockphoto.com/id/1496292974/photo/happy-asian-chinese-young-woman-crossing-road-carrying-skateboard-in-old-town.jpg?s=1024x1024&w=is&k=20&c=KxEElEsWUG6fFQB9a5OLH-BzNK1iRFiqOhA6HV1Shio=',
    'https://media.istockphoto.com/id/1496292974/photo/happy-asian-chinese-young-woman-crossing-road-carrying-skateboard-in-old-town.jpg?s=1024x1024&w=is&k=20&c=KxEElEsWUG6fFQB9a5OLH-BzNK1iRFiqOhA6HV1Shio=',
    'https://media.istockphoto.com/id/1496292974/photo/happy-asian-chinese-young-woman-crossing-road-carrying-skateboard-in-old-town.jpg?s=1024x1024&w=is&k=20&c=KxEElEsWUG6fFQB9a5OLH-BzNK1iRFiqOhA6HV1Shio=',
    'https://media.istockphoto.com/id/1496292974/photo/happy-asian-chinese-young-woman-crossing-road-carrying-skateboard-in-old-town.jpg?s=1024x1024&w=is&k=20&c=KxEElEsWUG6fFQB9a5OLH-BzNK1iRFiqOhA6HV1Shio=',
    'https://media.istockphoto.com/id/1496292974/photo/happy-asian-chinese-young-woman-crossing-road-carrying-skateboard-in-old-town.jpg?s=1024x1024&w=is&k=20&c=KxEElEsWUG6fFQB9a5OLH-BzNK1iRFiqOhA6HV1Shio=',
    'https://media.istockphoto.com/id/1496292974/photo/happy-asian-chinese-young-woman-crossing-road-carrying-skateboard-in-old-town.jpg?s=1024x1024&w=is&k=20&c=KxEElEsWUG6fFQB9a5OLH-BzNK1iRFiqOhA6HV1Shio=',
    'https://media.istockphoto.com/id/1496292974/photo/happy-asian-chinese-young-woman-crossing-road-carrying-skateboard-in-old-town.jpg?s=1024x1024&w=is&k=20&c=KxEElEsWUG6fFQB9a5OLH-BzNK1iRFiqOhA6HV1Shio=',
    'https://media.istockphoto.com/id/1496292974/photo/happy-asian-chinese-young-woman-crossing-road-carrying-skateboard-in-old-town.jpg?s=1024x1024&w=is&k=20&c=KxEElEsWUG6fFQB9a5OLH-BzNK1iRFiqOhA6HV1Shio=',
  ]

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

      <DropDownList />

      <div className='portfolio__cards_content'>

        {media.map((item, index) => (
          <div className='portfolio__cards_container' key={index} >
            <img className='portfolio__cards' src={item} />
            <input className='portfolio__cards_checkbox' type='checkbox' onChange={handleChange} name={index} id={index}></input>
            <label htmlFor={index}></label>
          </div>
        ))}


      </div>
    </article>
  );
};
