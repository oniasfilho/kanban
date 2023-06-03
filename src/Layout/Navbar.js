import React from 'react'
import NavbarBoardDropdown from '../component/NavbarBoardDropdown'
import AddButton from '../component/AddButton';

const Navbar = () => {
	return (
		<div className='navbar-wrapper'>
			<div className="navbar-left-section">
				<img src={process.env.PUBLIC_URL + '/assets/logo-mobile.svg'} alt="Logo" />
				<div className="logo-and-board-name-wrapper">
					<div className="logo header-item-l">
						Kanban
					</div>
					<div className="board-name header-item-l">
						Platform Launch
					</div>
				</div>
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