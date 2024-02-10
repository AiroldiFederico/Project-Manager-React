import { useRef } from "react";
import Modal from "./Modal.jsx";

export default function CreateProject({ onProjectCreate }) {

	const modal = useRef();
	const titleRef = useRef(null);
	const descriptionRef = useRef(null);
	const dateRef = useRef(null);

	function handleSave() {

		// validazione campi
		if (

			titleRef.current.value === '' ||
			descriptionRef.current.value === '' ||
			dateRef.current.value === ''

		) {

			modal.current.open();

		} else {

			// Crea un nuovo oggetto progetto basato sui valori degli input
			const newProject = {
				title: titleRef.current.value,
				description: descriptionRef.current.value,
				date: dateRef.current.value,
			};

			// Chiama una funzione callback passata come prop per aggiungere il nuovo progetto
			onProjectCreate(newProject);

			// Opzionalmente, resetta i campi di input dopo il salvataggio
			titleRef.current.value = '';
			descriptionRef.current.value = '';
			dateRef.current.value = '';
		}

	}

	function handleCancel() {
		titleRef.current.value = '';
		descriptionRef.current.value = '';
		dateRef.current.value = '';
	}

	return (

		<>
			<Modal ref={modal} buttonCaption="Okay">It seems that the fields are empty <br/> Please Check</Modal>

			<section className="h-full ml-80 p-12 w-[60rem] mt-14 flex flex-col gap-8">

				<div className="flex justify-end">
					<button
						onClick={handleCancel}
						className="text-stone-800 hover:text-stone-950 font-bold px-6 py-2">Cancel</button>
					<button
						onClick={handleSave}
						className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 font-bold">Save</button>
				</div>

				<div className="flex flex-col">
					<label className="text-sm font-bold uppercase text-stone-500">TITLE</label>
					<input
						ref={titleRef}
						type="text"
						className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"/>
				</div>

				<div className="flex flex-col">
					<label className="text-sm font-bold uppercase text-stone-500">DESCRIPTION</label>
					<textarea
						ref={descriptionRef}
						className="w-full p-1 border-b-2 rounded-sm whitespace-pre-wrap border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"/>
				</div>

				<div className="flex flex-col">
					<label className="text-sm font-bold uppercase text-stone-500">DUE DATE</label>
					<input
						ref={dateRef}
						type="date"
						className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"/>
				</div>
			</section>
		</>
	)
}