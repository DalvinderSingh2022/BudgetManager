import React, { useState, useEffect } from 'react'

const Budget = ({ expense, income }) => {
    const [expenseAmt, setExpenseAmt] = useState(0);
    const [incomeAmt, setIncomeAmt] = useState(0);
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        var ExpenseAmt = 0;
        var IncomeAmt = 0;
        expense.forEach(({ amount }) => ExpenseAmt = ExpenseAmt + amount);
        income.forEach(({ amount }) => IncomeAmt = IncomeAmt + amount);

        setExpenseAmt(ExpenseAmt);
        setIncomeAmt(IncomeAmt);
        setBalance(IncomeAmt - ExpenseAmt);
    }, [expense, income])

    return (
        <div className='font-bold flex justify-between items-center drop-shadow-2xl w-full px-12 py-6 bg-stone-50 md:flex-row flex-col space-y-8 md:space-y-0'>
            <div className="text-xl flex justify-end items-center self-center">
                <button className="whitespace-nowrap px-7 py-5 border-stone-300 rounded-l-lg border-y-2 border-l-2 border-2">Your Balance</button>
                <div className={`text-center self-stretch p-5 outline-0 rounded-r-lg border-y-2 border-r-2 w-36 ${balance >= 0 ? 'bg-green-300 border-green-300' : 'bg-red-300 border-red-300'}`}>
                    &#8360; {balance}
                </div>
            </div>
            <div className="flex justify-end items-center self-center md:flex-row flex-col space-x-0 space-y-4 md:space-x-4 md:space-y-0 md:justify-center">
                <div className="flex justify-end items-center self-center">
                    <button className="px-6 py-4 bg-green-300 rounded-l-lg border-y-2 border-l-2 border-green-300">INCOME</button>
                    <div className="text-center self-stretch p-4 outline-0 rounded-r-lg border-y-2 border-r-2 border-stone-300  w-36">
                        &#8360; {incomeAmt}
                    </div>
                </div>
                <div className="flex justify-end items-center self-center">
                    <button className="px-6 py-4 bg-red-300 rounded-l-lg border-y-2 border-l-2 border-red-300">EXPENSE</button>
                    <div className="text-center self-stretch p-4 outline-0 rounded-r-lg border-y-2 border-r-2 border-stone-300  w-36">
                        &#8360; {expenseAmt}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Budget;