import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { date: "2024-01-01", title: "Groceries", price: "$94.12" },
    { date: "2024-01-02", title: "Rent", price: "$450.00" },
    { date: "2024-01-03", title: "Electricity Bill", price: "$30.00" },
  ];

  return (
    <div>
      {expenses.map((expense, index) => (
        <ExpenseItem 
          key={index}
          date={expense.date} 
          title={expense.title} 
          price={expense.price} 
        />
      ))}
    </div>
  );
}

export default App;
