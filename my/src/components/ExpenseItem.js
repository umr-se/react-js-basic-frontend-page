import './ExpenseItem.css';
function ExpenseItem(variable){
//let con_date = variable.date.toISOString();
let month = variable.date.toLocaleString('en-US',{month:'short'});
let day = variable.date.toLocaleString('en-US',{day:"2-digit"});
let year = variable.date.getFullYear();
    return(
    <div className="expense-item">
    <div>{month +","+ day+"," + year }</div>
    <div className='expense-item_description'>
        <h2>{variable.title}</h2> 
    <div className='expense-item_price'>{variable.price}</div>
    </div>
    </div>
    );
}
export default ExpenseItem;