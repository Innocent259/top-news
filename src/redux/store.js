import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './news/newsSlice';

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});
export default store;
