import React, { useEffect, useState } from 'react';
import './App.css';
import Expenses from './components/expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [

];

const App = () => {
    const [expenses, setExpenses] = useState(() => {
        const expensesFromLS = JSON.parse(localStorage.getItem('expenses'));
        return expensesFromLS || [];
    })
    
    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }, [expenses]);

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
            <Expenses data={expenses} />
        </div>
    );
};

export default App;
