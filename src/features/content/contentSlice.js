import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	boards: null,
	currentBoard: null,
	currentTask: null,
	modalType: null,
	isGenericModalExpanded: false,
	isLateralMenuExpanded: false,
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
		setCurrentTask: (state, action) => {
			state.currentTask = action.payload;
		},
		setModalType: (state, action) => {
			state.modalType = action.payload;
		},
		setGenericModal: (state, action) => {
			state.isGenericModalExpanded = action.payload;
		},
		setLateralMenu: (state, action) => {
			state.isLateralMenuExpanded = action.payload;
		}
	}
})

export const { select, setBoards, setCurrentTask, setModalType, setGenericModal, setLateralMenu } = contentSlice.actions;

export default contentSlice.reducer;
