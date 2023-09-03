import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useCreateBoardMutation, useUpdateBoardMutation, useDeleteBoardMutation } from '../features/api/apiSlice';
import { setModalType, setGenericModal, setCurrentBoard, select, setStatus } from '../features/content/contentSlice';
import generateRandomString from '../helpers/helperFunctions';

function BoardRelatedModal() {
  const dispatch = useDispatch();
  const [createBoard] = useCreateBoardMutation();
  const [updateBoard] = useUpdateBoardMutation();
  const [deleteBoard] = useDeleteBoardMutation();
  const { modalType, currentBoard, boards } = useSelector((state) => state.content);
  const [isEdit, setIsEdit] = useState(modalType === 'BOARD-EDIT');
  const [isDropdownExpanded, setIsDropdownExpanded] = useState(false);
  const sampleColumn = {
    columnId: generateRandomString(),
    name: '',
    tasks: [],
  };
  const [tempCurrentBoard, setTempCurrentBoard] = useState(
    isEdit ? currentBoard : {
      name: '',
      columns: [],
    }
  );

  const handleBoardChanges = (e) => {
    const { name, value, id } = e.target;
    if (name === "name") {
      setTempCurrentBoard(oldVal => {
        return {
          ...oldVal,
          [name]: value
        }
      })
    } else {
      setTempCurrentBoard(oldVal => {
        let updatedVal = structuredClone(oldVal);
        updatedVal.columns.forEach(e => {
          if (e.columnId === id) {
            e.name = value
          }
        })
        return {
          ...updatedVal,
        }
      })
    }
  }

  const handleColumnDelete = (id) => {
    setTempCurrentBoard(oldVal => {
      return {
        ...oldVal,
        columns: [
          ...oldVal.columns.filter(e => e.columnId !== id)
        ]
      }
    })
  }

  const handleColumnAdd = () => {
    setTempCurrentBoard(oldVal => {
      return {
        ...oldVal,
        columns: [
          ...oldVal.columns,
          { columnId: generateRandomString(), name: "", tasks: [] }
        ]
      }
    })
  }

  const handleSubmit = async () => {
    switch (modalType) {
      case "BOARD-CREATE":
        dispatch(setStatus("refreshing"));
        setShouldSwitch(true);
        await createBoard(tempCurrentBoard);
        break;
      case "BOARD-EDIT":
        await updateBoard(tempCurrentBoard);
        break;
      default:
        console.log("no case was detected")
        break;
    }
    dispatch(setModalType(null));
    dispatch(setGenericModal(false));
  };

  const handleBoardDelete = async (boardId) => {
    await deleteBoard(boardId);
    //TODO: check if boards isn't empty and if it is display a "create board" component
    dispatch(setCurrentBoard(boards[0]));
    dispatch(setGenericModal(false));
    dispatch(setModalType(null));
  }

  const [shouldSwitch, setShouldSwitch] = useState(false);

  useEffect(() => {
    console.log("chegou no use effect")
    console.log("boards: ", boards)
    console.log("shouldSwitch: ", shouldSwitch)
    if (boards.length > 0 && shouldSwitch) {
      setShouldSwitch(false);
    }
  }, [boards, shouldSwitch])

  if (modalType !== 'BOARD-EDIT' && modalType !== 'BOARD-CREATE') return null;
  return (
    <div className="board-edit-wrapper">
      <div className="board-edit-modal-title">
        {isEdit ? 'Edit Board' : 'Create Board'}
      </div>
      <div className="board-title-wrapper">
        <div className="task-title-input-label">
          Board Name
        </div>
        <div className="task-title-input-wrapper">
          <input
            name="name"
            className="board-title-input"
            type="text"
            value={tempCurrentBoard.name}
            onChange={handleBoardChanges}
          />
        </div>
      </div>
      <div className="board-subtasks-wrapper">
        <div className="board-subtasks-label">
          Board Columns
        </div>
        <div className="board-subtasks-items-wrapper">
          {tempCurrentBoard.columns.map((column) => (
            <div key={column.columnId} className="board-subtasks-item">
              <input
                id={column.columnId}
                type="text"
                className="edit-subtask-item"
                value={column?.name}
                onChange={handleBoardChanges}
              />
              <svg
                name="delete-column"
                role="button"
                width="15"
                height="15"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => handleColumnDelete(column.columnId)}
              >
                <g fill="#828FA3" fillRule="evenodd" role="button">
                  <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" />
                  <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" />
                </g>
              </svg>
            </div>
          ))}
        </div>
        <div className="add-new-subtask-button-wrapper">
          <button onClick={handleColumnAdd}>
            <svg className="navbar-add-board-icon add-new-board-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
              <path d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z" fill="currentcolor" />
            </svg>
            Add New Column
          </button>
        </div>
      </div>

      <section className="action-buttons-wrapper">
        <div className="update-board-buttom-wrapper">
          <button
            onClick={handleSubmit}
          >{isEdit ? 'Update Board' : 'Create Board'}</button>
        </div>
        <div className="delete-task-buttom-wrapper" onClick={() => handleBoardDelete(tempCurrentBoard.boardId)}>
          <button
            className="delete-cancel-task-button"
            name="create-or-update-task-button"
          >
            {isEdit ? 'Delete Board' : 'Cancel'}
          </button>
        </div>
      </section>
    </div>
  );
}

export default BoardRelatedModal;
