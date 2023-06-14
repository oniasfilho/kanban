import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGenericModal } from '../features/content/contentSlice';
import TaskViewModal from './TaskViewModal';
import TaskEditModal from './TaskEditModal';
import TaskRelatedModal from './TaskRelatedModal';
import BoardRelatedModal from './BoardRelatedModal';

function GenericModal() {
  const dispatch = useDispatch();
  const { currentTask, isGenericModalExpanded } = useSelector((state) => state.content);
  const handleOutsideClick = (e) => {
    if (e.target.closest('.generic-modal') === null) {
      dispatch(setGenericModal(!isGenericModalExpanded));
    }
  };

  if (!isGenericModalExpanded) return null;

  return (
    <div className="generic-modal-wrapper" onClick={handleOutsideClick}>
      <div className="generic-modal">
        {currentTask !== null
					&& <TaskViewModal />}
        <TaskRelatedModal />
        <BoardRelatedModal />
      </div>
    </div>
  );
}

export default GenericModal;
