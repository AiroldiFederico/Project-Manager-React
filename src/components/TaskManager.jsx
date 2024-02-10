import {useState, useRef} from "react";



export default function TaskManager({ tasks, onAddTask, onDeleteTask }) {

	const inputTask = useRef();

	function addTask() {
		const newTask = inputTask.current.value;
		if (newTask) {
			onAddTask(newTask);
			inputTask.current.value = '';
		}
	}


	return <section className="mt-8 font-semibold">
		<h2 className="text-2xl font-bold text-stone-700 mb-4">Task</h2>

		<div className="flex ">
			<input type="text"
			       ref={inputTask}
			       className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
			<button
				onClick={addTask}
				className="text-stone-700 hover:text-stone-950 ml-4" >Add Task
			</button>
		</div>

		{tasks && tasks.length > 0 && (
			<ul className="p-2 mt-8 rounded-md bg-stone-100">
				{tasks.map((value, indexValue) => (
					<li key={indexValue} className="flex justify-between my-4">
						<span>{value}</span>
						<button onClick={() => onDeleteTask(indexValue)} className="text-stone-700 hover:text-red-500 me-2">Clear</button>
					</li>
				))}
			</ul>
		)}


	</section>
}