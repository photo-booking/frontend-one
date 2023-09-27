import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../context/CurrentUserContext';
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
  loginVk
} from '../../utils/auth';

import { getAmountExpert } from '../../utils/api';

import { Signin } from '../../pages/Signin/Signin';
import { Signup } from '../../pages/Signup/Signup';
import { ResetPassword } from '../../pages/ResetPassword/ResetPassword';
import { CatalogExperts } from '../../pages/CatalogExperts/CatalogExperts';
import { Profile } from '../../pages/Profile/Profile';
import { Landing } from '../../pages/Landing/Landing';
import { ClientAccount } from '../../pages/ClientAccount/ClientAccount';
import { ClientOrders } from '../../pages/ClientOrders/ClientOrders';
import { ExpertAccount } from '../../pages/ExpertAccount/ExpertAccount';
import { ExecutorOrders } from '../../pages/ExpertOrders/ExpertOrders';
import { ExecutorRatings } from '../../pages/ExpertRatings/ExpertRatings';
import { OrderServices } from '../../pages/OrderServices/OrderServices';
import { ClientChat } from '../../pages/ClientChat/ClientChat';
import { ExpertChat } from '../../pages/ExpertChat/ExpertChat';
import { Page404 } from '../../pages/404/404';
import { HeaderMain } from '../Header-main/header-main';
import { Footer } from '../Footer/footer';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../../services/redusers/users';

export function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isClient, setIsClient] = useState(undefined);
  const [isEmailSend, setIsEmailSend] = useState(false); //false
  const [isPasswordReset, setIsPasswordReset] = useState(false); //false
  const [errMessage, setErrorMessage] = useState(undefined);
  const [amountExpert, setAmountExpert] = useState(undefined);
  const [isLoader, setIsLoader] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onSubmitSignin = values => {
    login(values)
      .then(res => {
        const jwt = localStorage.getItem('token');
        getUserInfo(jwt)
          .then(res => {
            setCurrentUser(res);
            setLoggedIn(true);
            navigate('/catalog');
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err)
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

  function signOut() {
    const jwt = localStorage.getItem('token');
    logOut(jwt).then(() => {
      setLoggedIn(false);
      localStorage.removeItem('token');
      setCurrentUser({});
      navigate('/catalog');
    });
  }

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
      .catch(err => { console.log(err);
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

  function tokenCheck() {
    setIsLoader(true);
    const jwt = localStorage.getItem('token');
    if (jwt) {
      checkToken(jwt)
        .then(res => {
          const userInfo = res;
          setCurrentUser(userInfo);
          setLoggedIn(true);
          navigate('/', { replace: true });
        })
        .catch(err => {
          console.log('Ошибка:' + err);
          localStorage.removeItem('token');
          setLoggedIn(false);
        })
        .finally(() => setIsLoader(false));
    }
  }

  function onStartCatalog() {
    getAmountExpert()
      .then(res => {
        setAmountExpert(res.total_spec_user);
      })
      .catch(err => {
        console.log('Ошибка:' + err.detail);
      });
  }

  const signinGoogle = param => {
    loginGoogle(param)
      .then(res => {
        console.log(res);
        const jwt = localStorage.getItem('token');
        getUserInfo(jwt)
          .then(res => {
            setCurrentUser(res);
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

  const signinVk = param => {
    loginVk(param)
      .then(res => {
        console.log(res);
        const jwt = localStorage.getItem('token');
        getUserInfo(jwt)
          .then(res => {
            setCurrentUser(res);
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

  useEffect(() => {
    tokenCheck();
    //при первой загрузке запрашиваем только фотографов, как стоит в сортировке по дефолту
    dispatch(fetchUsers({ spec: 'all', limit: 1, pageSize: '' }));
  }, []);

  //достаем юзеров из редакса
  // const usersInfo = useSelector(state => state.users.data);
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <HeaderMain
          isClient={isClient}
          setIsClient={setIsClient}
          loggedIn={loggedIn}
          signOut={signOut}
        ></HeaderMain>
        <Routes>
          <Route
            path="/"
            element={<Landing signOut={signOut} />}
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
            element={<Profile />}
          />
          <Route
            path="/client/:id"
            element={<ClientAccount />}
          />
          <Route
            path="/expert/:id"
            element={<ExpertAccount />}
          />
          <Route
            path="/client/:id/orders"
            element={<ClientOrders />}
          />
          <Route
            path="/expert/:id/orders"
            element={<ExecutorOrders />}
          />
          <Route
            path="/expert/:id/ratings"
            element={<ExecutorRatings />}
          />
          <Route
            path="/order-service"
            element={<OrderServices />}
          />
          <Route
            path="/client/:id/chat"
            element={<ClientChat />}
          />
          <Route
            path="/expert/:id/chat"
            element={<ExpertChat />}
          />
          <Route
            path="*"
            element={<Page404 />}
          />
        </Routes>
        <Footer isClient={isClient}/>
      </div>
    </CurrentUserContext.Provider>
  );
}
