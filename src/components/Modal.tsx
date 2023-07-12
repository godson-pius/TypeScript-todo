import React from "react"

interface ModalProps {
    openModal: boolean
    title: string
    setOpenModal: (state: boolean) => boolean | void
    children: React.ReactNode
}
const Modal: React.FC<ModalProps> = ({ openModal, setOpenModal, title, children }) => {
    return (
        <>
            <dialog id="my_modal_3" className={`modal ${ openModal ? "modal-open" : null }`}>
                <div className="modal-box">
                    <button onClick={() => setOpenModal(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">{ title }</h3>
                    <div className="py-4">
                        { children }
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default Modal