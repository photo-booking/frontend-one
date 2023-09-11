import { configureStore } from "@reduxjs/toolkit";
import users from "./redusers/users";


export const store = configureStore({
    reducer: {
        usersStore: users,
    }
})

export default store;