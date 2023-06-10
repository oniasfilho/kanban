import React, { useState } from 'react';

const GenericModal = ({ modalExpanded, setModalExpanded, localTask, setLocalTask, updateBoard, currentBoard }) => {
	const [isDropdownExpanded, setIsDropdownExpanded] = useState(false);
	const handleOutsideClick = (e) => {
		if (e.target.closest('.generic-modal') === null) {
			setModalExpanded(!modalExpanded);
		}
	};

	const handleSubtaskChange = (subtask) => {
		const updatedTask = {
			...localTask,
			subtasks: localTask.subtasks.map((prevSubtask) =>
				prevSubtask.subTaskId === subtask.subTaskId
					? { ...prevSubtask, isCompleted: !prevSubtask.isCompleted }
					: prevSubtask
			),
		};
		setLocalTask(updatedTask);

		let updatedCurrentBoard = JSON.parse(JSON.stringify(currentBoard));
		updatedCurrentBoard.columns.forEach(column => {
			column.tasks.forEach(task => {
				if (task.taskId === localTask.taskId) {
					task.subtasks = updatedTask.subtasks;
				}
			})
		})
		updateBoard(updatedCurrentBoard);
	};

	if (!modalExpanded || localTask == null) return null;

	return (
		<div className='generic-modal-wrapper' onClick={handleOutsideClick}>
			<div className='generic-modal'>
				<div className="task-view-title">
					<p className="task-title">{localTask.title}</p>
					<svg className="edit-task-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
						<circle cx="5" cy="1" r="1.100" fill="#828FA3" />
						<circle cx="5" cy="5" r="1.100" fill="#828FA3" />
						<circle cx="5" cy="9" r="1.100" fill="#828FA3" />
					</svg>
				</div>
				{localTask.description &&
					<div className="task-view-description">
						{localTask.description}
					</div>}
				<div className="task-view-subtasks">
					{localTask.subtasks.length === 0
						? null
						: <div className="subtasks-header">
							{`Subtasks (${localTask.subtasks.reduce((count, subtasks) => count + (subtasks.isCompleted ? 1 : 0), 0)} of ${localTask.subtasks.length})`}
						</div>
					}
					<div className="subtasks-items-wrapper">
						{localTask.subtasks.map(subtask => (
							<div key={subtask.subTaskId} className="subtask-item">
								<div className="checkbox-wrapper">
									<input
										type="checkbox"
										checked={subtask.isCompleted}
										onChange={() => handleSubtaskChange(subtask)}
									/>
								</div>
								<p className={`subtask ${subtask.isCompleted && 'checked'}`}>
									{subtask.title}
								</p>
							</div>
						))}
					</div>
					<div className="current-status-wrapper">
						<div className="current-status-title">
							Current Status
						</div>
						<div className="current-status-dropdown-wrapper">
							<div className="current-status-dropdown-container">
								<select
									className="current-status-dropdown"
									onFocus={() => setIsDropdownExpanded(true)}
									onBlur={() => setIsDropdownExpanded(false)}
									onChange={(e) => {
										setIsDropdownExpanded(oldVal => !oldVal)
										e.target.blur()
									}}
								>
									{currentBoard.columns.map(column => (
										<option
											key={column.columnId} value={column.columnId}>{column.name}</option>
									))}
								</select>
								<div className={`current-status-arrow`}>
									{isDropdownExpanded
										? <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
											<path stroke="#635FC7" strokeWidth="2" fill="none" d="M9 6 5 2 1 6" />
										</svg>
										: <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
											<path stroke="#635FC7" strokeWidth="2" fill="none" d="m1 1 4 4 4-4" />
										</svg>
									}
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
};

export default GenericModal;
