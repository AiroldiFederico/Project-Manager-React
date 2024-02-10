
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';




const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
	const dialog = useRef();

	useImperativeHandle(ref, () => {
		return {
			open() {
				dialog.current.showModal();
			},
		};
	});

	return createPortal(
		<dialog
			ref={dialog}
			className="backdrop:bg-stone-900/90 p-4 rounded-md  font-semibold shadow-md fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white max-w-lg w-80"
		>
			{children}
			<form method="dialog" className="mt-4 text-right">
				<button
					className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 font-bold"
				>{buttonCaption}</button>
			</form>
		</dialog>,
		document.getElementById('modal-root')
	);
});

export default Modal;