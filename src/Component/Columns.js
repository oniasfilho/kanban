import React, { useEffect, useState } from 'react';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { StrictModeDroppable as Droppable } from '../helpers/StrictModeDroppable';
import { useSelector } from 'react-redux';
import { useUpdateBoardMutation } from '../features/api/apiSlice';

const Columns = () => {
	const { currentBoard } = useSelector(state => state.content);
	const [localColumns, setLocalColumns] = useState(currentBoard.columns);
	const [updateBoard] = useUpdateBoardMutation();

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
			</div>
		</DragDropContext>
	);
};

export default Columns;