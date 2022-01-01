import React from "react";
import { useContext } from "react";
import ClearTask from "./ClearTask";
import TodoContext from "./Context/TodoContext";
import FilterTask from "./FilterTask";
import Task from "./Task";

const Tasks = () => {
	const todoContext = useContext(TodoContext);

	return (
		<div>
			<h3
				style={{
					color: "#1877f2",
					margin: "35px 0 20px  0",
					fontWeight: "bold",
				}}
			>
				TASKS
				<FilterTask />
			</h3>
			<ul className="task-list">
				{todoContext.tasks.length < 1 ? (
					<div>No task available</div>
				) : (
					<div>
						{todoContext.tasks.map((task) => (
							<Task key={task.id} task={task} />
						))}
						<ClearTask />
					</div>
				)}
			</ul>
		</div>
	);
};

export default Tasks;
