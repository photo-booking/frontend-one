import './dropdownlist.css';
import { v4 as uuidv4 } from 'uuid';
import downicon from '../../../../images/dropdown-down.svg';
import upicon from '../../../../images/dropdown-up.svg';
import photoicon from '../../../../images/worker icon_photo.svg'
import { useEffect, useState } from 'react';

export const DropDownList = () => {

    const videoItems = [
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

    const photoItems = [
        'Свадебная',
        'Love Story',
        'Индивидуальная',
        'Семейная',
        'Fashion',
        'Питомцы'
    ];

    const [isClickDropDown, setIsClickDropDown] = useState(false);

    const handleClickDropDown = (event) => {
        event.preventDefault();
        setIsClickDropDown(!isClickDropDown);
    }

    const defaultText = 'Отметьте галочкой карточку(и) для выбора вида съёмки';
    const clickText = 'Выберите вид съёмки';

    const [isClickDropDownItem, setIsClickDropDownItem] = useState(null);

    const handkeClickDropDownItems = () => {
        document.querySelectorAll('.dropdownlist__list_item').forEach(function (item) {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                const text = this.lastChild.textContent;
                const button = document.querySelector('.dropdownlist__text_default');
                button.textContent = text;
                setIsClickDropDownItem(text);
                handleClickDropDown(e);
            })
        })
    };


    useEffect(() => {
        handkeClickDropDownItems()
    })

    const disabledButton = () => {
        const button = document.querySelector('.dropdownlist__apply');
        if (isClickDropDownItem !== null) {
            button.disabled = false
        }
    }
    disabledButton();

    const handleSubmitForm = (e) => {
        e.preventDefault()
    }


    return (
        <>
            <form className='dropdownlist_form' onClick={handleSubmitForm}>
                <div className='dropdownlist__container'>
                    <button className='dropdownlist' onClick={handleClickDropDown}>
                        <div className='dropdownlist__content'>
                            <img className={(isClickDropDownItem !== null && !isClickDropDown) ? 'dropdownlist__list_photo_icon' : 'dropdownlist__visible' } src={photoicon} />
                            <p className='dropdownlist__text_default'>
                                {isClickDropDown ?
                                    clickText :
                                    (isClickDropDownItem !== null) ?
                                        isClickDropDownItem :
                                        defaultText}
                            </p>
                        </div>
                        <img src={isClickDropDown ? upicon : downicon} />
                    </button>

                    <ul className={isClickDropDown ? 'dropdownlist__list_container_active' : 'dropdownlist__list_container'}>
                        {videoItems.map(item => (
                            <li className='dropdownlist__list_item' key={uuidv4()}>
                                <img className='dropdownlist__list_photo_icon' src={photoicon} />
                                <p className='dropdownlist__list_photo_text'>{item}</p>
                            </li>
                        ))}
                    </ul>

                </div>
                <button type='submit' disabled className='dropdownlist__apply'>Применить</button>

            </form>
        </>
    )
}