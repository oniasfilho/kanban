import React from 'react'
import EmptyBoard from '../component/EmptyBoard';
import LateralNavbar from '../component/LateralNavbar';
import Columns from '../component/Columns';
import { useSelector } from 'react-redux';

const Home = () => {
	const { currentBoard } = useSelector(state => state.content)

	return (
		<div className="home-wrapper">
			<LateralNavbar />
			{currentBoard.columns.length > 0
				? <Columns />
				: <EmptyBoard />}
		</div>
	)
}

export default Home