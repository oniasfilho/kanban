import React, { useState } from 'react'
import MenuOptions from '../component/MenuOptions';

const Home = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className="home-wrapper">
			<div className="empty-board-content">
				{open
					? <div
						className="lateral-menu lateral-menu-open"
						onClick={() => {
							// setOpen(false)
							console.log("testando lateral navbar")
						}
						}>
						<div className="inner-lateral-menu-header">
							<img src={process.env.PUBLIC_URL + '/assets/logo-mobile.svg'} alt="Logo" />
							<div className="project-name-wrapper">
								Kanban
							</div>
							<div className="board-name-side-bar-wrapper">
								Platform Launch
							</div>
						</div>
						<MenuOptions className={"custom-menu-options"} setOpen={setOpen} />
					</div> :
					<div
						className="lateral-menu lateral-menu-closed"
						onClick={() => setOpen(true)}>
						<svg className='lateral-menu-closed-image' xmlns="http://www.w3.org/2000/svg" width="16" height="11">
							<path
								d="M15.815 4.434A9.055 9.055 0 0 0 8 0 9.055 9.055 0 0 0 .185 4.434a1.333 1.333 0 0 0 0 1.354A9.055 9.055 0 0 0 8 10.222c3.33 0 6.25-1.777 7.815-4.434a1.333 1.333 0 0 0 0-1.354ZM8 8.89A3.776 3.776 0 0 1 4.222 5.11 3.776 3.776 0 0 1 8 1.333a3.776 3.776 0 0 1 3.778 3.778A3.776 3.776 0 0 1 8 8.89Zm2.889-3.778a2.889 2.889 0 1 1-5.438-1.36 1.19 1.19 0 1 0 1.19-1.189H6.64a2.889 2.889 0 0 1 4.25 2.549Z"
								fill="currentcolor"
							/>
						</svg>
					</div>}
				<div className="empty-board-message">
					This board is empty. Create a new column to get started.
				</div>
				<div className="add-new-column-button-wrapper">
					<button className='add-column-button'>
						<svg className='add-column-button-image' xmlns="http://www.w3.org/2000/svg" width="12" height="12">
							<path d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z" fill="currentcolor" />
						</svg>
						Add New Column
					</button>
				</div>
			</div>

		</div>
	)
}

export default Home