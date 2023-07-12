import { FormEventHandler, useState } from 'react'
import { addTodo } from '../api'
import { v4 as uuid } from 'uuid'
import { toast } from 'react-toastify'

const AddTodo = () => {
  const [inputs, setInputs] = useState({ title: '', task: '' })

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const data = {
      id: Number(uuid()),
      title: inputs.title,
      task: inputs.task
    }
    try {
      const res = await addTodo(data)
      if (res) {
        toast.success('Todo added!', { autoClose: 1000, hideProgressBar: true, theme: 'dark' })
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
        <input type="text" required placeholder="Task title..." defaultValue={inputs.title} className="input input-bordered w-full mb-4" onChange={(e) => inputs.title = e.target.value} />
        <textarea required className="textarea textarea-bordered w-full" placeholder="Task..." onChange={(e) => inputs.task = e.target.value} defaultValue={inputs.task} ></textarea>

        <button type='submit' className='btn btn-success mt-4 float-right'>Create Todo</button>
      </form>
    </>
  )
}

export default AddTodo