import React from 'react'
import { useSelector } from 'react-redux'

import { DragDropContext, Draggable } from 'react-beautiful-dnd'
import { StrictModeDroppable as Droppable } from '../helpers/StrictModeDroppable'

const Columns = () => {
	const { currentBoard } = useSelector(state => state.content)
	const { columns } = currentBoard;
	return (
		<div className='columns-wrapper'>
			{columns.map((column) => (
				<div className="single-column">
					<div className="column-header-wrapper">
						<div className="todo-circle" />{column.name} ( {column.tasks.length} )
					</div>
					<DragDropContext>
						<Droppable droppableId='cards'>
							{(provided) => (
								<div className="column-items" {...provided.droppableProps} ref={provided.innerRef}>
									{column.tasks.map((each, index) => (
										<Draggable
											key={each.id}
											draggableId={each.id}
											index={index}
										>
											{(provided) => (
												<div key={each.id} className="column-item" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
													<p className="task-title">
														{each.title}
													</p>
													<p className="subtasks-status">
														{each.subtasks.reduce((count, subtask) => count + (subtask.isCompleted ? 1 : 0), 0)} of {each.subtasks.length} subtasks
													</p>
												</div>
											)}
										</Draggable>
									))}
								</div>
							)}
						</Droppable>
					</DragDropContext>
				</div>
			))}
		</div>
	)
}

export default Columns