import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";


function NewExpense(props) {
    const [isClicked, setIsClicked] = useState(false)
    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsClicked(prev => !prev)
    };
    function clickHandler() {
        setIsClicked(prev => !prev)
    }
    const content = (isClicked ? <ExpenseForm onClickHandler={clickHandler} onSaveExpenseData={saveExpenseDataHandler} /> : <div className="new-expense__actions">
        <button onClick={clickHandler} style={{ display: "block", margin: "auto" }}>Add New Expense</button>
    </div>)
    return (
        <div className="new-expense">
            {content}
        </div>
    )
}

export default NewExpense;