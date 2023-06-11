import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentTask, setModalType } from '../features/content/contentSlice';

const TaskRelatedModal = () => {
	const dispatch = useDispatch();
	const [isDropdownExpanded, setIsDropdownExpanded] = useState(false);
	const { modalType, currentTask, currentBoard } = useSelector(state => state.content);
	const [tempCurrentTask, setTempCurrentTask] = useState(currentTask || {
		title: "",
		description: "",
		subtasks: [],

	});

	if (modalType !== "TASK-EDIT" && modalType !== "TASK-CREATE") return null;
	return (
		<div className='task-edit-wrapper'>
			<div className="task-edit-modal-title">
				{currentTask !== null ? "Edit Task" : "Add New Task"}
			</div>
			<div className="task-title-wrapper">
				<div className="task-title-input-label">
					Title
				</div>
				<div className="task-title-input-wrapper">
					<input
						className='task-title-input'
						type='text'
						value={tempCurrentTask.title}
					/>
				</div>
			</div>
			<div className="task-description-wrapper">
				<div className="task-description-input-label">
					Description
				</div>
				<div className="task-description-textarea-wrapper">
					<textarea
						className="task-description-textarea"
						value={tempCurrentTask.description}
						placeholder="e.g Contact marketing to deliver latest feature's details."
					/>
				</div>
			</div>
			<div className="task-subtasks-wrapper">
				<div className="task-subtasks-label">
					Substasks
				</div>
				<div className="task-subtasks-items-wrapper">
					{tempCurrentTask.subtasks.map(subtask => (
						<div className="task-subtasks-item">
							<input type="text" className="edit-subtask-item" value={subtask.title} />
							<svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
								<g fill="#828FA3" fill-rule="evenodd">
									<path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" />
									<path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" />
								</g>
							</svg>
						</div>
					))}
				</div>
				<div className="add-new-subtask-button-wrapper">
					<button>
						<svg className='navbar-add-board-icon add-new-board-icon' xmlns="http://www.w3.org/2000/svg" width="12" height="12">
							<path d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z" fill="currentcolor" />
						</svg>
						Add New Subtask
					</button>
				</div>
			</div>
			<div className="switch-status-dropdown-wrapper">
				<div className="switch-status-dropdown-label">
					Status
				</div>
				<div className="switch-status-dropdown">
					<select
						className="current-status-dropdown"
						onFocus={() => setIsDropdownExpanded(true)}
						onBlur={() => setIsDropdownExpanded(false)}
						defaultValue={tempCurrentTask.status}
					// onChange={handleStatusChange}
					>
						{currentBoard.columns.map(column => (
							<option
								key={column.columnId} value={column.columnId}>{column.name}</option>
						))}
					</select>
				</div>
			</div>
			<div className="update-task-buttom-wrapper">
				<button>{currentTask === null ? "Create Task" : "Update Task"}</button>
			</div>
		</div>
	)
}

export default TaskRelatedModal