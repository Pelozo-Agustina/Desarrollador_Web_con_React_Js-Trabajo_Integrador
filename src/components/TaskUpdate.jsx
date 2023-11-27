import { useRef, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useForm } from '../hooks/useForm';

export const TaskUpdate = ({ Task, handleUpdateTask }) => {
	const { updateNombre, onInputChange } = useForm({
		updateNombre: Task.nombre,
	});

	const [disabled, setDisabled] = useState(true);
	const focusInputRef = useRef();

	const onSubmitUpdate = e => {
		e.preventDefault();

		const id = Task.id;
		const nombre = updateNombre;

		handleUpdateTask(id, nombre);

		setDisabled(!disabled);

		focusInputRef.current.focus();
	};

	return (
		<form onSubmit={onSubmitUpdate}>
			<input
				type='text'
				className={`input-update ${
					Task.completada ? 'text-decoration-dashed' : ''
				}`}
				name='updateNombre'
				value={updateNombre}
				onChange={onInputChange}
				placeholder='Escribe tu tarea aquí'
				readOnly={disabled}
				ref={focusInputRef}
			/>

			<button className='btn-edit' type='submit'>
				<FaEdit />
			</button>
		</form>
	);
};
