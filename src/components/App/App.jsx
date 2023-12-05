import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { ProtectedRoute } from '../ProtectedRoute';
import './App.css';

import {
  register,
  login,
  resetPassword,
  sendEmailToResetPassword,
  getUserInfo,
  checkToken,
  logOut,
  loginGoogle,
  loginVk,
  updatePersonalInfo,
  updatePersonalAvatar,
  updatePersonalContacts,
  deletePersonalAvatar,
  updatePersonalPassword,
  deleteAccount
} from '../../utils/auth';

import { getAmountExpert, getExpertReviews } from '../../utils/api';

import { Signin } from '../../pages/Signin/Signin';
import { Signup } from '../../pages/Signup/Signup';
import { ResetPassword } from '../../pages/ResetPassword/ResetPassword';
import { CatalogExperts } from '../../pages/CatalogExperts/CatalogExperts';
import { Profile } from '../../pages/Profile/Profile';
import { Landing } from '../../pages/Landing/Landing';
import { PersonalArea } from '../../pages/PersonalArea/PersonalArea';

import { Page404 } from '../../pages/404/404';
import { HeaderMain } from '../Header-main/header-main';
import { Footer } from '../Footer/footer';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../../services/redusers/users';
import { ExpertChat } from '../../pages/ExpertChat/ExpertChat';

export function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isClient, setIsClient] = useState(undefined);
  const [isEmailSend, setIsEmailSend] = useState(false); //false
  const [isPasswordReset, setIsPasswordReset] = useState(false); //false
  const [errMessage, setErrorMessage] = useState(undefined);
  const [amountExpert, setAmountExpert] = useState(undefined);
  const [isLoader, setIsLoader] = useState(false);
  const [reviews, setReviews] = useState({});
  const navigate = useNavigate();

  const dispatch = useDispatch();
  let { pathname } = useLocation();

  const paddingPage =
    pathname === '/catalog' ||
    pathname === '/sign-in' ||
    pathname === '/sign-up' ||
    pathname === '/personal/:id' ||
    pathname === '/card/:id' ||
    pathname === '/expert/:id/chat' ||
    pathname === '/client/:id/chat' ||
    pathname === '/reset-password';
  const isRoot = pathname === '/';
  const visibleFooter = isRoot || paddingPage;

  const onSubmitSignin = values => {
    login(values)
      .then(res => {
        const jwt = localStorage.getItem('token');
        getUserInfo(jwt)
          .then(res => {
            setCurrentUser(res);
            setIsClient(res.is_client);
            setLoggedIn(true);
            navigate('/catalog');
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
        setErrorMessage(err.non_field_errors[0]);
        setLoggedIn(false);
      });
  };

  const onSubmitSignup = (values, status) => {
    register(values, status)
      .then(() => {
        onSubmitSignin(values);
      })
      .catch(err => {
        setErrorMessage(Object.values(err)[0][0]);
        setLoggedIn(false);
      });
  };

  const signOut = () => {
    const jwt = localStorage.getItem('token');
    logOut(jwt).then(() => {
      setLoggedIn(false);
      localStorage.removeItem('token');
      setCurrentUser({});
      navigate('/catalog');
    });
  };

  const onSubmitJoin = values => {
    if (values.type === 'client') {
      setIsClient(true);
    } else {
      setIsClient(false);
    }
  };

  const onSubmitSendEmailToResetPassword = values => {
    console.log(values);
    setIsEmailSend(false);
    sendEmailToResetPassword(values)
      .then(res => {
        console.log(res);
        setIsEmailSend(true);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onSubmitResetPassword = (values, param) => {
    setIsPasswordReset(false);
    resetPassword(values, param)
      .then(res => {
        console.log(res);
        setIsPasswordReset(true);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onSubmitPersonalInfo = values => {
    const jwt = localStorage.getItem('token');
    updatePersonalInfo(values, jwt)
      .then(res => {
        console.log(res);
        setCurrentUser(res);
      })
      .catch(err => console.log(err));
  };

  const onSubmitPersonalAvatar = (value, type) => {
    const jwt = localStorage.getItem('token');
    updatePersonalAvatar(value, type, jwt)
      .then(res => {
        console.log(res);
        setCurrentUser(res);
      })
      .catch(err => console.log(err));
  };

  const onDeletePersonalAvatar = () => {
    const jwt = localStorage.getItem('token');
    deletePersonalAvatar(jwt)
      .then(res => {
        console.log(res);
        setCurrentUser(res);
      })
      .catch(err => console.log(err));
  };

  const onSubmitPersonalContacts = values => {
    const jwt = localStorage.getItem('token');
    updatePersonalContacts(values, jwt)
      .then(res => {
        console.log(res);
        setCurrentUser(res);
      })
      .catch(err => console.log(err));
  };

  const onSubmitPersonalPassword = values => {
    const jwt = localStorage.getItem('token');
    updatePersonalPassword(values, jwt)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  const onSubmitDeleteAccount = () => {
    const jwt = localStorage.getItem('token');
    const id = currentUser.id;
    console.log(jwt, id);
    deleteAccount(jwt, id)
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  const tokenCheck = () => {
    setIsLoader(true);
    const jwt = localStorage.getItem('token');
    if (jwt) {
      checkToken(jwt)
        .then(res => {
          const userInfo = res;
          setCurrentUser(userInfo);
          setLoggedIn(true);
        })
        .catch(err => {
          console.log('Ошибка:' + err);
          localStorage.removeItem('token');
          setLoggedIn(false);
        })
        .finally(() => setIsLoader(false));
    } else { setLoggedIn(false) };
  };

  const onStartCatalog = () => {
    getAmountExpert()
      .then(res => {
        setAmountExpert(res.total_spec_user);
      })
      .catch(err => {
        console.log('Ошибка:' + err.detail);
      });
  };

  const signinGoogle = (param, status) => {
    loginGoogle(param, status)
      .then(res => {
        const jwt = localStorage.getItem('token');
        getUserInfo(jwt)
          .then(res => {
            console.log(res);
            setCurrentUser(res);
            setIsClient(res.is_client);
            setLoggedIn(true);
            navigate('/catalog');
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  };

  const signinVk = (param, status) => {
    loginVk(param, status)
      .then(res => {
        console.log(res);
        const jwt = localStorage.getItem('token');
        getUserInfo(jwt)
          .then(res => {
            setCurrentUser(res);
            setIsClient(res.is_client);
            setLoggedIn(true);
            navigate('/catalog');
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onGetReviews = expertId => {
    getExpertReviews(expertId)
      .then(res => {
        setReviews(res);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    tokenCheck();
    //при первой загрузке запрашиваем только фотографов, как стоит в сортировке по дефолту
    dispatch(fetchUsers({ spec: 'all', limit: 1, pageSize: '' }));
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className={paddingPage ? 'page' : 'page-landing'}>
        {paddingPage ? (
          <HeaderMain
            isClient={isClient}
            setIsClient={setIsClient}
            loggedIn={loggedIn}
            signOut={signOut}
          ></HeaderMain>
        ) : null}
        <Routes>
          <Route
            path="/"
            element={
              <Landing
                loggedIn={loggedIn}
                signOut={signOut}
                amountExpert={amountExpert}
                onStartCatalog={onStartCatalog}
              />
            }
          />
          <Route
            path="/sign-up"
            element={
              <Signup
                onSubmitSignup={onSubmitSignup}
                onSubmitJoin={onSubmitJoin}
                isClient={isClient}
                setIsClient={setIsClient}
                errMessage={errMessage}
                setErrorMessage={setErrorMessage}
              />
            }
          />
          <Route
            path="/sign-in"
            element={
              <Signin
                onSubmitSignin={onSubmitSignin}
                // onLoginWithSocial={onLoginWithSocial}
                isClient={isClient}
                errMessage={errMessage}
                setErrorMessage={setErrorMessage}
                signinGoogle={signinGoogle}
                signinVk={signinVk}
              />
            }
          />
          <Route
            path="/reset-password"
            element={
              <ResetPassword
                isEmailSend={isEmailSend}
                isPasswordReset={isPasswordReset}
                onSubmitResetPassword={onSubmitResetPassword}
                onSubmitSendEmailToResetPassword={onSubmitSendEmailToResetPassword}
              />
            }
          />
          <Route
            path="/catalog"
            element={
              <CatalogExperts
                amountExpert={amountExpert}
                onStartCatalog={onStartCatalog}
              />
            }
          />
          <Route
            path="/card/:id"
            element={
              <Profile
                loggedIn={loggedIn}
                onGetReviews={onGetReviews}
                reviews={reviews}
              />
            }
          />
          <Route
            path="/personal/:id"
            element={
              <ProtectedRoute
                element={PersonalArea}
                tokenCheck={tokenCheck}
                loggedIn={loggedIn}
                isClient={isClient}
                onSubmitPersonalInfo={onSubmitPersonalInfo}
                onSubmitPersonalAvatar={onSubmitPersonalAvatar}
                onSubmitPersonalContacts={onSubmitPersonalContacts}
                onDeletePersonalAvatar={onDeletePersonalAvatar}
                onSubmitPersonalPassword={onSubmitPersonalPassword}
                onSubmitDeleteAccount={onSubmitDeleteAccount}
              />
            }
          />
          <Route
            path="/expert/:id/chat"
            element={
              <ProtectedRoute
                element={ExpertChat}
                loggedIn={loggedIn}
                tokenCheck={tokenCheck}
              />
            }
          />
          <Route
            path="*"
            element={<Page404 />}
          />
        </Routes>
        {visibleFooter ? <Footer isClient={isClient} /> : null}
      </div>
    </CurrentUserContext.Provider>
  );
}
