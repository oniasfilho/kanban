import React from 'react'

const AddButton = () => {
	return (
		<div className='add-button-wrapper'>
			<button disabled className='add-button'>
				<img
					className='add-button-image'
					src={process.env.PUBLIC_URL + '/assets/icon-add-task-mobile.svg'}
					alt="Add Button"
				/>
			</button>
		</div>
	)
}

export default AddButton