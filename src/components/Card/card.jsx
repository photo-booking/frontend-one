import { useNavigate } from 'react-router-dom'
import './card.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export const Card = ({user}) => {

    const mediafiles = [
        {
            id: "102",
            author: "Ben Moore",
            width: 4320,
            height: 3240,
            url: "https://unsplash.com/photos/pJILiyPdrXI",
            download_url: "https://picsum.photos/id/102/4320/3240"
          },
          {
            id: "103",
            author: "Ilham Rahmansyah",
            width: 2592,
            height: 1936,
            url: "https://unsplash.com/photos/DwTZwZYi9Ww",
            download_url: "https://picsum.photos/id/103/2592/1936"
          },
          {
            id: "104",
            author: "Dyaa Eldin",
            width: 3840,
            height: 2160,
            url: "https://unsplash.com/photos/2fl-ocJ5MOA",
            download_url: "https://picsum.photos/id/104/3840/2160"
          },
          {
            id: "106",
            author: "Arvee Marie",
            width: 2592,
            height: 1728,
            url: "https://unsplash.com/photos/YnfGtpt2gf4",
            download_url: "https://picsum.photos/id/106/2592/1728"
          }
    ];

    const navigate = useNavigate();
    const navigateProfile = (event) => {
      navigate('/card/1');
    };


    return (
        <section className="card">
            <div className='card__portfolio'>
                {/* <Carousel
                className = "crsl"
                centerMode
                interval={1000}
                infiniteLoop
                axis = 'horizontal'
                showThumbs={false}
        
                > */}
                    {/* {mediafiles.map((image) => ( */}
                        <img className='card__portfolio_item' src={user.portfolio} />
                    {/* ))} */}
                {/* </Carousel>                */}
            </div>

            <div className='card__about'>
                <div className='card__about_profile'>
                    <div className='card__about_info' onClick={navigateProfile}>
                        <p className='card__about_name'>{user.name}</p>
                        <p className='card__about_profession'>{user.profession}</p>
                    </div>
                    <div className='card__avatar_box'>
                        <img className='card__avatar' src={user.avatar} />
                    </div>
                </div>
                <p className='card__about-me'>{user.about}</p>
                <p className='card__price'>от {user.price}₽/час </p>
            </div>
        </section>
    )
}