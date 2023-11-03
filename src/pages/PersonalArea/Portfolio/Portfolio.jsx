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
import imageToBase64 from 'image-to-base64/browser';
import { addPhotoToPortfolio } from '../../../utils/auth';


export const Portfolio = () => {

  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    dispatch(fetchProfile(params.id));
  }, []);

  // const [isSelected, setIsSelected] = useState([]);

  // const handleChange = (e) => {
  //   if (e.target.checked) {
  //     return setIsSelected([...isSelected, e.target.name])

  //   }
  //   else {
  //     isSelected?.forEach((currentElement, index) => {
  //       if (currentElement === e.target.id) {
  //         isSelected.splice(index, 1);
  //         return setIsSelected(isSelected)
  //       }
  //     })
  //   }
  // }

  let selectedItem = [];

  const handleSelected = (e) => {
    if (e.target.checked) {
      selectedItem = ([...selectedItem, e.target.name])
      console.log(selectedItem)
    }
    else {
      selectedItem?.forEach((currentElement, index) => {
        if (currentElement === e.target.id) {
          selectedItem.splice(index, 1);
          console.log(selectedItem);
        }
      })
    }
    return console.log(selectedItem);
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
          <input
            type='file'
            id='addphoto'
            accept="image/png, image/jpeg"
            className='portfolio__input_file'
            onChange={e => {
              const jwt = localStorage.getItem('token');
              const type = e.target.files[0].type;
              console.log(type);
              const reader = new FileReader();
              reader.readAsDataURL(e.target.files[0]);
              console.log(e.target.files[0]);
              const name = e.target.files[0].name.substring(0, 23);
              reader.onload = function () {
                imageToBase64(reader.result)
                  .then(res => addPhotoToPortfolio(res, type, jwt, name))
                  .catch(err => console.log(err));
              };
            }}
          >
          </input>
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
            <input className='portfolio__cards_checkbox' type='checkbox' onChange={handleSelected} name={index} id={index}></input>
            <label htmlFor={index}></label>
          </div>
        ))}


      </div>
    </article>
  );
};
