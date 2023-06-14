import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentTask, setModalType } from '../features/content/contentSlice';

function BoardRelatedModal() {
  const dispatch = useDispatch();
  const [isDropdownExpanded, setIsDropdownExpanded] = useState(false);
  const { modalType, currentTask, currentBoard } = useSelector((state) => state.content);
  const [tempCurrentTask, setTempCurrentTask] = useState(currentTask || {
    title: '',
    description: '',
    subtasks: [],

  });

  if (modalType !== 'BOARD-EDIT' && modalType !== 'BOARD-CREATE') return null;
  return (
    <div className="board-edit-wrapper">
      <div className="board-edit-modal-title">
        {false ? 'Edit Board' : 'Add New Board'}
      </div>
      <div className="board-title-wrapper">
        <div className="task-title-input-label">
          Board Name
        </div>
        <div className="task-title-input-wrapper">
          <input
            className="board-title-input"
            type="text"
          />
        </div>
      </div>
      <div className="board-subtasks-wrapper">
        <div className="board-subtasks-label">
          Board Columns
        </div>
        <div className="board-subtasks-items-wrapper">
          {/* <div className="board-subtasks-item">
						<input
							type="text"
							className="edit-subtask-item"
						// value={subtask.title}
						/>
						<svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
							<g fill="#828FA3" fill-rule="evenodd">
								<path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" />
								<path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" />
							</g>
						</svg>
					</div> */}
        </div>
        <div className="add-new-subtask-button-wrapper">
          <button>
            <svg className="navbar-add-board-icon add-new-board-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
              <path d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z" fill="currentcolor" />
            </svg>
            Add New Column
          </button>
        </div>
      </div>

      <div className="update-board-buttom-wrapper">
        <button>{true ? 'Create Board' : 'Update Board'}</button>
      </div>
    </div>
  );
}

export default BoardRelatedModal;
