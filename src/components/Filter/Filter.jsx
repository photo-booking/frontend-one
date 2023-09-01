import React from "react";
import "./Filter.css"

function Filter() {

const [minCost, setMinCost] = React.useState('350');
const [maxCost, setMaxCost] = React.useState('2500');
const [info, setInfo] = React.useState({})
const [isChecked, setIsChecked] = React.useState(false);

const form = document.getElementById('form')

function sliderOne(e) {
  if (minCost > +maxCost) {
    setMinCost(e.target.value) 
    setMaxCost(e.target.value)
  } 
     setMinCost(e.target.value)
    //  document.getElementById('slider-1').addEventListener('mouseup', (e) => {submit(e)})
}

function sliderTwo(e) {
  if (minCost > +maxCost) {
    setMinCost(e.target.value) 
    setMaxCost(e.target.value)
  } else {
     setMaxCost(e.target.value) 
  }
   
}

function inputMinValue(e) {  // здесь нет ограничителя вниз... я хз, как его сделать
  setMinCost(e.target.value)
}

function inputMaxValue(e) {
  if (e.target.value > 2500 ) {
    setMaxCost(2500)
  } else {
      setMaxCost(e.target.value)
  }
}

function blurInput(e) {
  submit(e)
}

// отправка по изменению чекбокса
function submitClick() {

  document.getElementById('form').requestSubmit()  //форму оно отправляет. осталось отменить стандартную отправку
}

function submit(e) {
  e.preventDefault(); 
  console.log("info")
}

  return (

      <form className="filter-form" id='form' onSubmit={(e)=> submit(e)} >
      <p className="filter__type">Сортировка</p>
      <fieldset className="fild">
      
          <input type="radio" name="cost" id="expensive" className="ratio" onChange={submitClick} />
          <label className="ratio-label" for="expensive">Низкая стоимость</label>
       
          <input type="radio" name="cost" id="cheap" className="ratio" onChange={submitClick}/>
          <label className="ratio-label" for="cheap">Высокая стоимость</label>
        
      </fieldset>

      <p className="filter__type">Фильтры</p>
      <fieldset className="fild">
        <p className="filter__category">специалисты</p>
       
          <input type="radio" name="expert" id="all" className="ratio" onChange={submitClick}/>
          <label className="ratio-label" for="all">Все</label>
        
          <input type="radio" name="expert" id="photographer" className="ratio" onChange={submitClick}/>
          <label className="ratio-label" for="photographer">Фотографы</label>
        
        
          <input type="radio" name="expert" id="videographer" className="ratio" onChange={submitClick}/>
          <label className="ratio-label" for="videographer">Видеографы</label>
        
      </fieldset>

      <fieldset className="fild">
        <p className="filter__category">вид съемки</p>
        
          <input type="checkbox" name="type-of-shooting" id="wedding" className="checkbox" onChange={submitClick}/>
          <label className="checkbox-label" for="wedding">Свадебная</label>

          <input type="checkbox" name="type-of-shooting" id="love-story" className="checkbox" onChange={submitClick} />
          <label className="checkbox-label" for="love-story"> Love Story</label>
       
          <input type="checkbox" name="type-of-shooting" id="individual" className="checkbox" onChange={submitClick}/>
          <label className="checkbox-label" for="individual"> Индивидуальная</label>
        
          <input type="checkbox" name="type-of-shooting" id="family" className="checkbox" onChange={submitClick}/>
         <label className="checkbox-label" for="family"> Семейная</label>
        
    
          <input type="checkbox" name="type-of-shooting" id="fashion" className="checkbox" onChange={submitClick}/>
             <label className="checkbox-label" for="fashion"> Fashion </label>
       
        
          <input type="checkbox" name="type-of-shooting" id="pets" className="checkbox" onChange={submitClick}/>
          <label className="checkbox-label" for="pets">Питомцы</label>
        
        
          <input type="checkbox" name="type-of-shooting" id="interview" className="checkbox" onChange={submitClick}/>
         <label className="checkbox-label" for="interview"> Интервью </label>
       
        
          <input type="checkbox" name="type-of-shooting" id="aerial" className="checkbox" onChange={submitClick}/>
         <label className="checkbox-label" for="aerial"> Аэросъемка </label>
       
        
          <input type="checkbox" name="type-of-shooting" id="stock" className="checkbox" onChange={submitClick}/>
         <label className="checkbox-label" for="stock"> Стоковая</label>
        
        
          <input type="checkbox" name="type-of-shooting" id="clips" className="checkbox" onChange={submitClick}/>
         <label className="checkbox-label" for="clips"> Клипы</label>
        
      </fieldset>

  <p className="filter__category">стоимость</p> 
     
      <div className="slider">
        <div className="slider__container">

          <div className="slider-range"> 
            <div className="slider-range__track"></div>
            <input 
              type="range" 
              min="350" max="2500" step="50"
              value={minCost} 
              id="slider-1" 
              onChange= {(e)=>sliderOne(e)}
              onClick={(e) => submit(e)}
              className="slider__input"
              />
            <input 
              type="range" 
              min="350" max="2500" step="50"
              value={maxCost} 
              id="slider-2" 
              onChange= {(e)=>sliderTwo(e)}
              onClick={(e) => submit(e)}
              className="slider__input"/>
          </div>
          <div className="slider__values">
            <div className="values__container">
              <p className="values__info">от</p>
              <input 
                type="text" 
                min="350" max="2500" 
                value={minCost} 
                onChange= {inputMinValue} 
                onBlur={(e) => blurInput(e)}
                id="slider-1-meaning" 
                className="meaning__input"/>
              <p className="values__info">&#8381;</p>
            </div>
            <div className="values__container">
              <p className="values__info">до</p>
              <input 
                type="text" 
                min="350" max="2500" 
                value={maxCost} 
                onChange= {inputMaxValue} 
                onBlur={(e) => blurInput(e)}
                id="slider-2-meaning" 
                className="meaning__input"/>
              <p className="values__info">&#8381;</p>
            </div>
        </div>
      </div>
    </div>
    </form>
  )
}

export default Filter;