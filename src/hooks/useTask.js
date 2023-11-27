import { useEffect, useReducer } from 'react';
import { TaskReducer } from '../Taskreducer';

export const useTask = () => {
	const initialState = [];

    const init = () => {
        return JSON.parse(localStorage.getItem('Tasks')) || []
    }

	const [Tasks, dispatch] = useReducer(
		TaskReducer,
		initialState,
		init
	);

    const TasksCount = Tasks.length
    const pendingTasksCount = Tasks.filter(Task => !Task.completada).length


    useEffect(() => {
        localStorage.setItem('Tasks', JSON.stringify(Tasks))
    }, [Tasks])


	const handleNewTask = Task => {
		const action = {
			type: 'Add Task',
			payload: Task,
		};

		dispatch(action);
	};

	const handleDeleteTask = id => {
		const action = {
			type: 'Delete Task',
			payload: id,
		};

		dispatch(action);
	};

	const handleCompleteTask = id => {
		const action = {
			type: 'Complete Task',
			payload: id,
		};

		dispatch(action);
	};

	const handleUpdateTask = (id, nombre) => {
		const action = {
			type: 'Update Task',
			payload: {
				id,
				nombre,
			},
		};

		dispatch(action);
	};

    return{
        Tasks,
        TasksCount,
        pendingTasksCount,
        handleNewTask,
        handleDeleteTask,
        handleCompleteTask,
        handleUpdateTask
    }
};
