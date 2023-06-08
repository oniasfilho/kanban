import React from 'react'

const EmptyBoard = () => {
	return (
		<div className='empty-board-wrapper'>
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
	)
}

export default EmptyBoard