import "./App.css";
import { Routes, Route } from "react-router-dom";
import SingleTodo from "./TodoRouting.jsx/SingleTodo";
import Todo from "./todoComponents/Todo";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Todo />} />
				<Route path="/todoItem/:id" element={<SingleTodo />} />

			</Routes>
		</div>
	);
}

export default App;
