import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import './Expenses.css'
function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2022');
    function filterByYearHandler(userInputYear) {
        setFilteredYear(userInputYear)
    };
    // create a new array that is filtered to match the year selected
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterByYear={filterByYearHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            {/* render list of filtered components or error message */}
            <ExpensesList items={filteredExpenses} />
        </Card >
    )
}

export default Expenses;