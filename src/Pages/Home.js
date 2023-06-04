import React from 'react'
import EmptyBoard from '../component/EmptyBoard';
import LateralNavbar from '../component/LateralNavbar';

const Home = () => {

	return (
		<div className="home-wrapper">
			<LateralNavbar />
			<EmptyBoard />
		</div>
	)
}

export default Home