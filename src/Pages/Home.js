import React from 'react'

const Home = () => {
	return (
		<div className="home-wrapper">
			<div className="empty-board-content">
				<div className="empty-board-message">
					This board is empty. Create a new column to get started.
				</div>
				<div className="add-new-column-button-wrapper">
					<button className='add-column-button'>
						<img
							className='add-column-button-image'
							src={process.env.PUBLIC_URL + '/assets/icon-add-task-mobile.svg'}
							alt="Add Column Button"
						/>
						Add New Column
					</button>
				</div>
			</div>
		</div>
	)
}

export default Home