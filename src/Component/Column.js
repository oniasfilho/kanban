import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { StrictModeDroppable } from '../helpers/StrictModeDroppable';
import { useDispatch } from 'react-redux';
import { setCurrentTask, setModalType } from '../features/content/contentSlice';

const Column = ({ column, setModalExpanded, modalExpanded, index }) => {
	const dispatch = useDispatch();
	const handleTaskClick = (each) => {
		dispatch(setCurrentTask(each));
		dispatch(setModalType("TASK-VIEW"));
		setModalExpanded(!modalExpanded);
	};

	return (
		<div className="single-column">
			<div className="column-header-wrapper">
				<div className={`todo-circle column-circle-${index}`} />
				{column.name} ({column.tasks.length})
			</div>
			<StrictModeDroppable droppableId={column.columnId}>
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
										onClick={() => handleTaskClick(each)}
									>
										<p className="task-title">{each.title}</p>
										{each.subtasks.length === 0
											? null
											: <p className="subtasks-status">
												{each.subtasks.reduce(
													(count, subtask) =>
														count + (subtask.isCompleted ? 1 : 0),
													0
												)}{' '}
												of {each.subtasks.length} subtasks
											</p>}
									</div>
								)}
							</Draggable>
						))}
						{provided.placeholder}
					</div>
				)}
			</StrictModeDroppable>
		</div>
	);
};

export default Column;
