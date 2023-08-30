import React from "react";
import "./Filter.css"

function Filter() {

  return (

      <form className="filter-form" >
      <p className="filter__type">Сортировка</p>
      <fieldset className="fild">
      <label className="input">
          <input type="radio" name="cost" />
          Низкая стоимость
        </label>
        <label className="input">
          <input type="radio" name="cost" />
          Высокая стоимость
        </label>
      </fieldset>

      <p className="filter__type">Фильтры</p>
      <fieldset className="fild">
        <p className="filter__category">специалисты</p>
        <label className="input">
          <input type="radio" name="filter" />
          Все
        </label>
        <label className="input">
          <input type="radio" name="filter" />
          Фотографы
        </label>
        <label className="input">
          <input type="radio" name="filter" />
          Видеографы
        </label>
      </fieldset>

      <fieldset className="fild">
        <p className="filter__category">вид съемки</p>
        <label className="input">
          <input type="checkbox" name="type-of-shooting" />
          Свадебная
        </label>
        <label className="input">
          <input type="checkbox" name="type-of-shooting" />
          Love Story
        </label>
        <label className="input">
          <input type="checkbox" name="type-of-shooting" />
          Индивидуальная
        </label>
        <label className="input">
          <input type="checkbox" name="type-of-shooting" />
          Семейная
        </label>
        <label className="input">
          <input type="checkbox" name="type-of-shooting" />
          Fashion
        </label>
        <label className="input">
          <input type="checkbox" name="type-of-shooting" />
          Питомцы
        </label>
        <label className="input">
          <input type="checkbox" name="type-of-shooting" />
          Интервью
        </label>
        <label className="input">
          <input type="checkbox" name="type-of-shooting" />
          Аэросъемка
        </label>
        <label className="input">
          <input type="checkbox" name="type-of-shooting" />
          Стоковая
        </label>
        <label className="input">
          <input type="checkbox" name="type-of-shooting" />
          Клипы
        </label>
      </fieldset>

  <p className="filter__category">стоимость</p> 
     
      <div class="slider">
        {/* <div class="slider__values">
            <span id="range1">
                350
            </span>
            <span> &dash; </span>
            <span id="range2">
                2500
            </span>
        </div> */}
        <div class="slider__container">

          <div className="slider-range"> 
            <div class="slider-range__track"></div>
            {/* <div class="slider-range__track slider-range__track_active"></div> */}
            <input type="range" min="350" max="2500" value="500" id="slider-1" oninput="slideOne()" className="slider__input"/>
            <input type="range" min="350" max="2500" value="2000" id="slider-2" oninput="slideTwo()" className="slider__input"/>
          </div>
          <div class="slider__values">
            <div className="values__container">
              <p className="values__info">от</p>
              <input type="text" min="350" max="2500" value="350" id="slider-1-meaning" className="meaning__input"/>
              <p className="values__info">&#8381;</p>
            </div>
            <div className="values__container">
              <p className="values__info">до</p>
              <input type="text" min="350" max="2500" value="2500" id="slider-2-meaning" className="meaning__input"/>
              <p className="values__info">&#8381;</p>
            </div>
        </div>
      </div>
    </div>

    </form>
  )
}

export default Filter;