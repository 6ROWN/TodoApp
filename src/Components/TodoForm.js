import React, { useState, useContext, useEffect } from "react";
import Header from "./Header";
import Tasks from "./Tasks";
import TodoContext from "./Context/TodoContext";

const TodoForm = () => {
	const [item, setItem] = useState("");

	const { addTask, editItem, editTask } = useContext(TodoContext);

	useEffect(() => {
		if (editItem) {
			setItem(editItem.item);
		} else {
			setItem("");
		}
	}, [editItem]);

	const onChange = (e) => {
		setItem(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (!editItem) {
			addTask(item);
			setItem("");
		} else {
			editTask(editItem.id, item);
		}
	};

	return (
		<form className="form" onSubmit={onSubmit}>
			<Header />
			<input
				type="text"
				placeholder="Add task here"
				style={styles}
				value={item}
				onChange={onChange}
				required
			/>
			<div>
				<button className="btn" style={{ marginRight: "10px" }}>
					{editItem ? "EDIT TASK" : "ADD ITEM"}
				</button>
			</div>

			<Tasks />
		</form>
	);
};

const styles = {
	background: "transparent",
	width: "60%",
	padding: "15px",
	fontSize: "15px",
	margin: "25px 0",
	border: "1px solid #1877f2",
	outline: "none",
	borderRadius: "5px",
	textAlign: "center",
};

export default TodoForm;
