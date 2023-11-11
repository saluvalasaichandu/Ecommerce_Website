import React from 'react'

const ClearCart = () => {
  return (
    <div className='font-b text-3xl text-center p-4 m-4'>
        <h1 className="text-yellow-400">Cart is empty</h1>
        <h2 className='text-green-500 py-4'>Please Add items to cart...</h2>
    </div>
  )
}

export default ClearCart