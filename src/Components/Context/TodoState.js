import React, { useState } from "react";
import TodoContext from "./TodoContext";

const TodoState = (props) => {
	const [tasks, setTasks] = useState([]);
	const [editItem, setEditItem] = useState(null);

	//Add tasks
	const addTask = (item) => {
		setTasks([...tasks, { id: Date.now(), item }]);
	};

	//Delete task
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	//Clear all tasks
	const clearTasks = () => {
		setTasks([]);
	};

	//Filter task
	const filterTask = (searchParam) => {
		setTasks(
			tasks.filter((task) =>
				task.item.toLowerCase().includes(searchParam.toLowerCase())
			)
		);
	};

	//Find item to update
	const findItem = (id) => {
		const item = tasks.find((task) => task.id === id);
		setEditItem(item);
	};

	// Edit task
	const editTask = (id, item) => {
		const newTasks = tasks.map((task) =>
			task.id === id ? { id, item } : task
		);
		setTasks(newTasks);
		setEditItem(null);
	};

	//Complete task
	const completeTask = (id) => {
		setTasks(
			tasks.map((task) => {
				if (task.id === id) {
					return {
						...task,
						isCompleted: !task.isCompleted,
						findItem,
					};
				} else {
					return task;
				}
			})
		);
	};

	return (
		<TodoContext.Provider
			value={{
				tasks,
				addTask,
				deleteTask,
				clearTasks,
				completeTask,
				filterTask,
				findItem,
				editTask,
				editItem,
			}}
		>
			{props.children}
		</TodoContext.Provider>
	);
};

export default TodoState;
