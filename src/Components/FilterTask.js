import React, { useContext } from "react";
import TodoContext from "./Context/TodoContext";

const FilterTask = () => {
	const { filterTask } = useContext(TodoContext);

	return (
		<div className="search-box">
			<i className="bx bx-search search-icon"></i>
			<input
				type="text"
				placeholder="SEARCH TASK"
				className="search-input"
				onChange={(e) => filterTask(e.target.value)}
			/>
		</div>
	);
};

export default FilterTask;
