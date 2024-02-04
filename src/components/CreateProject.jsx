


export default function CreateProject() {
	return <section className="h-full ml-80 p-12 w-[60rem] mt-14 flex flex-col gap-8">

		<div className="flex justify-end">
			<button className="text-stone-800 hover:text-stone-950 font-bold px-6 py-2">Cancel</button>
			<button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 font-bold">Save</button>
		</div>

		<div className="flex flex-col">
			<label className="text-sm font-bold uppercase text-stone-500">TITLE</label>
			<input type="text" className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"/>
		</div>

		<div className="flex flex-col">
			<label className="text-sm font-bold uppercase text-stone-500">DESCRIPTION</label>
			<textarea className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"/>
		</div>

		<div className="flex flex-col">
			<label className="text-sm font-bold uppercase text-stone-500">DUE DATE</label>
			<input type="date" className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"/>
		</div>

	</section>
}