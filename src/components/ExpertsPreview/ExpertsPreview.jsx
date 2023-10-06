import './ExpertsPreview.css';
import { v4 as uuidv4 } from 'uuid';
import { ExpertCard } from '../../components/ExpertCard/ExpertCard';
import { Link } from 'react-router-dom';

export const ExpertsPreview = (props) => {
    return (
        <section className='experts-preview'>
            <h1 className='experts-preview__title'>{props.catalogTitle}</h1>
            <div className='experts-preview__container'>
                {props.expertsPreview.results.map((expert) => (
                    <ExpertCard
                        key={uuidv4()}
                        expert={expert}
                    />
                ))}
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