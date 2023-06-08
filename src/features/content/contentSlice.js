import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	boards: null,
	currentBoard: null,
	status: "idle"
}

const contentSlice = createSlice({
	name: 'content',
	initialState,
	reducers: {
		select: (state, action) => {
			state.currentBoard = action.payload
		},
		setBoards: (state, action) => {
			state.boards = action.payload
		},
	}
})

export const { select, setBoards } = contentSlice.actions;

export default contentSlice.reducer;
