import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useUpdateTaskMutation } from '../features/api/apiSlice';
import {
	setCurrentTask,
	setModalType,
	setGenericModal,
} from '../features/content/contentSlice';
import generateRandomString from '../helpers/helperFunctions';

function TaskRelatedModal() {
	const dispatch = useDispatch();
	const [updateTask, { isLoading, isError, isSuccess, error }] =
		useUpdateTaskMutation();
	const [isDropdownExpanded, setIsDropdownExpanded] = useState(false);
	const { modalType, currentTask, currentBoard } = useSelector(
		(state) => state.content
	);
	const [tempCurrentTask, setTempCurrentTask] = useState(
		currentTask || {
			title: '',
			description: '',
			subtasks: [],
		}
	);
	const emptySubtask = {
		subTaskId: generateRandomString(),
		title: '',
		isCompleted: false,
	};

	useEffect(() => {
		if (isSuccess) {
			console.log('atualizado com sucesso');
		}

		if (isError) {
			console.log('erro ao atualizar');
			console.err(error);
		}
	}, [isSuccess, isError, isLoading, error]);

	const handleDeleteSubTask = (subTaskId) => {
		setTempCurrentTask((oldVal) => {
			const updatedSubtasks = oldVal.subtasks.filter(
				(e) => e.subTaskId !== subTaskId
			);
			return {
				...oldVal,
				subtasks: updatedSubtasks,
			};
		});
	};

	const handleChangeTaskInfos = (e) => {
		const { name, value } = e.target;
		setTempCurrentTask((oldVal) => ({
			...oldVal,
			[name]: value,
		}));
	};

	const handleAddSubtask = () => {
		setTempCurrentTask((oldVal) => {
			const updatedSubtasks = [...oldVal.subtasks, emptySubtask];
			return {
				...oldVal,
				subtasks: updatedSubtasks,
			};
		});
	};

	const alterTask = async (task, boardId) => {
		await updateTask({ task, boardId });
	};

	const handleSubmit = async () => {
		if (currentTask !== null) {
			const withoutSubTaskIds = structuredClone(tempCurrentTask);
			withoutSubTaskIds.subtasks = withoutSubTaskIds.subtasks.map((each) => ({
				title: each.title,
				isCompleted: each.isCompleted,
			}));
			await alterTask(withoutSubTaskIds, currentBoard.boardId);
			dispatch(setGenericModal(false));
			dispatch(setModalType(null));
		} else {
		}
	};

	const handleSubtaskChange = (e, id) => {
		const { value } = e.target;
		setTempCurrentTask((oldVal) => {
			const updatedSubtasks = oldVal.subtasks;
			updatedSubtasks.forEach((e) => {
				if (e.subTaskId === id) {
					e.title = value;
				}
			});
			return {
				...oldVal,
				subtasks: updatedSubtasks,
			};
		});
	};

	const handleSetStatus = (e) => {
		setTempCurrentTask((oldVal) => ({
			...oldVal,
			status: e.target.value,
		}));
	};

	const handleDelete = () => {};

	if (modalType !== 'TASK-EDIT' && modalType !== 'TASK-CREATE') return null;
	return (
		<div className='task-edit-wrapper'>
			<div className='task-edit-modal-title'>
				{currentTask !== null ? 'Edit Task' : 'Add New Task'}
			</div>
			<div className='task-title-wrapper'>
				<div className='task-title-input-label'>Title</div>
				<div className='task-title-input-wrapper'>
					<input
						name='title'
						className='task-title-input'
						type='text'
						value={tempCurrentTask.title}
						onChange={handleChangeTaskInfos}
					/>
				</div>
			</div>
			<div className='task-description-wrapper'>
				<div className='task-description-input-label'>Description</div>
				<div className='task-description-textarea-wrapper'>
					<textarea
						name='description'
						className='task-description-textarea'
						value={tempCurrentTask.description}
						placeholder="e.g Contact marketing to deliver latest feature's details."
						onChange={handleChangeTaskInfos}
					/>
				</div>
			</div>
			<div className='task-subtasks-wrapper'>
				<div className='task-subtasks-label'>Subtasks</div>
				<div className='task-subtasks-items-wrapper'>
					{tempCurrentTask.subtasks.map((subtask) => (
						<div className='task-subtasks-item'>
							<input
								type='text'
								className='edit-subtask-item'
								value={subtask.title}
								name='title'
								onChange={(e) => handleSubtaskChange(e, subtask.subTaskId)}
							/>
							<svg
								width='15'
								height='15'
								xmlns='http://www.w3.org/2000/svg'
								onClick={() => handleDeleteSubTask(subtask.subTaskId)}
							>
								<g fill='#828FA3' fillRule='evenodd'>
									<path d='m12.728 0 2.122 2.122L2.122 14.85 0 12.728z' />
									<path d='M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z' />
								</g>
							</svg>
						</div>
					))}
				</div>
				<div className='add-new-subtask-button-wrapper'>
					<button onClick={handleAddSubtask}>
						<svg
							className='navbar-add-board-icon add-new-board-icon'
							xmlns='http://www.w3.org/2000/svg'
							width='12'
							height='12'
						>
							<path
								d='M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z'
								fill='currentcolor'
							/>
						</svg>
						Add New Subtask
					</button>
				</div>
			</div>
			{currentTask === null && (
				<div className='switch-status-dropdown-wrapper'>
					<div className='switch-status-dropdown-label'>Status</div>
					<div className='switch-status-dropdown'>
						<select
							className='current-status-dropdown'
							onFocus={() => setIsDropdownExpanded(true)}
							onBlur={() => setIsDropdownExpanded(false)}
							defaultValue={tempCurrentTask.status}
							onChange={(e) => handleSetStatus(e)}
						>
							{currentBoard.columns.map((column) => (
								<option key={column.columnId} value={column.columnId}>
									{column.name}
								</option>
							))}
						</select>
					</div>
				</div>
			)}
			<div className='action-buttons-wrapper'>
				<div className='update-task-buttom-wrapper' onClick={handleSubmit}>
					<button style={{ cursor: 'pointer' }}>
						{currentTask === null ? 'Create Task' : 'Update Task'}
					</button>
				</div>
				<div className='delete-task-buttom-wrapper' onClick={handleDelete}>
					<button
						className='delete-cancel-task-button'
						name='create-or-update-task-button'
					>
						{currentTask === null ? 'Cancel' : 'Delete Task'}
					</button>
				</div>
			</div>
		</div>
	);
}

export default TaskRelatedModal;
