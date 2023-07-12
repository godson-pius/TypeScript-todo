import React, { FormEventHandler, useState } from 'react'
import { updateTodo } from '../api'
import { toast } from 'react-toastify'
import { ITodo } from '../types/todos'

interface UpdateTodoProps {
    todo: ITodo
}

const UpdateTodo: React.FC<UpdateTodoProps> = ({ todo }) => {
  const [inputs, setInputs] = useState({ title: '', task: '' })

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const data = {
      id: todo.id,
      title: inputs.title || todo.title,
      task: inputs.task || todo.task
    }
    try {
      const res = await updateTodo(data)
      if (res) {
        toast.success('Todo updated!', { autoClose: 1000, hideProgressBar: true, theme: 'dark' })
        setInputs({ title: '', task: '' })
        setInterval(() => window.location.reload(), 2000)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" required placeholder="Task title..." defaultValue={todo.title} className="input input-bordered w-full mb-4" onChange={(e) => inputs.title = e.target.value} />
        <textarea required className="textarea textarea-bordered w-full" placeholder="Task..." onChange={(e) => inputs.task = e.target.value} defaultValue={todo.task} ></textarea>

        <button type='submit' className='btn btn-success mt-4 float-right'>Update Todo</button>
      </form>
    </>
  )
}

export default UpdateTodo