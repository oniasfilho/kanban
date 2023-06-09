import React, { useEffect, useState } from 'react';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { StrictModeDroppable as Droppable } from '../helpers/StrictModeDroppable';
import { useSelector } from 'react-redux';
import { useUpdateBoardMutation } from '../features/api/apiSlice';

const Columns = () => {
	const { currentBoard } = useSelector(state => state.content);
	const [localColumns, setLocalColumns] = useState(currentBoard.columns);
	const [modalExpanded, setModalExpanded] = useState(false);
	const [isDropdownExpanded, setIsDropdownExpanded] = useState(false);
	const [updateBoard] = useUpdateBoardMutation();
	const testBoard = useSelector(state => state.content.currentBoard);
	const [testTask, setTestTask] = useState(null);

	useEffect(() => {
		setLocalColumns(currentBoard?.columns)
	}, [currentBoard])

	const handleDragEnd = (result) => {
		const { source, destination } = result;
		if (!destination) return;
		if (
			source.droppableId === destination.droppableId &&
			source.index === destination.index
		) {
			return;
		}
		const updatedColumns = structuredClone(localColumns);

		const sourceColumnIndex = updatedColumns.findIndex(
			(column) => column.columnId === source.droppableId
		);
		const sourceColumn = updatedColumns[sourceColumnIndex];
		const [removedTask] = sourceColumn.tasks.splice(source.index, 1);

		const destinationColumnIndex = updatedColumns.findIndex(
			(column) => column.columnId === destination.droppableId
		);

		const destinationColumn = updatedColumns[destinationColumnIndex];
		destinationColumn.tasks.splice(destination.index, 0, removedTask);

		setLocalColumns(updatedColumns);
		let updatedCurrentBoard = structuredClone(currentBoard);
		updatedCurrentBoard.columns = updatedColumns;
		updateBoard(updatedCurrentBoard)
	};

	const handleClick = (e) => {
		if (e.target.closest('.generic-modal') === null) {
			setModalExpanded(!modalExpanded);
		}
	}

	return (
		<DragDropContext onDragEnd={handleDragEnd}>
			<div className="columns-wrapper">
				{localColumns.map((column) => (
					<div className="single-column" key={column.columnId}>
						<div className="column-header-wrapper">
							<div className="todo-circle" />
							{column.name} ({column.tasks.length})
						</div>
						<Droppable droppableId={column.columnId}>
							{(provided) => (
								<div
									className="column-items"
									ref={provided.innerRef}
									{...provided.droppableProps}
								>
									{column.tasks.map((each, index) => (
										<Draggable key={each.taskId} draggableId={each.taskId} index={index}>
											{(provided) => (
												<div
													className="column-item"
													ref={provided.innerRef}
													{...provided.draggableProps}
													{...provided.dragHandleProps}
													onClick={() => {
														setTestTask(each)
														setModalExpanded(!modalExpanded)
													}}
												>
													<p className="task-title">{each.title}</p>
													<p className="subtasks-status">
														{each.subtasks.reduce(
															(count, subtask) =>
																count + (subtask.isCompleted ? 1 : 0),
															0
														)}{' '}
														of {each.subtasks.length} subtasks
													</p>
												</div>
											)}
										</Draggable>
									))}
									{provided.placeholder}
								</div>
							)}
						</Droppable>
					</div>
				))}
				{!modalExpanded && testTask != null &&
					<div className='generic-modal-wrapper' onClick={handleClick}>
						<div className='generic-modal'>
							<div className="task-view-title">
								{testTask.title}
							</div>
							{testTask.description !== "" && testTask.description !== null &&
								<div className="task-view-description">
									{testTask.description}
								</div>}
							<div className="task-view-subtasks">
								<div className="subtasks-header">
									{`Subtasks (${testTask.subtasks.reduce((count, subtasks) => count + (subtasks.isCompleted ? 1 : 0), 0)} of ${testTask.subtasks.length})`}
								</div>
								<div className="subtasks-items-wrapper">
									{testTask.subtasks.map(subtask => (
										<div key={subtask.subTaskId} className="subtask-item">
											<div className="checkbox-wrapper">
												<input type='checkbox' checked={subtask.isCompleted} />
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
												open={isDropdownExpanded}
												onClick={() => setIsDropdownExpanded(!isDropdownExpanded)}
											>
												{currentBoard.columns.map(column => (
													<option value={column.columnId}>{column.name}</option>
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
					</div>}
			</div>
		</DragDropContext>
	);
};

export default Columns;