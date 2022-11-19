import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'
function ExpensesList(props) {
    // create an array of components
    const expenses = props.items.map(expense => {
        return <ExpenseItem
            key={expense.id}
            {...expense}
        />
    }
    )
    return expenses.length ? (
        <ul className="expenses-list">
            {expenses}
        </ul>
    ) : (
        <h2 className="expenses-list__fallback">No expenses found.</h2>
    )
}
export default ExpensesList;