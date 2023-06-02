import React from 'react'
import NavbarBoardDropdown from '../component/NavbarBoardDropdown'
import AddButton from '../component/AddButton';
const Navbar = () => {
	return (
		<div className='navbar-wrapper'>
			<div className="navbar-left-section">
				<img src={process.env.PUBLIC_URL + '/assets/logo-mobile.svg'} alt="Logo" />
				<NavbarBoardDropdown />
			</div>
			<div className="navbar-right-section">
				<AddButton />
				<img src={process.env.PUBLIC_URL + '/assets/icon-vertical-ellipsis.svg'} alt="Options" />
			</div>
		</div>
	)
}

export default Navbar