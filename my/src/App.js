import ExpenseItem from "./components/ExpenseItem";
function App(){
   
    let array = [
{
    date: new Date(2001,11,23),
    price:"200$",
    title:"Console"
},
{
    date: new Date(2002,10,24),
    price:"500$",
    title:"Laptop"
},
{
    date: new Date(2003,4,22),
    price:"300$",
    title:"Mobile"
},
{
    date: new Date(2006,12,14),
    price:"700$",
    title:"Vibrator"
}

    ]
    return(
        <div>
        <ExpenseItem date = {array[0].date}
 price={array[0].price}
 title = {array[0].title}>
 </ExpenseItem >
<ExpenseItem date = {array[1].date}
 price={array[1].price}
 title = {array[1].title}>  
 </ExpenseItem>
        

          <ExpenseItem date = {array[2].date}
 price={array[2].price}
 title = {array[2].title}>
 </ExpenseItem>

          <ExpenseItem date = {array[3].date}
 price={array[3].price}
 title = {array[3].title}>  
 </ExpenseItem>    
        </div>
    );

}
export default App;