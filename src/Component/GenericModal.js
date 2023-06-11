import React from 'react';
import { useSelector } from 'react-redux';
import TaskViewModal from './TaskViewModal';
import TaskEditModal from './TaskEditModal';

const GenericModal = ({
	modalExpanded,
	setModalExpanded,
	localTask,
	setLocalTask,
	updateBoard,
	currentBoard
}) => {
	const currentTask = useSelector(state => state.content.currentTask);
	const handleOutsideClick = (e) => {
		if (e.target.closest('.generic-modal') === null) {
			setModalExpanded(!modalExpanded);
		}
	};

	if (!modalExpanded || currentTask == null) return null;

	return (
		<div className='generic-modal-wrapper' onClick={handleOutsideClick}>
			<div className='generic-modal'>
				<TaskViewModal
					updateBoard={updateBoard}
					currentBoard={currentBoard}
				/>
				<TaskEditModal

				/>
			</div>
		</div>
	);
};

export default GenericModal;
