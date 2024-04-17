// store.js

import { configureStore } from "@reduxjs/toolkit";
import UserInfoReducer from './user/reducer'
import cartReducer from './cart/reducerCart'
import sensorReducer from "./sensors/reducer";
const store = configureStore({
  reducer: {
    UserInfoReducer: UserInfoReducer,
    cartReducer: cartReducer,
    sensorReducer:sensorReducer
  },
});
export default store;
