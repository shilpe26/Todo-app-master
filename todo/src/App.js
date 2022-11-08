import "./App.css";
import { Routes, Route } from "react-router-dom";
import SingleTodo from "./TodoRouting/SingleTodo";
import Todo from "./todoComponents/Todo";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="container App">
		{loading ?
		(<div className="loader-container">
        <div className="spinner"></div>
      </div>)
		:
		( <Routes>
			<Route path="/" element={<Todo />} />
			<Route path="/todo/:id" element={<SingleTodo />} />

		</Routes> )
		}
      
    </div>
  );
}

export default App;



