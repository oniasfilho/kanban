// testUtils.js
import { setGenericModal, setModalType, setCurrentBoard, setCurrentTask } from '../features/content/contentSlice';
export const setupTestEnvironmentForCreateTaskModal = (store) => {
	store.dispatch(setGenericModal(true));
	store.dispatch(setModalType('TASK-EDIT'));
	store.dispatch(setCurrentTask(null));
	store.dispatch(
		store.dispatch(setCurrentBoard({
			boardId: '6488f79e32e6575e23fed6fd',
			name: 'Marketing Plan',
			columns: [
				{
					columnId: 'eb01e936-e707-4634-83c3-3318c1c0b64b',
					name: 'Todo',
					tasks: [
						{
							taskId: 'ef0765be-4fbf-444a-a716-6173b8a14c5b',
							title: 'God is good',
							description: 'all the time, and all the time...\n',
							status: 'eb01e936-e707-4634-83c3-3318c1c0b64b',
							subtasks: [
								{
									subTaskId: '7cd6dad6-9dbc-41ba-8057-08185b57f25e',
									title: 'God is good!!',
									isCompleted: true
								}
							]
						},
						{
							taskId: '7f9b4f63-e9bb-468e-9932-53b2778c3e25',
							title: 'Grandes coisas estão por vir',
							description: '',
							status: 'eb01e936-e707-4634-83c3-3318c1c0b64b',
							subtasks: []
						}
					]
				},
				{
					columnId: '64246403-4be3-4f69-b548-d5c5d802e61e',
					name: 'Doing',
					tasks: []
				},
				{
					columnId: '17c08614-c268-4883-8146-cbacc8b11f7c',
					name: 'Done',
					tasks: [
						{
							taskId: '430cfe57-1b81-465b-839a-369c574ab498',
							title: 'Grandes coisas vão acontecer neste lugaaaar!',
							description: 'ALELUIAS!!!!!!!!',
							status: '17c08614-c268-4883-8146-cbacc8b11f7c',
							subtasks: [
								{
									subTaskId: 'f5645ab6-1630-4a4a-a99f-d752387a328b',
									title: 'EU CREIO',
									isCompleted: true
								},
								{
									subTaskId: '0ef5b4dc-1895-43fd-9fec-d40abb30be2b',
									title: 'Glória a Deus',
									isCompleted: true
								}
							]
						}
					]
				}
			]
		},))
	);
};
