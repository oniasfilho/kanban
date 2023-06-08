import { createSlice } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';
import { GENERAL_DATA } from '../../data/data';

const initialState = {
	boards: GENERAL_DATA.boards,
	currentBoard: GENERAL_DATA.boards[0],
	isLoading: false,
	error: null,
}

const contentSlice = createSlice({
	name: 'content',
	initialState,
	reducers: {
		select: (state, action) => {
			state.currentBoard = state.boards.find(e => e.id === action.payload)
		},
		updateBoard: (state, action) => {
			const updated = action.payload;
			state.boards = state.boards.map(each => {
				if (each.id === updated.id) {
					return updated;
				}
				return each;
			})
		}
	},
	extraReducers: (builder) => {
		builder.addCase(apiSlice.endpoints.getBoards, (state) => {
			state.isLoading = true;
			state.error = null;
		});
	}
})

export const { select, updateBoard } = contentSlice.actions;

export default contentSlice.reducer;
