import './Sorting2.css';
import { useForm } from 'react-hook-form';

export const Sorting2 = props => {
  const {
    watch,
    register,
    handleSubmit,
    reset,
    formState: { isDirty }
  } = useForm({
  });


  const handleSubmitFilter = (values) => {
    console.log(values)

  }

  const roundSort = [
    { id: 'highPrice', label: 'Высокая стоимость' },
    { id: 'lowPrice', label: 'Низкая стоимость' }
  ];
  const roundFilter = [
    { id: 'allExperts', label: 'Все' },
    { id: 'photographer', label: 'Фотографы' },
    { id: 'videographer', label: 'Видеоператоры' },
  ];
  const square = [
    { id: 'wedding', label: 'Свадебная' },
    { id: 'loveStory', label: 'Love Story' },
    { id: 'individual', label: 'Индивидуальная' },
    { id: 'family', label: 'Семейная' },
    { id: 'fashion', label: 'Fashion' },
    { id: 'pets', label: 'Питомцы' },
    { id: 'interview', label: 'Интервью' },
    { id: 'aerialPhotography', label: 'Аэросъемка' },
    { id: 'stock', label: 'Стоковая' },
    { id: 'clips', label: 'Клипы' },
  ];

  return (
    <form
      onSubmit={handleSubmit(handleSubmitFilter)}
      className='sorting-form'
    >
      <h1>Сортировка</h1>
      {roundSort.map((el) =>
      (<span key={el.id}>
        <input type='radio' required value={el.id} id={el.id} {...register('sort')} className='sorting-form__input sorting-form__input_round' />
        <label htmlFor={el.id}>{el.label}</label>
      </span>))}
      <h1>Фильтры</h1>
      <h2>Специалисты</h2>
      {roundFilter.map((el) =>
      (<span key={el.id}>
        <input type='radio' required value={el.id} id={el.id} {...register('filter')} className='sorting-form__input sorting-form__input_round' />
        <label htmlFor={el.id}>{el.label}</label>
      </span>))}

      <h2>Вид съемки</h2>
      {square.map((el) =>
      (<span key={el.id}>
        <input type='checkbox' id={el.id} {...register(el.id)} className='sorting-form__input sorting-form__input_square' />
        <label htmlFor={el.id}>{el.label}</label>
      </span>))}
      <h2>Стоимость</h2>
      <div className='sorting-form__price-conteiner'>
        <p>от</p>
        <input
          type='number'
          min="350"
          max="2500"
          step="50"
          defaultValue="350"
          {...register('minPrice')} />
        <p>&#8381;</p>
      </div>
      <div className='sorting-form__price-conteiner'>
        <p>до</p>
        <input
          type='number'
          min="350"
          max="2500"
          step="50"
          defaultValue="2500"
          {...register('maxPrice')} />
        <p>&#8381;</p>
      </div>
      <button type='submit' className={`sorting-form__submit ${!isDirty ? 'sorting-form__submit_disabled' : ''}`} disabled={!isDirty}>Применить фильтр</button>

    </form>
  );
};
