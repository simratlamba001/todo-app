import React from 'react'

const Item = ({ item, removeItem }) => {
    console.log('render')
    return (
        <div className='mb-5'>
            <h1 className='text-2xl'>{item.title}</h1>
            <button
                onClick={() => removeItem(item.id)}
                className='text-red-500'>remove</button>
        </div>
    )
}

export default Item
