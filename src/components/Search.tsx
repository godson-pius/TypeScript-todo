import React, { useState } from 'react'
import Modal from './Modal'
import { getTodos } from '../api'

import { ITodo } from '../types/todos'
import AddTodo from './AddTodo'

interface SearchProps {
    todos: ITodo[]
    setTodos: (query: ITodo[]) => void
}

const Search: React.FC<SearchProps> = ({ todos, setTodos }) => {
    const [openModal, setOpenModal] = useState<boolean>(false)

    const searchTodos = async (e: any) => {
        const query = e.target.value
        if (query != '') {
            const search = todos.filter((e) => e.title.toLowerCase().includes(query.toLowerCase()))
            setTodos(search)
        } else {
            const res = await getTodos()
            setTodos(res)
        }
    }
    return (
        <>
            <div className='w-full flex justify-center items-start gap-3'>
                <input onChange={searchTodos} type="text" placeholder="Search..." className="input input-bordered w-96 mb-4" />
                <button className='btn btn-primary' onClick={() => setOpenModal(true)}>Add Todo</button>
            </div>

            <Modal openModal={openModal} setOpenModal={setOpenModal} title='Add Todo'>
                <AddTodo />
            </Modal>
        </>
    )
}

export default Search;