import axios from "axios";

export function getTodos() {
	return axios.get("http://localhost:8080/todo");
}

export function deleteTodos(id) {
	return axios({
		url: `http://localhost:8080/todo/${id}`,
		method: "DELETE",
	});
}

export function addTodo({ name, status ,description}) {
	return axios({
		url: `http://localhost:8080/todo`,
		method: "POST",
		data: {
			name,
			status,description
		},
	});
}

export function toggleTodoStatus({ id, newStatus }) {
	return axios({
		url: `http://localhost:8080/todo/${id}`,
		method: "PATCH",
		data: {
			status: newStatus,
		},
	});
}
