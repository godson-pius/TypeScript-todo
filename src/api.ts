import { ITodo } from "./types/todos"

const baseUrl = "http://localhost:3001"

export const getTodos = async (): Promise<ITodo[]> => {
    const res = await fetch(`${baseUrl}/todos`)
    const todos = res.json()
    return todos
}

export const addTodo = async (data: ITodo) => {
    try {
        const res = await fetch(`${baseUrl}/todos`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        return res.json()
    } catch (error) {
        return error
    }

}

export const updateTodo = async (data: ITodo) => {
    try {
        const res = await fetch(`${baseUrl}/todos/${data.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        return res.json()
    } catch (error) {
        return error
    }

}

export const deleteTodo = async (id: number) => {
    try {
        const res = await fetch(`${baseUrl}/todos/${id}`, {
            method: 'DELETE'
        })
        return res.json()
    } catch (error) {
        return error
    }
}