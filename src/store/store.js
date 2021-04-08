import { configureStore } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';
import boxBuilderReducer from './boxBuilderSlice';

export const store = configureStore({
  reducer: {
    boxBuilder: boxBuilderReducer,
  },
});
