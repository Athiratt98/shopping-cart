import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from "./reducers/ProductReducer";

const store = configureStore({
    reducer:{
      products:ProductReducer  
    }

});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
