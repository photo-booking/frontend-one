import React from 'react';
import { Route, Routes } from 'react-router-dom';

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

const onSubmitSignup = (values) => {
  console.log(values);
};

const onSubmitSignin = (values) => {
  console.log(values);
};

export function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Landing />}
      />
      <Route
        path="/sign-up"
        element={<Signup onSubmit={onSubmitSignup} />}
      />
      <Route
        path="/sign-in"
        element={<Signin onSubmit={onSubmitSignin} />}
      />
      <Route
        path="/reset-password"
        element={<ResetPassword />}
      />
      <Route
        path="/catalog"
        element={<CatalogExecutors />}
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
  );
}
