import React, { useEffect, useState } from 'react';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { StrictModeDroppable as Droppable } from '../helpers/StrictModeDroppable';
import { useSelector, useDispatch } from 'react-redux';
import { updateBoard } from '../features/content/contentSlice';

const Columns = () => {
	const { currentBoard } = useSelector(state => state.content);
	const [localColumns, setLocalColumns] = useState(currentBoard.columns);

	const dispatch = useDispatch();

	useEffect(() => {
		setLocalColumns(currentBoard.columns)
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

		const updatedColumns = JSON.parse(JSON.stringify(localColumns));

		const sourceColumnIndex = updatedColumns.findIndex(
			(column) => column.id === source.droppableId
		);
		const sourceColumn = updatedColumns[sourceColumnIndex];
		const [removedTask] = sourceColumn.tasks.splice(source.index, 1);

		const destinationColumnIndex = updatedColumns.findIndex(
			(column) => column.id === destination.droppableId
		);
		const destinationColumn = updatedColumns[destinationColumnIndex];
		destinationColumn.tasks.splice(destination.index, 0, removedTask);

		setLocalColumns(updatedColumns);
		dispatch(updateBoard(updatedColumns));
	};

	return (
		<DragDropContext onDragEnd={handleDragEnd}>
			<div className="columns-wrapper">
				{localColumns.map((column) => (
					<div className="single-column" key={column.id}>
						<div className="column-header-wrapper">
							<div className="todo-circle" />
							{column.name} ({column.tasks.length})
						</div>
						<Droppable droppableId={column.id}>
							{(provided) => (
								<div
									className="column-items"
									ref={provided.innerRef}
									{...provided.droppableProps}
								>
									{column.tasks.map((each, index) => (
										<Draggable key={each.id} draggableId={each.id} index={index}>
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