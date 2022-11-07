import "./App.css";
import { Routes, Route } from "react-router-dom";
import SingleTodo from "./TodoRouting/SingleTodo";
import Todo from "./todoComponents/Todo";


function App() {
		
 	return (
 		<div className="App">
 			<Routes>
 				<Route path="/" element={<Todo />} />
 				<Route path="/todo/:id" element={<SingleTodo />} />

 			</Routes>
		</div>
 	);

 }

export default App;
