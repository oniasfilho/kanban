import React, { useEffect } from 'react';
import GenericModal from './GenericModal';
import { setModalType, setGenericModal, select } from '../features/content/contentSlice';
import { useDispatch, useSelector } from 'react-redux';

function EmptyBoard() {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.content.boards);


  const handleAddNewColumnClick = () => {
    dispatch(setModalType("BOARD-EDIT"));
    dispatch(setGenericModal(true));
  }

  const handleAddNewBoardClick = () => {
    dispatch(setModalType("BOARD-CREATE"));
    dispatch(setGenericModal(true));
  }

  useEffect(() => {
    if (!(boards?.length === 0 || boards === null)) {
      select(boards[0]);
    }
  }, [boards])

  return (
    <div className="empty-board-wrapper">
      <div className="empty-board-message">
        {(boards?.length === 0 || boards === null) ? "Create a Board" : "This board is empty. Create a new column to get started."}

      </div>
      <div className="add-new-column-button-wrapper">
        {(boards?.length === 0 || boards === null) ?
          <button
            className="add-column-button"
            onClick={handleAddNewBoardClick}
          >
            <svg className="add-column-button-image" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
              <path d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z" fill="currentcolor" />
            </svg>
            Create New Board
          </button> :
          <button
            className="add-column-button"
            onClick={handleAddNewColumnClick}
          >
            <svg className="add-column-button-image" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
              <path d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z" fill="currentcolor" />
            </svg>
            Add New Column
          </button>}
      </div>
      <GenericModal />
    </div>
  );
}

export default EmptyBoard;
