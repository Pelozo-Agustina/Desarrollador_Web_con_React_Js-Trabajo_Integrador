import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { TaskUpdate } from './TaskUpdate';

export const TaskItem = ({
	Task,
	handleUpdateTask,
	handleDeleteTask,
	handleCompleteTask,
}) => {
	return (
		<li>
			<span onClick={() => handleCompleteTask(Task.id)}>
				<label
					className={`container-completada ${Task.completada ? 'active' : ''}`}
				></label>
			</span>
			<TaskUpdate Task={Task} handleUpdateTask={handleUpdateTask} />
			<button
				className='btn-delete'
				onClick={() => handleDeleteTask(Task.id)}
			>
				<FaTrash />
			</button>
		</li>
	);
};
