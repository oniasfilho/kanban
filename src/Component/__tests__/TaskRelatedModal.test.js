import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-localstorage-mock';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import TaskRelatedModal from '../TaskRelatedModal'
import { setupTestEnvironmentForCreateTaskModal } from '../../helpers/testUtils';

test("when there isn't a task selected, TaskRelatedModal should be for task creation purposes", async () => {
	setupTestEnvironmentForCreateTaskModal(store);
	render(
		<Provider store={store}>
			<TaskRelatedModal />
		</Provider>
	);

	let updateTaskButton = screen.queryByText("Update Task");
	let createTaskButton = screen.queryByText("Create Task");
	let deleteTaskButton = screen.queryByText("Delete Task");
	let cancelTaskCreationButton = screen.queryByText("Cancel");

	expect(updateTaskButton).not.toBeInTheDocument();
	expect(createTaskButton).toBeInTheDocument();
	expect(deleteTaskButton).not.toBeInTheDocument();
	expect(cancelTaskCreationButton).toBeInTheDocument();
})