



export default function DetailsProject({objProject, index, deleteTask}) {
	return <section className="h-full ml-80 p-12 w-[60rem] relative border mt-14 flex flex-col">

		<button
			onClick={() => deleteTask(index)}
			className="text-stone-800 hover:text-stone-950 font-bold px-6 py-2 absolute right-6">
			Delete
		</button>

		<h1 className="text-3xl font-bold text-stone-600 mb-2">{objProject[index].title}</h1>

		<p className="mb-4 text-stone-400">{objProject[index].date}</p>

		<p className="text-stone-600 whitespace-pre-wrap">{objProject[index].description}</p>

		<hr className="mt-6 border-2"/>

	</section>
}