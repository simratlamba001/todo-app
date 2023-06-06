import React, { useCallback, useState } from 'react'
import { data } from './data'
import List from './List'



const SimpleCount = () => {

    const [todos, setTodos] = useState(data)

    const removeTodoEvent = useCallback((id) => {
        const newItems = todos.filter((item) => item.id !== id)
        setTodos(newItems);

    }, [todos])



    return (
        <div className='p-20'>
            <List items={todos} removeItem={removeTodoEvent} />
        </div>
    )
}

export default SimpleCount
