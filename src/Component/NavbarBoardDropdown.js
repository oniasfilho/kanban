import React, { useState } from 'react'
import NavbarDropdownModal from './NavbarDropdownModal';
import { useSelector } from 'react-redux';


const NavbarBoardDropdown = () => {
	const [expanded, setExpanded] = useState(false);
	const { boards } = useSelector(state => state.content)
	const toggleExpanded = () => {

		setExpanded(!expanded);
	}

	return (
		<>
			<div className='nav-dropdown-wrapper' onClick={toggleExpanded}>
				{boards[0].name}
				<img
					className='nav-dropdown-down-arrow'
					src={process.env.PUBLIC_URL + `/assets/icon-chevron-${expanded ? 'up' : 'down'}.svg`}
					alt="Dropdown Arrow" />
			</div>

			{expanded && (
				<NavbarDropdownModal toggleExpanded={toggleExpanded} boards={boards} />
			)}
		</>
	)
}

export default NavbarBoardDropdown