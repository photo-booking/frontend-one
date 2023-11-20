import './ProfileNav.css';
import React from 'react';
import { Contacts } from '../../pages/PersonalArea/Contacts/Contacts';
import { DeleteAccount } from '../../pages/PersonalArea/DeleteAccount/DeleteAccount';
import { Notice } from '../../pages/PersonalArea/Notice/Notice';
import { Password } from '../../pages/PersonalArea/Password/Password';
import { PersonalInfo } from '../../pages/PersonalArea/PersonalInfo/PersonalInfo';
import { Portfolio } from '../../pages/PersonalArea/Portfolio/Portfolio';
import { PriceList } from '../../pages/PersonalArea/PriceList/PriceList';
import { VipSubscription } from '../../pages/PersonalArea/VipSubscription/VipSubscription';
import { ProfileReviews } from '../ProfileReviews/ProfileReviews';
import { OrderServices } from '../../pages/OrderServices/OrderServices';

export const ProfileNav = props => {
  const {
    isClient,
    onSubmitPersonalInfo,
    onSubmitPersonalAvatar,
    onSubmitPersonalContacts,
    onDeletePersonalAvatar,
    onSubmitPersonalPassword,
    onSubmitDeleteAccount
  } = props;

  //   Верхняя навигация
  const [profile, setProfile] = React.useState(true);
  const [settings, setSettings] = React.useState(false);
  const [orders, setOrders] = React.useState(false);
  const [review, setReview] = React.useState(false);

  //   Боковая навигация - Профиль
  const [personalInfo, setPersonalInfo] = React.useState(true);
  const [contacts, setContacts] = React.useState(false);
  const [portfolio, setPortfolio] = React.useState(false);
  const [priceList, setPriceList] = React.useState(false);

  //   Боковая навигация - Настройки
  const [password, setPassword] = React.useState(true);
  const [notice, setNotice] = React.useState(false);
  const [vipSubscription, setVipSubscription] = React.useState(false);
  const [deleteAccount, setdeleteAccount] = React.useState(false);

  // Модальное окно - Изменения соранены
  const [isSavePopupOpen, setIsSavePopupOpen] = React.useState(false);

  const buttonClassName = param => {
    return `profile-nav__btn ${param ? 'profile-nav__btn_active' : ''}`;
  };
  const sideNavButtonClassName = param => {
      return `profile-nav__side-nav-btn ${param ? 'profile-nav__side-nav-btn_active' : ''}`;
  };
const deleteSideNavButtonClassName = param => {
  return `profile-nav__side-nav-btn profile-nav__side-nav-btn_delete ${
    param ? 'profile-nav__side-nav-btn_delete-active' : ''
  }`;
}

  return (
    <section className="profile-nav">
      {/* Верхняя навигация  */}
      <nav className="profile-nav__container">
        <ul className="profile-nav__list">
          <li className="profile-nav__item">
            <button
              className={buttonClassName(profile)}
              onClick={() => {
                setProfile(true);
                setSettings(false);
                setOrders(false);
                setReview(false);
              }}
            >
              Профиль
            </button>
          </li>
          <li className="profile-nav__item">
            <button
              className={buttonClassName(settings)}
              onClick={() => {
                setProfile(false);
                setSettings(true);
                setOrders(false);
                setReview(false);
              }}
            >
              Настройки
            </button>
          </li>
          <li className="profile-nav__item">
            <button
              className={buttonClassName(orders)}
              onClick={() => {
                setProfile(false);
                setSettings(false);
                setOrders(true);
                setReview(false);
              }}
            >
              Заказы
            </button>
          </li>
          {!isClient ? (
            <li className="profile-nav__item">
              <button
                className={buttonClassName(review)}
                onClick={() => {
                  setProfile(false);
                  setSettings(false);
                  setOrders(false);
                  setReview(true);
                }}
              >
                Отзывы
              </button>
            </li>
          ) : (
            <></>
          )}
        </ul>
      </nav>
      <section className="profile-nav__content">
        {/* для Профиля  */}
        {profile ? (
          <nav className="profile-nav__side-nav">
            <ul className="profile-nav__list profile-nav__list_column">
              <li className="profile-nav__side-item">
                <button
                  className={sideNavButtonClassName(personalInfo)}
                  onClick={() => {
                    setPersonalInfo(true);
                    setContacts(false);
                    setPortfolio(false);
                    setPriceList(false);
                  }}
                >
                  Личная информация
                </button>
              </li>
              {!isClient ? (
                <>
                  <li className="profile-nav__side-item">
                    <button
                      className={sideNavButtonClassName(contacts)}
                      onClick={() => {
                        setPersonalInfo(false);
                        setContacts(true);
                        setPortfolio(false);
                        setPriceList(false);
                      }}
                    >
                      Контакты
                    </button>
                  </li>
                  <li className="profile-nav__side-item">
                    <button
                      className={sideNavButtonClassName(portfolio)}
                      onClick={() => {
                        setPersonalInfo(false);
                        setContacts(false);
                        setPortfolio(true);
                        setPriceList(false);
                      }}
                    >
                      Портфолио
                    </button>
                  </li>
                  <li className="profile-nav__side-item">
                    <button
                      className={sideNavButtonClassName(priceList)}
                      onClick={() => {
                        setPersonalInfo(false);
                        setContacts(false);
                        setPortfolio(false);
                        setPriceList(true);
                      }}
                    >
                      Прайс-лист
                    </button>
                  </li>
                </>
              ) : (
                <></>
              )}
            </ul>
          </nav>
        ) : (
          <></>
        )}
        {/* для Настроек  */}
        {settings ? (
          <nav className="profile-nav__side-nav">
            <ul className="profile-nav__list profile-nav__list_column">
              <li className="profile-nav__side-item">
                <button
                  className={sideNavButtonClassName(password)}
                  onClick={() => {
                    setPassword(true);
                    setNotice(false);
                    setVipSubscription(false);
                    setdeleteAccount(false);
                  }}
                >
                  Пароль
                </button>
              </li>
              <li className="profile-nav__side-item">
                <button
                  className={sideNavButtonClassName(notice)}
                  onClick={() => {
                    setPassword(false);
                    setNotice(true);
                    setVipSubscription(false);
                    setdeleteAccount(false);
                  }}
                >
                  Уведомления
                </button>
              </li>
              {!isClient ? (
                <li className="profile-nav__side-item">
                  <button
                    className={sideNavButtonClassName(vipSubscription)}
                    onClick={() => {
                      setPassword(false);
                      setNotice(false);
                      setVipSubscription(true);
                      setdeleteAccount(false);
                    }}
                  >
                    Премиум подписка
                  </button>
                </li>
              ) : (
                <></>
              )}
              <li className="profile-nav__side-item">
                <button
                  className={deleteSideNavButtonClassName(deleteAccount)}
                  onClick={() => {
                    setPassword(false);
                    setNotice(false);
                    setVipSubscription(false);
                    setdeleteAccount(true);
                  }}
                >
                  Удалить аккаунт
                </button>
              </li>
            </ul>
          </nav>
        ) : (
          <></>
        )}
        {/* для Заказов */}
        {orders ? <OrderServices /> : <></>}
        {/* для Отзывов */}
        {review ? <ProfileReviews /> : <></>}
        {/* Отображение компонентов - Профиль*/}
        {profile && personalInfo ? (
          <PersonalInfo
            isClient={isClient}
            onSubmitPersonalInfo={onSubmitPersonalInfo}
            onSubmitPersonalAvatar={onSubmitPersonalAvatar}
            onDeletePersonalAvatar={onDeletePersonalAvatar}
            isSavePopupOpen={isSavePopupOpen}
            setIsSavePopupOpen={setIsSavePopupOpen}
          />
        ) : (
          <></>
        )}
        {profile && contacts ? (
          <Contacts
            onSubmitPersonalContacts={onSubmitPersonalContacts}
            isSavePopupOpen={isSavePopupOpen}
            setIsSavePopupOpen={setIsSavePopupOpen}
          />
        ) : (
          <></>
        )}
        {profile && portfolio ? <Portfolio /> : <></>}
        {profile && priceList ? <PriceList /> : <></>}
        {/* Отображение компонентов - Настройки*/}
        {settings && password ? (
          <Password
            onSubmitPersonalPassword={onSubmitPersonalPassword}
            isSavePopupOpen={isSavePopupOpen}
            setIsSavePopupOpen={setIsSavePopupOpen}
          />
        ) : (
          <></>
        )}
        {settings && notice ? (
          <Notice
            isSavePopupOpen={isSavePopupOpen}
            setIsSavePopupOpen={setIsSavePopupOpen}
          />
        ) : (
          <></>
        )}
        {settings && vipSubscription ? <VipSubscription /> : <></>}


        {settings && deleteAccount ? (
          <DeleteAccount onSubmitDeleteAccount={onSubmitDeleteAccount} />
        ) : (
          <></>
        )}

      </section>
    </section>
  );
};
