



export default function Sidebar({proj, setView}) {
	return <section className="h-screen mt-14 fixed top-0 left-0 w-80 bg-stone-800 text-white rounded-tr-3xl p-6 flex gap-8 flex-col">

		<h1 className="text-2xl uppercase font-sans font-bold mt-16">Your Projects</h1>

		<div>
			<button
				onClick={setView}
				className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">+ Add Project</button>
		</div>

		<div className="flex flex-col gap-1">
			{proj.map((row, rowIndex) => (
				<button key={rowIndex} className=" text-left px-2 rounded-sm hover:text-stone-200 hover:bg-stone-800">{row.title}</button>
			))}
		</div>

	</section>
}