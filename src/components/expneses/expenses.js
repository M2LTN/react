import './expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/card';

const Expenses = (props) => {
  const { data } = props;

  return (
    <Card className="expenses">
      {data.map((expense, index) => (
        <ExpenseItem
          key={index}
          date={expense.date}
          title={expense.title}
          price={expense.price}
        />
      ))}
    </Card>
  );
};

export default Expenses;
