import React from 'react';
import ExpenseItem from './components/ExpenseItem';
import './App.css';

function App() {
  const expenses = [
    { date: new Date(2023, 0, 10), title: 'New book', price: '$30.99' },
    { date: new Date(2023, 0, 10), title: 'New jeans', price: '$99.99' },
  ];

  return (
    <div className="App">
      {expenses.map((expense, index) => (
        <ExpenseItem key={index} data={expense} />
      ))}
    </div>
  );
}

export default App;
