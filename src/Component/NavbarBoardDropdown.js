import React, { useState } from 'react'
import NavbarDropdownModal from './NavbarDropdownModal';
import { GENERAL_DATA } from '../data/data';

const NavbarBoardDropdown = () => {
	const [expanded, setExpanded] = useState(false);

	const toggleExpanded = () => {

		setExpanded(!expanded);
	}

	return (
		<>
			<div className='nav-dropdown-wrapper' onClick={toggleExpanded}>
				{GENERAL_DATA.boards[0].name}
				<img
					className='nav-dropdown-down-arrow'
					src={process.env.PUBLIC_URL + `/assets/icon-chevron-${expanded ? 'up' : 'down'}.svg`}
					alt="Dropdown Arrow" />
			</div>

			{expanded && (
				<NavbarDropdownModal toggleExpanded={toggleExpanded} boards={GENERAL_DATA.boards} />
			)}
		</>
	)
}

export default NavbarBoardDropdown