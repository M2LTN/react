import './expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/card';
import ExpensesFilter from './ExpensesFilter';
import React, {useState} from 'react';
import ExpensesList from './ExpensesList'

const Expenses = (props) => {
  const { data } = props;

  const [filteredYear, setFilteredYear] = useState('2023');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log("Valitud aasta on:", selectedYear);
  };

  
  const filteredExpenses = data.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
            <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList expenses={filteredExpenses}/>
        {
          
          filteredExpenses.length === 0 && <p color='white'>No expenses found</p>


        }

        {
          
          filteredExpenses.length > 0 && filteredExpenses.map((expense) => {
            return <ExpenseItem date={expense.date} title={expense.title} price={expense.price} key={expense.id}/>
          })

        }
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          price={expense.price}
        />
      ))}
    </Card>
  );
};

export default Expenses;
