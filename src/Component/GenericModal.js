import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGenericModal } from '../features/content/contentSlice';
import TaskViewModal from './TaskViewModal';
import TaskEditModal from './TaskEditModal';

const GenericModal = () => {

	const dispatch = useDispatch();
	const { currentTask, isGenericModalExpanded } = useSelector(state => state.content);
	const handleOutsideClick = (e) => {
		if (e.target.closest('.generic-modal') === null) {
			dispatch(setGenericModal(!isGenericModalExpanded));
		}
	};

	if (!isGenericModalExpanded || currentTask == null) return null;

	return (
		<div className='generic-modal-wrapper' onClick={handleOutsideClick}>
			<div className='generic-modal'>
				<TaskViewModal />
				<TaskEditModal />
			</div>
		</div>
	);
};

export default GenericModal;
