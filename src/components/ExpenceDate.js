
import Card from './Card';
import './ExpenceDate.css'
function ExpenseDate(props){
    const month = props.date.toLocaleString('en-US',{month : 'long'});
    const day =props.date.toLocaleString('en-Us',{day: '2-digit'});
    const year = props.date.getFullYear();
return(
    <Card className="expense-date">
    <div className="expense-date__month">{month}</div>
    <div className="expense-date__year">{year}</div>
    <div className="expense-date__day">{day}</div>
  </Card>
);
}



export default ExpenseDate