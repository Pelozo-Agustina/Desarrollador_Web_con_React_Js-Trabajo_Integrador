import { useReducer, useState } from 'react';
import './App.css';
import { TaskAdd } from './components/TaskAdd';
import { TaskList } from './components/TaskList';
import { useTask } from './hooks/useTask';

function App() {
	const {
		Tasks,
		TasksCount,
		pendingTasksCount,
		handleNewTask,
		handleDeleteTask,
		handleCompleteTask,
		handleUpdateTask,
	} = useTask();

	return (
		<>
			<div className='card-to-do'>
				{/* Encabezado */}				
				<h1>Lista de Tareas</h1>
				<br />
					{/* Contador de tareas */}
					<div className='counter-Tasks'>
						<h3>
						N° Tareas: <span>{TasksCount}</span>
						</h3>
						<h3>
						Tareas Pendientes: <span>{pendingTasksCount}</span>
						</h3>
					</div>

					{/* Agregar nueva tarea */}
					<div className='add-Task'>
						<h3>Agregar Tarea</h3>
						<TaskAdd handleNewTask={handleNewTask} />
					</div>

				{/* Lista de tareas */}
				<TaskList
					Tasks={Tasks}
					handleUpdateTask={handleUpdateTask}
					handleDeleteTask={handleDeleteTask}
					handleCompleteTask={handleCompleteTask}
				/>
			</div>

		</>
	);
}

export default App;
