// Correct: All imports at the top
import React, { useState } from 'react';
import './App.css';
import Expenses from './components/expenses/expenses';
import NewExpense from './components/NewExpense/NewExpense';

// Component starts below the imports
const App = () => {
  const [expenses, setExpenses] = useState([
    {
      date: new Date(2024, 10, 12),
      title: 'New book',
      price: 30.99,
    },
    {
      date: new Date(2024, 10, 12),
      title: 'New jeans',
      price: 99.99,
    },
  ]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });

    console.log('In App.js');
    console.log(expense);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
