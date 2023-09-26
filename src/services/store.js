import { combineReducers, configureStore } from '@reduxjs/toolkit';
import users from './redusers/users';
import profile from './redusers/profile';
import catalog from './redusers/catalog';

export const rootReducer = combineReducers({
  users,
  profile,
  catalog
});

export const store = configureStore({
  reducer: rootReducer
  // reducer: {
  //   usersStore: users,
  //   profile: profile
  // }
});

export default store;
