import React from 'react'
import { useSelector } from 'react-redux'

const Columns = () => {
	const { currentBoard } = useSelector(state => state.content)
	const column = currentBoard.columns[0];
	const { tasks } = column;
	return (
		<div className='columns-wrapper'>
			<div className="single-column">
				<div className="column-header-wrapper">
					<div className="todo-circle" />{column.name} ( {column.tasks.length} )
				</div>
				<div className="column-items">
					{tasks.map((each) => (
						<div key={each.title} className="column-item">
							<p className="task-title">
								{each.title}
							</p>
							<p className="subtasks-status">
								{each.subtasks.reduce((count, subtask) => count + (subtask.isCompleted ? 1 : 0), 0)} of {each.subtasks.length} subtasks
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Columns