import React, { useEffect } from 'react'
import EmptyBoard from '../component/EmptyBoard';
import LateralNavbar from '../component/LateralNavbar';
import Columns from '../component/Columns';
import { useSelector, useDispatch } from 'react-redux';
import { useGetBoardsQuery } from '../features/api/apiSlice';
import { select, setBoards } from '../features/content/contentSlice';

const Home = () => {
	const { currentBoard } = useSelector(state => state.content)
	const dispatch = useDispatch()
	const {
		data,
		// isLoading,
		// isError,
		// error
	} = useGetBoardsQuery()

	useEffect(() => {
		if (currentBoard === null && data !== undefined && data !== null) {
			dispatch(select(data[0]))
			dispatch(setBoards(data))
		}
	}, [data, currentBoard, dispatch])

	return (
		<div className="home-wrapper">
			<LateralNavbar />
			{currentBoard?.columns.length > 0
				? <Columns />
				: <EmptyBoard />}
		</div>
	)
}

export default Home