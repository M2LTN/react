import React from 'react';
import ExpenseItem from './ExpenseItem';
import './expenses.css';

const Expenses = (props) => {
  return (
    <div className="expenses">
      {props.items.map((expense, index) => (
        <ExpenseItem
          key={index}
          data={expense}
        />
      ))}
    </div>
  );
};

export default Expenses;
