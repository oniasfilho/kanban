import React from 'react'
import { GENERAL_DATA } from '../Data/data';

const NavbarBoardDropdown = () => {

	return (
		<div className='nav-dropdown-wrapper'>
			{GENERAL_DATA.boards[0].name}
			<img className='nav-dropdown-down-arrow' src={process.env.PUBLIC_URL + '/assets/icon-chevron-down.svg'} alt="Dropdown Arrow" />
		</div>
	)
}

export default NavbarBoardDropdown