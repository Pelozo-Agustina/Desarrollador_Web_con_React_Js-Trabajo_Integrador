import React from 'react';
import { useForm } from '../hooks/useForm';

export const TaskAdd = ({ handleNewTask }) => {
	const { nombre, onInputChange, onResetForm } = useForm({
		nombre: '',
	});

	const onFormSubmit = e => {
		e.preventDefault();

		if (nombre.length <= 1) return;

		let NewTask = {
			id: new Date().getTime(),
			nombre: nombre,
			completada: false,
		};

		handleNewTask(NewTask);
		onResetForm();
	};

	return (
		<form onSubmit={onFormSubmit}>
			<input
				type='text'
				className='input-add'
				name='nombre'
				value={nombre}
				onChange={onInputChange}
				placeholder='Escribe tu tarea aquí'
			/>

			<button className='btn-add' type='submit'>
				Agregar
			</button>
		</form>
			
	);

};
