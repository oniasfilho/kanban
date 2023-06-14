import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-localstorage-mock';
import { Provider } from 'react-redux';
import store from '../../app/store';
import TaskRelatedModal from '../TaskRelatedModal';
import setupTestEnvironmentForCreateTaskModal from '../../helpers/testUtils';

test("when there isn't a task selected, TaskRelatedModal should be for task creation purposes", async () => {
	setupTestEnvironmentForCreateTaskModal(store);
	render(
		<Provider store={store}>
			<TaskRelatedModal />
		</Provider>
	);

	const updateTaskButton = screen.queryByText('Update Task');
	const createTaskButton = screen.queryByText('Create Task');
	const deleteTaskButton = screen.queryByText('Delete Task');
	const cancelTaskCreationButton = screen.queryByText('Cancel');

	expect(updateTaskButton).not.toBeInTheDocument();
	expect(createTaskButton).toBeInTheDocument();
	expect(deleteTaskButton).not.toBeInTheDocument();
	expect(cancelTaskCreationButton).toBeInTheDocument();
});
