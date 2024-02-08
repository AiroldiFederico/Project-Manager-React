

export default function TaskManager() {
	return <section className="mt-8">
		<h2 className="text-2xl font-bold text-stone-700 mb-4">Task</h2>

		<div className="flex ">
			<input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
			<button className="text-stone-700 hover:text-stone-950" >Add Task</button>
		</div>

	</section>
}