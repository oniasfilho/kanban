import React from 'react';
import { useDispatch } from 'react-redux';
import { setModalType, setGenericModal } from '../features/content/contentSlice';
const EmptyColumn = () => {
  const dispatch = useDispatch();

  const handleNewColumnClick = () => {
    dispatch(setModalType("BOARD-EDIT"));
    dispatch(setGenericModal(true));
  }
  return (
    <div className="single-column empty-column">
      <div
        className="column-header-wrapper new-column-button"
        onClick={handleNewColumnClick}
      >
        <img
          className="add-button-image"
          src={`${process.env.PUBLIC_URL}/assets/icon-add-task-mobile.svg`}
          alt="Add Button"
        /> new column
      </div>
    </div>
  )
}

export default EmptyColumn;
