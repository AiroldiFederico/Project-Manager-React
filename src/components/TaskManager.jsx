import {useState, useRef} from "react";



export default function TaskManager() {

	const [task, setTask] = useState([])
	const inputTask = useRef();

	function handleTask() {
		const newTask = inputTask.current.value;
		if (newTask) { // Verifica che il nuovo task non sia vuoto
			setTask(actualTask => [...actualTask, newTask]);
			inputTask.current.value = ''; // Opzionale: pulisci l'input dopo l'aggiunta
		}
	}

	function handleDeleteTask(indexValue) {
		setTask(actualTask => actualTask.filter((_, i) => i !== indexValue))
	}

	//TODO: gestire i task per ogni projec, probabilemente dovrò fare un lift-up dello useState, e ciclare ogni contenitore di task per ogni project


	return <section className="mt-8 font-semibold">
		<h2 className="text-2xl font-bold text-stone-700 mb-4">Task</h2>

		<div className="flex ">
			<input type="text"
			       ref={inputTask}
			       className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
			<button
				onClick={handleTask}
				className="text-stone-700 hover:text-stone-950 ml-4" >Add Task
			</button>
		</div>

		<ul className="p-2 mt-8 rounded-md bg-stone-100">
			{task.map((value, indexValue) => (
				<li key={indexValue} className="flex justify-between my-4">
					<span>{value}</span>
					<button
						onClick={() => handleDeleteTask(indexValue)}
						className="text-stone-700 hover:text-red-500 me-2">Clear
					</button>
				</li>
			))}

		</ul>

	</section>
}