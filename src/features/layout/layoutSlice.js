import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	theme: localStorage.getItem('theme') || 'light',
}

const layoutSlice = createSlice({
	name: 'layout',
	initialState,
	reducers: {
		switchToDarkTheme: (state) => {
			state.theme = 'dark';
			localStorage.setItem('theme', 'dark');
		},
		switchToLightTheme: (state) => {
			state.theme = 'light';
			localStorage.setItem('theme', 'light');
		},
	},
})

export const { switchToDarkTheme, switchToLightTheme } = layoutSlice.actions;
export default layoutSlice.reducer;