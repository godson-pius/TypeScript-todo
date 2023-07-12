import { useEffect, useState } from "react"
import { deleteTodo, getTodos } from "../api"
import { ITodo } from "../types/todos"
import Search from "./Search"
import { toast } from "react-toastify"
import Modal from "./Modal"
import UpdateTodo from "./UpdateTodo"

const TodoList = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false)
    const [updateTodo, setUpdateTodo] = useState<ITodo>({ id: 0,  title: '', task: '' })

    const handleGetTodos = async () => {
        const res = await getTodos()
        setTodos(res)
    }

    const handleDeleteTodo = async (id: number) => {
        const res = await deleteTodo(id)
        toast.success('Todo completed', { autoClose: 1000, hideProgressBar: true, theme: 'dark' })
        res ? setInterval(() => window.location.reload(), 2000) : null
    }

    const handleUpdateModal = (e: ITodo) => {
        setOpenUpdateModal(true)
        setUpdateTodo(e)
    }
    useEffect(() => {
        handleGetTodos()
    }, [])
    return (
        <>
            <Search todos={todos} setTodos={setTodos} />
            <div className="flex flex-wrap justify-center gap-5 my-5">
                {todos.length > 0 ? (
                    todos.map((e) => (
                        <div key={e.id} className="card w-[30rem] bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{e.title}</h2>
                                <p>{e.task}</p>
                                <div className="card-actions justify-end mt-8">
                                    <button onClick={() => handleDeleteTodo(e.id)} className="btn btn-success btn-sm">Tick</button>
                                    <button onClick={() => handleUpdateModal(e)} className="btn btn-info btn-outline btn-sm">Update</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : null}
            </div>
            <Modal openModal={openUpdateModal} setOpenModal={setOpenUpdateModal} title="Update Todo">
                <UpdateTodo todo={updateTodo} />
            </Modal>
        </>
    )
}

export default TodoList