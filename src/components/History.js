import React from 'react'
import Transaction from './Transaction'

const History = ({ expense, income }) => {

    return (
        <div className='flex bg-gradient-to-r from-red-400 to-green-300 md:flex-row flex-col row-span-4'>
            <div className='h-full flex flex-col items-stretch content-center md:border-r-2 md:border-b-0 border-b-2  space-y-2 px-4 pb-12 flex-wrap md:w-1/2 w-full'>
                <h1 className='bg-white text-black font-bold px-8 py-2 text-2xl border-0 rounded-b-lg mb-6 text-center drop-shadow-lg'>EXPENSE</h1>
                {expense.reverse().map((exp, index) => { return (<Transaction {...exp} key={exp.time} index={index} />) })}
            </div>
            <div className='h-full flex flex-col items-stretch content-center md:border-l-2 md:border-t-0 border-t-2 space-y-2 px-4 pb-12 flex-wrap md:w-1/2 w-full'>
                <h1 className='bg-white text-black font-bold px-8 py-2 text-2xl border-0 rounded-b-lg mb-6 text-center drop-shadow-lg'>INCOME</h1>
                {income.reverse().map((inc, index) => { return (<Transaction {...inc} key={inc.time} index={index} />) })}
            </div>
        </div>
    )
}

export default History;