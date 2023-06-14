import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setModalType, setCurrentTask, setGenericModal } from '../features/content/contentSlice';

function AddButton() {
  const dispatch = useDispatch();
  const { currentBoard, isGenericModalExpanded } = useSelector((state) => state.content);
  const handleNewTaskClick = () => {
    dispatch(setCurrentTask(null));
    dispatch(setModalType('TASK-CREATE'));
    dispatch(setGenericModal(true));
  };
  return (
    <div className="add-button-wrapper">
      <button
        disabled={currentBoard?.columns.length < 1}
        className="add-button"
        onClick={handleNewTaskClick}
      >
        <img
          className="add-button-image"
          src={`${process.env.PUBLIC_URL}/assets/icon-add-task-mobile.svg`}
          alt="Add Button"
        />
      </button>
    </div>
  );
}

export default AddButton;
