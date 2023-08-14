import React, { useState } from 'react'

const Navbar = ({ setExpense, setIncome }) => {
    const [amount, setAmount] = useState(0);
    const [note, setNote] = useState("");

    const updateBudget = (e) => {
        if (amount <= 0) return

        const newTrans = {
            type: e.target.getAttribute("datatype"),
            amount: Number(amount),
            note
        }
        const budget = JSON.parse(localStorage.getItem("budget")) || [];
        localStorage.setItem("budget", JSON.stringify([newTrans, ...budget]));

        newTrans.type === "expense" ? setExpense(prev => [...prev, newTrans]) : setIncome(prev => [...prev, newTrans]);
        setAmount(0);
        setNote("");
    }

    return (
        <header className='flex flex-wrap justify-evenly items-center drop-shadow-2xl w-full px-6 py-4 bg-stone-50 md:justify-between md:flex-row flex-col space-y-8 md:space-y-0'>
            <nav className='text-3xl font-bold self-center underline decoration-wavy decoration-green-300'>Budget <p className='inline underline decoration-wavy decoration-red-400'>Manager</p></nav>
            <div className="grid grid-flow-col">
                <button
                    className="px-6 py-4 bg-red-400 rounded-l-lg border-y-2 border-r-2 border-red-400 font-bold"
                    datatype='expense'
                    onClick={(e) => updateBudget(e)}>
                    <i className="fa-solid fa-minus mr-2" ></i>EXPENSE
                </button>
                <div className='flex md:flex-row flex-col items-center'>
                    <input className="text-xl p-4 outline-0 border-y-2 border-l-2 border-white w-48 focus:border-y-stone-300"
                        placeholder="Enter Note"
                        type="text"
                        name="note"
                        min={0}
                        onChange={e => setNote(e.target.value)}
                        value={note} />
                    <input className="text-center text-xl p-4 outline-0 border-y-2 border-l-2 border-white w-28 focus:border-y-stone-300"
                        placeholder="&#8360;"
                        type="number"
                        name="amount"
                        min={0}
                        onChange={e => setAmount(e.target.value)}
                        value={amount} />
                </div>
                <button
                    className="px-6 py-4 bg-green-300 rounded-r-lg border-y-2 border-r-2 border-green-300 font-bold"
                    datatype='income'
                    onClick={(e) => updateBudget(e)}>
                    <i className="fa-solid fa-plus mr-2" ></i>INCOME
                </button>
            </div>
        </header>
    )
}

export default Navbar;