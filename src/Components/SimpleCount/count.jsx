import React, { useState } from 'react'

const CountPage = () => {
    const [count, setCount] = useState(0)
    return (
        <div className=''>
            <button
                onClick={() => setCount(count + 1)}
                className='bg-blue-500 text-white px-4 py-2 rounded'>
                Count- {count}
            </button>
        </div>
    )
}

export default CountPage
