import React from 'react'

const NavbarDropdownModal = ({ toggleExpanded, boards }) => {
	const handleClick = (e) => {
		if (e.target.closest('.navbar-modal') === null) {
			toggleExpanded();
		}
	}
	return (
		<div className='navbar-modal-wrapper' onClick={handleClick}>
			<div className='navbar-modal'>
				<div className="navbar-modal-header">
					all boards ({boards.length})
				</div>
				<div className="navbar-modal-content">
					{boards.map((each, index) => (
						<div key={each.name} className="navbar-modal-board-option">
							<img
								className='navbar-board-icon'
								src={process.env.PUBLIC_URL + '/assets/icon-board.svg'}
								alt="Board Icon" />
							{each.name}
						</div>
					))}

				</div>
				<div className="navbar-modal-board-option create-new-board">
					<img
						className='navbar-board-icon new-board-icon'
						src={process.env.PUBLIC_URL + '/assets/icon-board-dark-purple.svg'}
						alt="Board Icon" />
					<img
						className='navbar-add-board-icon'
						src={process.env.PUBLIC_URL + '/assets/icon-add-task-mobile-dark-purple.svg'}
						alt="Add Icon" />
					Create New Board
				</div>
				<div className="navbar-modal-footer">
					light/dark mode toggle
				</div>
			</div>
		</div>
	)
}

export default NavbarDropdownModal