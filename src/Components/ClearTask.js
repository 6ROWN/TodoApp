import React, { useContext } from "react";
import TodoContext from "./Context/TodoContext";

const ClearTask = () => {
	const { clearTasks } = useContext(TodoContext);
	return (
		<div>
			<button
				className="btn"
				style={{ marginTop: "20px" }}
				onClick={clearTasks}
			>
				CLEAR TASKS
			</button>
		</div>
	);
};

export default ClearTask;
