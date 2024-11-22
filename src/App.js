import React from 'react';
import Expenses from './components/expenses.js';

function App() {
  const expenses = [
    { date: new Date(2023, 0, 10), title: 'New book', price: '$30.99' },
    { date: new Date(2023, 0, 10), title: 'New jeans', price: '$99.99' },
  ];

  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
