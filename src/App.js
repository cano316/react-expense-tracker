import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const fakeDatabase = [
  {
    title: 'Car Insurance',
    amount: 99,
    date: new Date(2022, 10, 9),
    id: 1
  },
  {
    title: 'Netflix',
    amount: 20.99,
    date: new Date(2022, 9, 3),
    id: 2
  },
  {
    title: 'Rent',
    amount: 100,
    date: new Date(2022, 8, 30),
    id: 3
  },
  {
    title: 'Spotify',
    amount: 15.99,
    date: new Date(2022, 6, 7),
    id: 4
  },
  {
    title: 'Gym membership',
    amount: 35.99,
    date: new Date(2021, 11, 15),
    id: 5
  }
]
function App() {
  const [expenses, setExpenses] = useState(fakeDatabase);

  function addExpenseHandler(expense) {
    setExpenses(prevArray => {
      return [
        expense,
        ...prevArray
      ]
    })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
