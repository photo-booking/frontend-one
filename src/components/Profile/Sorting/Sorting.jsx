import { CheckboxProfile } from './components/Checkbox/Checkbox';
import { RadioButtonProfile } from './components/RadioButton/RadioButton';
import { useState } from 'react';
import { RangeInput } from './components/RangeInput/RangeInput';
import './Sorting.css';
import { useLocation } from 'react-router-dom';

export const Sorting = props => {

  const [checkedPrice, setCheckedPrice] = useState('Высокая стоимость');
  const [checkedMainFilter, setCheckedMainFilter] = useState('Все');

  const checkBox = [
    'Свадебная',
    'Love Story',
    'Индивидуальная',
    'Семейная',
    'Fashion',
    'Питомцы',
    'Интервью',
    'Аэросъемка',
    'Стоковая',
    'Клипы'
  ];

  const location = useLocation();

  const radioPrice = ['Высокая стоимость', 'Низкая стоимость'];
  const radioMainFilter =
    location.pathname === '/catalog'
      ? ['Все', 'Фотографы', 'Видеооператоры']
      : ['Все', 'Фото', 'Видео'];

  const onChangePrice = e => {
    setCheckedPrice(e.target.value);
  };
  const onChangeMainFilter = e => {
    setCheckedMainFilter(e.target.value);
  };

  return (
    <div className={'sortingContainer'} >
      <div className="sortingContainer__title">Сортировка</div>
      <div className={'sortingContainer__sorting-price'}>
        {radioPrice.map(el => (
          <RadioButtonProfile
            key={el}
            radioId={el}
            radioLabel={el}
            value={el}
            radioName="sorting-price"
            radioIsChecked={el === checkedPrice}
            onChange={e => onChangePrice(e)}
          />
        ))}
      </div>
      <div className="sortingContainer__title">Фильтры</div>
      <div className={'sortingContainer__sorting-specializations'}>
        <div className="sortingContainer__subTitle">Специализации</div>
        {radioMainFilter.map(el => (
          <RadioButtonProfile
            key={el}
            radioId={el}
            radioLabel={el}
            value={el}
            radioName="sorting-main"
            radioIsChecked={el === checkedMainFilter}
            onChange={e => onChangeMainFilter(e)}
          />
        ))}
      </div>
      <div className={'sortingContainer__sorting-specializations'}>
        <div className="sortingContainer__subTitle">Вид съемки</div>
        {checkBox.map((el, index) => (
          <CheckboxProfile
            key={el}
            checkboxId={index}
            checkboxLabel={el}
          />
        ))}
      </div>
      <div className="sortingContainer__subTitle">Стоимость</div>
      <RangeInput />
    </div>
  );
};
