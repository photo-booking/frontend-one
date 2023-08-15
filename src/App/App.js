import React from "react";
import {Route, Routes} from "react-router-dom";

import {Login} from "../pages/Login";
import {Auth} from "../pages/Auth";
import {ResetPassword} from "../pages/ResetPassword/index";
import {CatalogExecutors} from "../pages/CatalogExecutors";
import {Profile} from "../pages/Profile";
import {Landing} from "../pages/Landing";
import {ClientAccount} from "../pages/ClientAccount";
import {ClientOrders} from "../pages/ClientOrders";
import {ExecutorAccount} from "../pages/ExecutorAccount";
import {ExecutorOrders} from "../pages/ExecutorOrders";
import {ExecutorRatings} from "../pages/ExecutorRatings";
import {OrderServices} from "../pages/OrderServices";
import {ClientChat} from "../pages/ClientChat";
import {ExecutorChat} from "../pages/ExecutorChat";
import {Page404} from "../pages/404";


export function App () {
    return (
        <Routes>
            <Route
                path="/"
                element={<Landing/>}
            />
            <Route
                path="/sign-up"
                element={<Auth/>}
            />
            <Route
                path="/sign-in"
                element={<Login/>}
            />
            <Route
                path="/reset-password"
                element={<ResetPassword/>}
            />
            <Route
                path="/catalog"
                element={<CatalogExecutors/>}
            />
            <Route
                path="/card/:id"
                element={<Profile/>}
            />
            <Route
                path="/client/:id"
                element={<ClientAccount/>}
            />
            <Route
                path="/client/:id/orders"
                element={<ClientOrders/>}
            />
            <Route
                 path="/executor/:id"
                 element={<ExecutorAccount/>}
            />
            <Route
                 path="/executor/:id/orders"
                 element={<ExecutorOrders/>}
            />
            <Route
                 path="/executor/:id/ratings"
                 element={<ExecutorRatings/>}
            />
            <Route
                 path="/order-service"
                 element={<OrderServices/>}
            />
            <Route
                 path="/client/:id/chat"
                 element={<ClientChat/>}
            />
            <Route
                 path="/executor/:id/chat"
                 element={<ExecutorChat/>}
            />
            <Route
                path="/404"
                element={<Page404/>}
            />
        </Routes>
    );
}

