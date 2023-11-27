import React from 'react';
import { TaskItem } from './TaskItem';

export const TaskList = ({
	Tasks,
	handleUpdateTask,
	handleDeleteTask,
	handleCompleteTask,
}) => {
	return (
		<ul>
			{Tasks.map(Task => (
				<TaskItem
					key={Task.id}
					Task={Task}
					handleUpdateTask={handleUpdateTask}
					handleDeleteTask={handleDeleteTask}
					handleCompleteTask={handleCompleteTask}
				/>
			))}
		</ul>
	);
};
