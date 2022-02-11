import React,{useState} from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenceDate'
import Card from './Card'
const ExpenseItem =function(props){
  // state will return two properties 1) the element its self 2)the element change value
   const [title,setTittle] =  useState("kkk");

  const clickEvent = ()=>{
setTittle('updated!!!!');
console.log(title);

  }
    return(
        <Card className='expense-item'>
       <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <Card className='expense-item__price'>{props.amount}</Card>
          <button onClick={clickEvent}>click me</button>
        </div>
      </Card>
    )
}

export default ExpenseItem

//js