import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from '../features/layout/layoutSlice';
import contentReducer from '../features/content/contentSlice';
import { apiSlice } from '../features/api/apiSlice';

const store = configureStore({
  reducer: {
    theme: layoutReducer,
    content: contentReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
