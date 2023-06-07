import { createSlice } from '@reduxjs/toolkit';
import { GENERAL_DATA } from '../../data/data';

const initialState = {
	boards: GENERAL_DATA.boards,
	currentBoard: GENERAL_DATA.boards[0],
}

const contentSlice = createSlice({
	name: 'content',
	initialState,
	reducers: {
		select: (state, action) => {
			state.currentBoard = state.boards.find(e => e.id === action.payload)
		}
	}
})

export const { select } = contentSlice.actions;

export default contentSlice.reducer;
