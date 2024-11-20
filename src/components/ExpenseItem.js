import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const date = new Date(2024, 11, 20);
    const title = 'Car Insurance';
    const price = 294.67;
  return (
    <div className="expense-item">
      <div>{props.date}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
