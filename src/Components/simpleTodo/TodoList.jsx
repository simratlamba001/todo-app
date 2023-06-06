import React from 'react'

const TodoList = ({ todos, removeItem }) => {
    return (
        <ul>
            {todos.map((item) => <li key={item.id} className='mb-4'>
                <p className='text-2xl'>{item.title}</p>
                <button onClick={() => removeItem(item.id)} className='text-red-500'>remove</button></li>)}
        </ul>
    )
}

export default TodoList
