import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from '../features/layout/layoutSlice';
import contentReducer from '../features/content/contentSlice';

export const store = configureStore({
	reducer: {
		theme: layoutReducer,
		content: contentReducer,
	}
})