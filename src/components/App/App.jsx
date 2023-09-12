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
  logOut
} from '../../utils/auth';

import { getAmountExpert} from '../../utils/api';

import { Signin } from '../../pages/Signin/Signin';
import { Signup } from '../../pages/Signup/Signup';
import { ResetPassword } from '../../pages/ResetPassword/ResetPassword';
import { CatalogExecutors } from '../../pages/CatalogExperts/CatalogExperts';
import { Profile } from '../../pages/Profile/Profile';
import { Landing } from '../../pages/Landing/Landing';
import { ClientAccount } from '../../pages/ClientAccount/ClientAccount';
import { ClientOrders } from '../../pages/ClientOrders/ClientOrders';
import { ExecutorAccount } from '../../pages/ExpertAccount/ExpertAccount';
import { ExecutorOrders } from '../../pages/ExpertOrders/ExpertOrders';
import { ExecutorRatings } from '../../pages/ExpertRatings/ExpertRatings';
import { OrderServices } from '../../pages/OrderServices/OrderServices';
import { ClientChat } from '../../pages/ClientChat/ClientChat';
import { ExecutorChat } from '../../pages/ExpertChat/ExpertChat';
import { Page404 } from '../../pages/404/404';
import { HeaderMain } from '../Header-main/header-main';
import { Footer } from '../Footer/footer';
import { getUsers } from '../../utils/api';
import { useDispatch, useSelector } from 'react-redux';
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
        // setErrorMessage(err.non_field_errors[0]);
        setLoggedIn(false);
      });
  };

  const onLoginWithSocial = jwt => {
    console.log(jwt);
    getUserInfo(jwt)
      .then(res => {
        localStorage.setItem('token', jwt);
        setCurrentUser(res);
        setLoggedIn(true);
        navigate('/catalog');
      })
      .catch(err => {
        // setErrorMessage(err.detail);
        setLoggedIn(false);
      });
  };

  const onSubmitSignup = (values, status) => {
    register(values, status)
      .then(() => {
        onSubmitSignin(values);
      })
      .catch(err => {
        console.log(err)
        // setErrorMessage(err);
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
      .catch(err => {
        err.then(e => console.log(e));
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
      .then((res)=> {
        setAmountExpert(res.total_spec_user)
      })
      .catch(err => {console.log('Ошибка:' + err.detail);})
  }

  useEffect(() => {
    tokenCheck();
    dispatch(fetchUsers());
  }, []);


  //достаем юзеров из редакса
  const usersInfo = useSelector(state => state.usersStore.data)
  

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
                onLoginWithSocial={onLoginWithSocial}
                errMessage={errMessage}
                setErrorMessage={setErrorMessage}
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
              <CatalogExecutors 
              amountExpert={amountExpert}
              onStartCatalog={onStartCatalog}
              />}
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
            path="/client/:id/orders"
            element={<ClientOrders />}
          />
          <Route
            path="/expert/:id"
            element={<ExecutorAccount />}
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
            element={<ExecutorChat />}
          />
          <Route
            path="*"
            element={<Page404 />}
          />
        </Routes>
      </div>
      <Footer isClient={isClient}/>
    </CurrentUserContext.Provider>
  );
}
