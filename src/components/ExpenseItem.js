import './ExpenseItem.css'

const ExpenseItem = () => {
    return (
            <div className='expensive-item'>
            <div>Date</div>
            <div className='expense-item_description'>
                <h2>Car Insurance</h2>
                <div className='expense-item_price'> Price</div>
            </div>
        </div>

    )
}

export default ExpenseItem