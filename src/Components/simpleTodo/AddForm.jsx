import React, { useState } from 'react'

const AddForm = ({ addNewTodo }) => {
    const [newTodo, setNewTodo] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addNewTodo(newTodo)
        setNewTodo('')
    }
    return (
        <form className='mb-4' onSubmit={handleSubmit}>
            <input type="text" className='border border-gray-500 p-2'
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />

            <button type='submit' className='bg-blue-500 text-white p-2 border border-blue-500'>Add</button>
        </form>
    )
}

export default AddForm
