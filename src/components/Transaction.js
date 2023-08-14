import React from 'react'

const Transaction = ({ note, amount, index }) => {
    return (
        <div className=' bg-white w-96 flex space-x-2 items-center rounded-md text-lg pr-6 drop-shadow-md'>
            <span className='border-r-2 w-14 font-semibold text-center py-3 border-stone-400'>{index + 1}.</span>
            <span className='text-xl pr-2'>&#8360; {amount}</span>
            <span className='text-xl'>{note}</span>
        </div>
    )
}

export default Transaction;