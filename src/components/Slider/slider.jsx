import './slider.css';
import sliderLeft from '../../images/Slider-Left-arrow.svg';
import sliderRight from '../../images/Slider-Right-arrow.svg';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { useState } from 'react';


export const Slider = ({ children: slides }) => {
    console.log(slides.length, 'lenght');
    console.log(slides, 'djdjdjdjdj');

    const [current, setCurrent] = useState(0);
    const prev = () => {
        setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1))
    }
    const next = () => {
        setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1))
    }

    return (
        <div className='slider__container'>
            <div className="slider" style={{transform: `translateX(-${current * 100}%)`}}>
                {slides}
            </div>
            <div className='slider__button_container'>
                <button className='slider__button' onClick={prev}>
                    <ChevronLeft className='slider__button_image' />
                </button>
                <button className='slider__button' onClick={next}>
                    <ChevronRight className='slider__button_image' />
                </button>
            </div>
        </div>
    );

}