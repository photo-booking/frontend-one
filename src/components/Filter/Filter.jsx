import React from 'react';
import './Filter.css';

function Filter({ photo, video }) {
  const [minCost, setMinCost] = React.useState('350');
  const [maxCost, setMaxCost] = React.useState('2500');
  const [costValue, setCostValue] = React.useState('cheap');

  const [isMinCost, setIsMinCost] = React.useState(true);

  const [expertValue, setExpertValue] = React.useState('photographer');

  // const [isPhotographer, setIsPhotographer] = React.useState(true);
  // const [isVideographer, setIsVideographer] = React.useState(false);

  const [weddingIsChecked, setWeddingIsChecked] = React.useState(false);
  const [loveStoryIsChecked, setLoveStoryIsChecked] = React.useState(false);
  const [individualIsChecked, setIndividualIsChecked] = React.useState(false);
  const [familyIsChecked, setFamilyIsChecked] = React.useState(false);
  const [fashionIsChecked, setFashionIsChecked] = React.useState(false);
  const [petsIsChecked, setPetsIsChecked] = React.useState(false);
  const [interviewIsChecked, setInterviewIsChecked] = React.useState(false);
  const [aerialIsChecked, setAerialIsChecked] = React.useState(false);
  const [stockIsChecked, setStockIsChecked] = React.useState(false);
  const [clipsIsChecked, setClipsIsChecked] = React.useState(false);

  const [videoTypeDisabled, setVideoTypeDisabled] = React.useState(false);
  const [photoTypeDisabled, setPhotoTypeDisabled] = React.useState(false);

  const [checkboxIsClick, setCheckboxIsClick] = React.useState(false);

  // это слайдеры
  function sliderOne(e) {
    if (minCost > +maxCost) {
      setMinCost(e.target.value);
      setMaxCost(e.target.value);
    }
    setMinCost(e.target.value);
  }

  function sliderTwo(e) {
    if (minCost > +maxCost) {
      setMinCost(e.target.value);
      setMaxCost(e.target.value);
    } else {
      setMaxCost(e.target.value);
    }
  }

  function inputMinValue(e) {
    // здесь нет ограничителя вниз... я хз, как его сделать
    setMinCost(e.target.value);
  }

  function inputMaxValue(e) {
    if (e.target.value > 2500) {
      setMaxCost(2500);
    } else {
      setMaxCost(e.target.value);
    }
  }

  // это инпуты
  function blurInput() {
    triggeredSubmit();
  }

  // изменение состояний чекбоксов
  // wedding
  function submitWeddingClick() {
    setWeddingIsChecked(!weddingIsChecked);
    setCheckboxIsClick(!checkboxIsClick);
  }

  // loveStory
  function submitLoveStoryClick() {
    setLoveStoryIsChecked(!loveStoryIsChecked);
    setCheckboxIsClick(!checkboxIsClick);
  }

  // individual
  function submitIndividualClick() {
    setIndividualIsChecked(!individualIsChecked);
    setCheckboxIsClick(!checkboxIsClick);
  }

  // family
  function submitFamilyClick() {
    setFamilyIsChecked(!familyIsChecked);
    setCheckboxIsClick(!checkboxIsClick);
  }

  // fashion
  function submitFashionClick() {
    setFashionIsChecked(!fashionIsChecked);
    setCheckboxIsClick(!checkboxIsClick);
  }

  // pets
  function submitPetsClick() {
    setPetsIsChecked(!petsIsChecked);
    setCheckboxIsClick(!checkboxIsClick);
  }

  // interview
  function submitInterviewClick() {
    setInterviewIsChecked(!interviewIsChecked);
    setCheckboxIsClick(!checkboxIsClick);
  }

  // aerial
  function submitAerialClick() {
    setAerialIsChecked(!aerialIsChecked);
    setCheckboxIsClick(!checkboxIsClick);
  }

  // stock
  function submitStockClick() {
    setStockIsChecked(!stockIsChecked);
    setCheckboxIsClick(!checkboxIsClick);
  }

  // clips
  function submitClipsClick() {
    setClipsIsChecked(!clipsIsChecked);
    setCheckboxIsClick(!checkboxIsClick);
  }

  // дергает событие формы onSubmit
  function triggeredSubmit() {
    document.getElementById('form').requestSubmit();
  }

  //!!!!!!!!!!АЛЯРМА если активн чекбокс ,который задисблеится при переключении expertValue, то форма отправится сначала по переключению, потом по чекбоксу(((

  // вызывает отправку формы при монтировании, а так же при изменении любого параметра
  React.useEffect(() => {
    // сделаем неактивными те чекбоксы, которые нельзя использовать для фотографа или видеографа
    if (expertValue === 'photographer') {
      setPhotoTypeDisabled(false);
      setVideoTypeDisabled(true);

      setInterviewIsChecked(false);
      setAerialIsChecked(false);
      setStockIsChecked(false);
      setClipsIsChecked(false);
    } else if (expertValue === 'videographer') {
      setPhotoTypeDisabled(true);
      setVideoTypeDisabled(false);

      setWeddingIsChecked(false);
      setLoveStoryIsChecked(false);
      setIndividualIsChecked(false);
      setFamilyIsChecked(false);
      setFashionIsChecked(false);
      setPetsIsChecked(false);
    } else {
      setVideoTypeDisabled(false);
      setPhotoTypeDisabled(false);
    }

    triggeredSubmit();
  }, [
    isMinCost,
    expertValue,
    checkboxIsClick
    // weddingIsChecked,
    // loveStoryIsChecked,
    // individualIsChecked,
    // familyIsChecked,
    // fashionIsChecked,
    // petsIsChecked,
    // interviewIsChecked,
    // aerialIsChecked,
    // stockIsChecked,
    // clipsIsChecked,
  ]);

  function submit(e) {
    e.preventDefault();
    const formValue = {
      isMinCost: isMinCost,
      isMaxCost: !isMinCost,
      minCost: minCost,
      maxCost: maxCost,
      expert: expertValue,
      typeOfShooting: {
        wedding: weddingIsChecked,
        loveStory: loveStoryIsChecked,
        individual: individualIsChecked,
        family: familyIsChecked,
        fashion: fashionIsChecked,
        pets: petsIsChecked,
        interview: interviewIsChecked,
        aerial: aerialIsChecked,
        stock: stockIsChecked,
        clips: clipsIsChecked
      }
    };
    // пока с данными нечего делать, будут выводиться в консоль
    console.log(formValue);
  }

  // Присвятые РАДИОКНОПКИ!
  function chengeExpertValue(e) {
    setExpertValue(e.target.value);
  }

  function chengeCost() {
    setIsMinCost(!isMinCost);
  }

  return (
    <form
      className=/*{!formElementIsVisible ? */ "filter-form"
      /*: "filter-form_slick"}*/ id="form"
      onSubmit={e => {
        submit(e);
      }}
    >
      {/* <div ref= {myRef1} className="ear"></div> */}
      <fieldset className="fild">
        <p className="filter__type">Сортировка</p>
        <input
          type="radio"
          name="cost"
          id="cheap"
          value="cheap"
          className="ratio"
          checked={isMinCost}
          onChange={() => {
            chengeCost();
          }}
        />
        <label
          className="ratio-label"
          htmlFor="cheap"
        >
          Низкая стоимость
        </label>

        <input
          type="radio"
          name="cost"
          id="expensive"
          value="expensive"
          className="ratio"
          checked={!isMinCost}
          onChange={() => {
            chengeCost();
          }}
        />
        <label
          className="ratio-label"
          htmlFor="expensive"
        >
          Высокая стоимость
        </label>
      </fieldset>

      <fieldset className="fild">
        <p className="filter__type">Фильтры</p>
        <p className="filter__category">специалисты</p>
        <input
          type="radio"
          id="all"
          name="expert"
          value="all"
          className="ratio"
          checked={expertValue === 'all' ? true : false}
          onChange={chengeExpertValue}
        />
        <label
          className="ratio-label"
          htmlFor="all"
        >
          Все
        </label>

        <input
          type="radio"
          name="expert"
          id="photographer"
          value="photographer"
          className="ratio"
          checked={expertValue === 'photographer' ? true : false}
          onChange={chengeExpertValue}
        />
        <label
          className="ratio-label"
          htmlFor="photographer"
        >
          {photo}
        </label>

        <input
          type="radio"
          name="expert"
          id="videographer"
          value="videographer"
          className="ratio"
          checked={expertValue === 'videographer' ? true : false}
          onChange={chengeExpertValue}
        />
        <label
          className="ratio-label"
          htmlFor="videographer"
        >
          {video}
        </label>
      </fieldset>

      <fieldset className="fild">
        <p className="filter__category">вид съемки</p>

        <input
          type="checkbox"
          name="type-of-shooting"
          id="wedding"
          className="checkbox"
          disabled={photoTypeDisabled}
          checked={weddingIsChecked}
          onChange={submitWeddingClick}
        />
        <label
          className="checkbox-label"
          htmlFor="wedding"
        >
          Свадебная
        </label>

        <input
          type="checkbox"
          name="type-of-shooting"
          id="love-story"
          className="checkbox"
          disabled={photoTypeDisabled}
          checked={loveStoryIsChecked}
          onChange={submitLoveStoryClick}
        />
        <label
          className="checkbox-label"
          htmlFor="love-story"
        >
          {' '}
          Love Story
        </label>

        <input
          type="checkbox"
          name="type-of-shooting"
          id="individual"
          className="checkbox"
          disabled={photoTypeDisabled}
          checked={individualIsChecked}
          onChange={submitIndividualClick}
        />
        <label
          className="checkbox-label"
          htmlFor="individual"
        >
          {' '}
          Индивидуальная
        </label>

        <input
          type="checkbox"
          name="type-of-shooting"
          id="family"
          className="checkbox"
          disabled={photoTypeDisabled}
          checked={familyIsChecked}
          onChange={submitFamilyClick}
        />
        <label
          className="checkbox-label"
          htmlFor="family"
        >
          {' '}
          Семейная
        </label>

        <input
          type="checkbox"
          name="type-of-shooting"
          id="fashion"
          className="checkbox"
          disabled={photoTypeDisabled}
          checked={fashionIsChecked}
          onChange={submitFashionClick}
        />
        <label
          className="checkbox-label"
          htmlFor="fashion"
        >
          {' '}
          Fashion{' '}
        </label>

        <input
          type="checkbox"
          name="type-of-shooting"
          id="pets"
          className="checkbox"
          disabled={photoTypeDisabled}
          checked={petsIsChecked}
          onChange={submitPetsClick}
        />
        <label
          className="checkbox-label"
          htmlFor="pets"
        >
          Питомцы
        </label>

        <input
          type="checkbox"
          name="type-of-shooting"
          id="interview"
          className="checkbox"
          disabled={videoTypeDisabled}
          checked={interviewIsChecked}
          onChange={submitInterviewClick}
        />
        <label
          className="checkbox-label"
          htmlFor="interview"
        >
          {' '}
          Интервью{' '}
        </label>

        <input
          type="checkbox"
          name="type-of-shooting"
          id="aerial"
          className="checkbox"
          disabled={videoTypeDisabled}
          checked={aerialIsChecked}
          onChange={submitAerialClick}
        />
        <label
          className="checkbox-label"
          htmlFor="aerial"
        >
          {' '}
          Аэросъемка{' '}
        </label>

        <input
          type="checkbox"
          name="type-of-shooting"
          id="stock"
          className="checkbox"
          disabled={videoTypeDisabled}
          checked={stockIsChecked}
          onChange={submitStockClick}
        />
        <label
          className="checkbox-label"
          htmlFor="stock"
        >
          {' '}
          Стоковая
        </label>

        <input
          type="checkbox"
          name="type-of-shooting"
          id="clips"
          className="checkbox"
          disabled={videoTypeDisabled}
          checked={clipsIsChecked}
          onChange={submitClipsClick}
        />
        <label
          className="checkbox-label"
          htmlFor="clips"
        >
          {' '}
          Клипы
        </label>
      </fieldset>

      <p className="filter__category">стоимость</p>

      <div className="slider">
        <div className="slider__container">
          <div className="slider-range">
            <div className="slider-range__track"></div>
            <input
              type="range"
              name="min-cost"
              min="50"
              max="2500"
              step="50"
              value={minCost}
              id="slider-1"
              onChange={e => sliderOne(e)}
              onClick={e => triggeredSubmit()}
              className="slider__input"
            />

            <input
              type="range"
              name="max-cost"
              min="50"
              max="2500"
              step="50"
              value={maxCost}
              id="slider-2"
              onChange={e => sliderTwo(e)}
              onClick={e => triggeredSubmit()}
              className="slider__input"
            />
          </div>
          <div className="slider__values">
            <div className="values__container">
              <p className="values__info">от</p>
              <input
                type="number"
                min="50"
                max="2500"
                value={minCost}
                onChange={inputMinValue}
                onBlur={e => blurInput(e)}
                id="slider-1-meaning"
                className="meaning__input"
              />
              <p className="values__info">&#8381;</p>
            </div>
            <div className="values__container">
              <p className="values__info">до</p>
              <input
                type="number"
                min="350"
                max="2500"
                value={maxCost}
                onChange={inputMaxValue}
                onBlur={e => blurInput(e)}
                id="slider-2-meaning"
                className="meaning__input"
              />
              <p className="values__info">&#8381;</p>
            </div>
          </div>
          {/* <div ref= {myRef} className="tail"></div> */}
        </div>
      </div>
    </form>
  );
}

export default Filter;
