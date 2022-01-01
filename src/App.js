import React from "react";

import "./App.css";
import TodoState from "./Components/Context/TodoState";

import TodoForm from "./Components/TodoForm";

const App = () => {
	return (
		<TodoState>
			<div className="container">
				<TodoForm />
			</div>
		</TodoState>
	);
};

export default App;
