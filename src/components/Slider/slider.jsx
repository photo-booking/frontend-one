import './slider.css';
import sliderLeft from '../../images/Slider-Left-arrow.svg';
import sliderRight from '../../images/Slider-Right-arrow.svg';
import { ChevronLeft, ChevronRight } from 'react-feather';


export const Slider = ({ children }) => {

    return (
        <div className='slider__container'>
            <div className="slider">
                {children}
            </div>
            <div className='slider__button_container'>
                <button className='slider__button'>
                    <ChevronLeft className='slider__button_image' />
                </button>
                <button className='slider__button'>
                    <ChevronRight className='slider__button_image' />
                </button>
            </div>
        </div>
    );

}