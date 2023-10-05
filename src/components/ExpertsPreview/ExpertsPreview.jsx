import './ExpertsPreview.css';
import { ExpertCard } from '../../components/ExpertCard/ExpertCard';
import { Link } from 'react-router-dom';

export const ExpertsPreview = () => {
    return (
        <section className='experts-preview'>
            <h1 className='experts-preview__title'>1370 фотографов и видеооператоров</h1>
            <div className='experts-preview__container'>
                <ExpertCard />
                <ExpertCard />
                <ExpertCard />
                <ExpertCard />
                <ExpertCard />
            </div>
            <div className='experts-preview__scroll'>
                <div className='experts-preview__scroll-line'></div>
            </div>
            <Link to='/catalog' className='experts-preview__link-btn'>
                <button className='experts-preview__btn'>Посмотреть всех специалистов</button>
            </Link>
        </section>
    )
}