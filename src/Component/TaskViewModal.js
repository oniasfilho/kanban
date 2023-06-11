import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useUpdateBoardMutation } from '../features/api/apiSlice';
import { setCurrentTask, setModalType } from '../features/content/contentSlice';

const TaskViewModal = () => {
	const dispatch = useDispatch();
	const [updateBoard] = useUpdateBoardMutation();
	const { modalType, currentTask, currentBoard } = useSelector(state => state.content)

	const [isDropdownExpanded, setIsDropdownExpanded] = useState(false);

	const handleSubtaskChange = (subtask) => {
		const updatedTask = {
			...currentTask,
			subtasks: currentTask.subtasks.map((prevSubtask) =>
				prevSubtask.subTaskId === subtask.subTaskId
					? { ...prevSubtask, isCompleted: !prevSubtask.isCompleted }
					: prevSubtask
			),
		};
		dispatch(setCurrentTask(updatedTask));
		let updatedCurrentBoard = JSON.parse(JSON.stringify(currentBoard));
		updatedCurrentBoard.columns.forEach(column => {
			column.tasks.forEach(task => {
				if (task.taskId === currentTask.taskId) {
					task.subtasks = updatedTask.subtasks;
				}
			})
		})
		updateBoard(updatedCurrentBoard);
	};

	const handleStatusChange = (e) => {
		const differentColumns = e.target.value !== currentTask.status
		if (differentColumns) {
			const departingId = currentTask.status;
			const arrivingId = e.target.value;

			let updatedColumns = currentBoard.columns.map(column => {
				if (column.columnId === departingId) {
					let updatedColumn = structuredClone(column);
					updatedColumn.tasks = updatedColumn.tasks.filter(task => task.taskId !== currentTask.taskId)
					return updatedColumn
				}
				if (column.columnId === arrivingId) {
					let updatedColumn = structuredClone(column);
					updatedColumn.tasks.push(currentTask);
					return updatedColumn;
				}
				return column;
			});

			let updatedBoard = structuredClone(currentBoard);
			updatedBoard.columns = [...updatedColumns];

			updateBoard(updatedBoard);
			dispatch(setCurrentTask({ ...currentTask, status: arrivingId }));
		}
		setIsDropdownExpanded(oldVal => !oldVal)
		e.target.blur()
	}

	const handleClickEditButton = () => {
		dispatch(setModalType("TASK-EDIT"));
	}
	return (
		<>
			{modalType === "TASK-VIEW" && <>
				<div className='task-view-wrapper'>

					<div className="task-view-title">
						<p className="task-title">{currentTask.title}</p>
						<svg
							className="edit-task-svg"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 10 10"
							onClick={handleClickEditButton}
						>
							<circle cx="5" cy="1" r="1.100" fill="#828FA3" />
							<circle cx="5" cy="5" r="1.100" fill="#828FA3" />
							<circle cx="5" cy="9" r="1.100" fill="#828FA3" />
						</svg>
					</div>
					{currentTask.description &&
						<div className="task-view-description">
							{currentTask.description}
						</div>}
					<div className="task-view-subtasks">
						{currentTask.subtasks.length === 0
							? null
							: <div className="subtasks-header">
								{`Subtasks (${currentTask.subtasks.reduce((count, subtasks) => count + (subtasks.isCompleted ? 1 : 0), 0)} of ${currentTask.subtasks.length})`}
							</div>
						}
						<div className="subtasks-items-wrapper">
							{currentTask.subtasks.map(subtask => (
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
										defaultValue={currentTask.status}
										onChange={handleStatusChange}
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
			</>}

		</>
	)
}

export default TaskViewModal