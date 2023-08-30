import React from "react";
import "./Filter.css"

function Filter() {

  return (

      <form className="filter-form" >
      <p className="filter__type">Сортировка</p>
      <fieldset className="fild">
      
          <input type="radio" name="cost" id="expensive" className="ratio"/>
          <label className="ratio-label" for="expensive">Низкая стоимость</label>
       
          <input type="radio" name="cost" id="cheap" className="ratio"/>
          <label className="ratio-label" for="cheap">Высокая стоимость</label>
        
      </fieldset>

      <p className="filter__type">Фильтры</p>
      <fieldset className="fild">
        <p className="filter__category">специалисты</p>
       
          <input type="radio" name="expert" id="all" className="ratio" />
          <label className="ratio-label" for="all">Все</label>
        
          <input type="radio" name="expert" id="photographer" className="ratio"/>
          <label className="ratio-label" for="photographer">Фотографы</label>
        
        
          <input type="radio" name="expert" id="videographer" className="ratio"/>
          <label className="ratio-label" for="videographer">Видеографы</label>
        
      </fieldset>

      <fieldset className="fild">
        <p className="filter__category">вид съемки</p>
        
          <input type="checkbox" name="type-of-shooting" id="wedding" className="checkbox"/>
          <label className="checkbox-label" for="wedding">Свадебная</label>

          <input type="checkbox" name="type-of-shooting" id="love-story" className="checkbox"/>
          <label className="checkbox-label" for="love-story"> Love Story</label>
       
          <input type="checkbox" name="type-of-shooting" id="individual" className="checkbox"/>
          <label className="checkbox-label" for="individual"> Индивидуальная</label>
        
          <input type="checkbox" name="type-of-shooting" id="family" className="checkbox"/>
         <label className="checkbox-label" for="family"> Семейная</label>
        
    
          <input type="checkbox" name="type-of-shooting" id="fashion" className="checkbox"/>
             <label className="checkbox-label" for="fashion"> Fashion </label>
       
        
          <input type="checkbox" name="type-of-shooting" id="pets" className="checkbox"/>
          <label className="checkbox-label" for="pets">Питомцы</label>
        
        
          <input type="checkbox" name="type-of-shooting" id="interview" className="checkbox"/>
         <label className="checkbox-label" for="interview"> Интервью </label>
       
        
          <input type="checkbox" name="type-of-shooting" id="aerial" className="checkbox"/>
         <label className="checkbox-label" for="aerial"> Аэросъемка </label>
       
        
          <input type="checkbox" name="type-of-shooting" id="stock" className="checkbox"/>
         <label className="checkbox-label" for="stock"> Стоковая</label>
        
        
          <input type="checkbox" name="type-of-shooting" id="clips" className="checkbox"/>
         <label className="checkbox-label" for="clips"> Клипы</label>
        
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