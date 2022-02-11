import React,{useState} from "react";
import './ExpenseForm.css'
const ExpenseForm = ()=>{
    const [tittle,setTittle] = useState('');
    const tittleChange = (e)=>{
        setTittle(e.target.value);
    }
return(
    <form>
        <div className="new-expense__controls">
<div className="new-expense__control">
<label>Tittle</label>
<input type='text' onChange={tittleChange}/>
</div>
<div className="new-expense__control">
<label>Amount</label>
<input type='number' min='0.01' step='0.01'/>
</div>
<div className="new-expense__control">
<label>Date</label>
<input type='date' min='2019-01-01' max='2022-12-31'/>
</div>
<div className="new-expense__actions">
    <button type="submit">Submit</button>
</div>
        </div>
    </form>
)
}
export default ExpenseForm