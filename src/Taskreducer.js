export const TaskReducer = (initialState, action) => {
	switch (action.type) {
		case 'Add Task':
			return [...initialState, action.payload];

		case 'Delete Task':
			return initialState.filter(Task => Task.id !== action.payload);

		case 'Complete Task':
			return initialState.map(Task => {
				if (Task.id === action.payload) {
					return {
						...Task,
						completada: !Task.completada,
					};
				}

				return Task;
			});

		case 'Update Task':
			return initialState.map(Task => {
				if (Task.id === action.payload.id) {
					return {
						...Task,
						nombre: action.payload.nombre,
					};
				}

				return Task;
			});

		default:
			return initialState;
	}
};
