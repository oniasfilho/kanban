import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from '../features/layout/layoutSlice';
import contentReducer from '../features/content/contentSlice';
import { apiSlice } from '../features/api/apiSlice';

export const store = configureStore({
	reducer: {
		theme: layoutReducer,
		content: contentReducer,
		[apiSlice.reducerPath]: apiSlice.reducer // Add the reducer for RTK-Query API
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware), // Add the middleware for RTK-Query API
})