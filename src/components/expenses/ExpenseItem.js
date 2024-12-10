import React from 'react';
import Card from '../UI/card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const [title, setTitle] = React.useState(props.title);

    const clickHandler = () => {
        console.log('clicked');
        setTitle(`updated ${title}`);
        console.log(title);
    };

    return (
        <li>
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__details">
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">{props.price}</div>
                </div>
                <button className="expense-item__button" onClick={clickHandler}>
                    nuclear button
                </button>
            </div>
        </Card>
        </li>
    );
};

export default ExpenseItem;
