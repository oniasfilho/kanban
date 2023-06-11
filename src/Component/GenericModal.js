import React from 'react';
import TaskViewModal from './TaskViewModal';

const GenericModal = ({
	modalExpanded,
	modalType,
	setModalExpanded,
	localTask,
	setLocalTask,
	updateBoard,
	currentBoard
}) => {
	const handleOutsideClick = (e) => {
		if (e.target.closest('.generic-modal') === null) {
			setModalExpanded(!modalExpanded);
		}
	};

	if (!modalExpanded || localTask == null) return null;

	return (
		<div className='generic-modal-wrapper' onClick={handleOutsideClick}>
			<div className='generic-modal'>
				<TaskViewModal
					modalType={modalType}
					localTask={localTask}
					setLocalTask={setLocalTask}
					updateBoard={updateBoard}
					currentBoard={currentBoard}
				/>
			</div>
		</div>
	);
};

export default GenericModal;
