import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    function handleTitleChange(e) {
        setTitle(e.target.value);
    }
    function handleAmountChange(e) {
        setAmount(e.target.value);
    }
    function handleDateChange(e) {
        setDate(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        const expenseData = {
            title,
            amount: +amount,
            date: new Date(date)
        }
        props.onSaveExpenseData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={handleTitleChange} name="title" value={title} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={handleAmountChange} name="amount" value={amount} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2022-01-01" max="2025-12-31" onChange={handleDateChange} name="date" value={date} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onClickHandler}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;