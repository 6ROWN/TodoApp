import { useContext } from "react";
import TodoContext from "./Context/TodoContext";

const Task = ({ task }) => {
	const { deleteTask, completeTask, findItem } = useContext(TodoContext);

	const deleteItem = () => {
		deleteTask(task.id);
	};

	return (
		<li className="list-item">
			<div className={`${task.isCompleted ? "completed" : ""}`}>
				{task.item}
			</div>
			<div className="icons">
				<span onClick={() => completeTask(task.id)}>
					{task.isCompleted ? (
						<i
							className="bx bx-check"
							style={{ color: "#13ce66" }}
						></i>
					) : (
						<i
							className="bx bx-check"
							style={{ color: "#ffc107" }}
						></i>
					)}
				</span>
				<span onClick={() => findItem(task.id)}>
					<i
						className="bx bxs-edit-alt"
						style={{ color: "#1877f2" }}
					></i>
				</span>
				<span onClick={deleteItem}>
					<i
						className="bx bxs-trash"
						style={{ color: "#f44336" }}
					></i>
				</span>
			</div>
		</li>
	);
};

export default Task;
