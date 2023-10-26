import { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams, Link } from 'react-router-dom';

import icon_telephone from '../../images/contact icons_telephone.svg';
import icon_telegram from '../../images/contact icons _telegram.svg';
import icon_email from '../../images/contact icons_email.svg';
import defaultAvatar from '../../images/Avatar.svg';

import './AboutMe.css';

export const AboutMe = props => {
  const navigate = useNavigate();
  const location = useLocation();
  const param = useParams();
  const baseUrl = 'https://photomarket.sytes.net';
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isLinkCopy, setIsLinkCopy] = useState(false);
  const [overlayAbout, setOverlayAbout] = useState(false);

  const listener = () => {
    const overlay = document.getElementById('about-me-overlay');
    overlay.style.display = overlayAbout ? 'none' : 'block';
    setIsContactOpen(!isContactOpen);
  };
  useEffect(() => {
    const overlay = document.getElementById('about-me-overlay');
    overlay.addEventListener('click', listener);
    return () => overlay.removeEventListener('click', listener);
  }, [overlayAbout]);

  const handleContactOpen = () => {
    const overlay = document.getElementById('about-me-overlay');
    overlay.style.display = 'block';
    setOverlayAbout(true);
    setIsContactOpen(!isContactOpen);
  };

  const handleShareOpen = () => {
    setIsShareOpen(!isShareOpen);
  };
  const copyLink = () => {
    const url = `${baseUrl}${location.pathname}`;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        console.log('copy');
        setIsLinkCopy(true);
        setTimeout(() => {
          setIsLinkCopy(false);
        }, 2000);
      })
      .catch(() => {
        console.log('copy error');
        setIsLinkCopy(false);
      });
  };
  const sharePostInVk = url => {
    return `https://vk.com/share.php?title=lense/hire твой фото- и видеооператор онлайн!&url=${encodeURI(
      url
    )}`;
  };
  const shareInTelegram = url => {
    return `https://telegram.me/share/url?url=${url}&text=lense/hire твой фото- и видеооператор онлайн!`; //Надо добавить заголовки в метаданные
  };
  const navigateToChat = id => {
    navigate(`/expert/${id}/chat`);
  };
  const contactMenuClassName = `about-me__contact-container ${
    isContactOpen ? 'about-me__contact-container_visible' : ''
  }`;
  const shareButtonClassname = `${
    isShareOpen ? 'about-me__button-share_hidden' : 'about-me__button-share'
  } `;
  const shareMenuClassName = `about-me__share-container ${
    isShareOpen ? 'about-me__share-container_visible' : ''
  }`;
  const copyMessageClassName = `about-me__copy-message ${
    isLinkCopy ? 'about-me__copy-message_visible' : ''
  }`;

  return (
    <article className="about-me">
      <div id="about-me-overlay" />
      <button
        className="about-me__button"
        onClick={() => navigate(-1)}
      />
      <div className="about-me__container">
        <div className=" about-me__container-info">
          <div className=" about-me__container-title">
            <h1 className="about-me__title">
              {props.name} {props.surname}
            </h1>
            {props.isPhotografer && <span className="about-me__icon about-me__icon_photo" />}
            {props.isVideoOperator && <span className="about-me__icon about-me__icon_video" />}
          </div>
          {/* <p className="about-me__subtitle">Москва</p> */}
          <div className="about-me__info">
            <h2 className="about-me__subtitle">Обо мне</h2>
            <p className="about-me__text">{props.aboutMe}</p>
          </div>
          <div className="about-me__info">
            <h2 className="about-me__subtitle">Оборудование</h2>
            <p className="about-me__text">{props.equipment}</p>
          </div>
          {/* Кнопки и менюшка с контактами */}
          <div className="about-me__container-contact">
            {props.loggedIn && (
              <button
                className="about-me__button-chat"
                onClick={() => navigateToChat(param.id)}
              >
                Написать
              </button>
            )}
            {props.loggedIn && (
              <article className="about-me__article-contact">
                <button
                  className="about-me__button-contact"
                  onClick={handleContactOpen}
                >
                  Показать контакты
                </button>
                <div className={contactMenuClassName}>
                  {props.phone && (
                    <span className="about-me__contact-span">
                      <img
                        className="about-me__contact-icon"
                        src={icon_telephone}
                        alt=""
                      />
                      <p className="about-me__contact">{props.phone}</p>
                    </span>
                  )}
                  {props.telegram && (
                    <span className="about-me__contact-span">
                      <img
                        className="about-me__contact-icon"
                        src={icon_telegram}
                        alt=""
                      />
                      <p className="about-me__contact">{props.telegram}</p>
                    </span>
                  )}
                  {props.email && (
                    <span className="about-me__contact-span">
                      <img
                        className="about-me__contact-icon"
                        src={icon_email}
                        alt=""
                      />
                      <p className="about-me__contact">{props.email}</p>
                    </span>
                  )}
                </div>
              </article>
            )}
            {/* Кнопка и менюшка поделиться */}
            <article className="about-me__article-share">
              <button
                className={shareButtonClassname}
                onClick={handleShareOpen}
              />
              <div className={shareMenuClassName}>
                <button
                  className="about-me__button-close"
                  onClick={handleShareOpen}
                />
                <Link
                  to={sharePostInVk(`${baseUrl}${location.pathname}`)}
                  target="_blank"
                  className="about-me__share-link about-me__share-link_vk"
                ></Link>

                <Link
                  to={shareInTelegram(`${baseUrl}${location.pathname}`)}
                  target="_blank"
                  className="about-me__share-link about-me__share-link_telegram"
                ></Link>

                <button
                  className="about-me__button-copy"
                  onClick={copyLink}
                />
              </div>
              <span className={copyMessageClassName}>Ссылка скопирована</span>
            </article>
          </div>
        </div>
        <figure className="about-me__avatar">
          <img
            src={props.photo != null ? props.photo : defaultAvatar}
            className="about-me__avatar-image"
            alt=""
          />
        </figure>
      </div>
    </article>
  );
};
