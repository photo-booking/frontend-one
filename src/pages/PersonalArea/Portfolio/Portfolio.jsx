import '../PersonalArea.css';
import './Portfolio.css';
import photoIcon from '../../../images/photo-icon.svg';
import videoIcon from '../../../images/video-icon.svg';
import { DropDownList } from './DropDownList/dropdownlist';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchProfile } from '../../../services/redusers/profile';
import imageToBase64 from 'image-to-base64/browser';
import { addPhotoToPortfolio, deletePhotoToPortfolio, getExpertProfile } from '../../../utils/api';
import { CardInfoProfile } from '../../../components/Profile/PhotoCard/CardInfo/CardInfo';
import { PortfolioPhotoInfo } from './PortfolioPhotoInfo/PortfolioPhotoInfo';




export const Portfolio = () => {

  const params = useParams();

  const [photo, setPhoto] = useState([]);


  useEffect(() => {
    // dispatch(fetchProfile(params?.id));
    getExpertProfile(params?.id)
      .then(res => setPhoto(res.mediafiles))
      .catch(err => console.log(err));
  }, []);


  // select photo
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

  // Add new photo to portfolio
  const handleAdd = (e) => {
    const jwt = localStorage.getItem('token');
    const type = e.target.files[0].type;
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    const name = e.target.files[0].name.substring(0, 23);
    reader.onload = function () {
      imageToBase64(reader.result)
        .then(res => {
          const result = res;
          return result
        })
        .then(result => {
          addPhotoToPortfolio(result, type, jwt, name)
            .then(res => {
              photo.push(res)
              setPhoto([...photo])
              console.log(res)
            })
            .then(res => console.log('добавили фото'))
            .catch(err => console.log(err))
          // dispatch(fetchProfile(params?.id));
        })
        .catch(err => console.log(err));
    };
  }

  // Remove photo from portfolio
  const handleDelete = (e) => {
    const jwt = localStorage.getItem('token');
    console.log(e.target.id);
    const id = Number(e.target.id);
    console.log(typeof id);
    deletePhotoToPortfolio(id, jwt)
      .then(res => {
        setPhoto(photo.filter(item => item.id !== id))
      })
      .catch(err => console.log(err, 'не удалилась'))

  }

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
            onChange={handleAdd}
            multiple
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

        {photo?.map((item, index) => (
          <div className='portfolio__cards_container' key={item.id} >
            <div id={item.id} className='portfolio__cards_delete' onClick={handleDelete}></div>
            <img className='portfolio__cards' src={`http://photomarket.sytes.net${item.photo}`} alt={item.title} />
            <input className='portfolio__cards_checkbox' type='checkbox' onChange={handleSelected} name={index} id={`${index}-type`}></input>
            <label htmlFor={`${index}-type`}></label>

            <PortfolioPhotoInfo />
          </div>
        ))}


      </div>
    </article>
  );
};
