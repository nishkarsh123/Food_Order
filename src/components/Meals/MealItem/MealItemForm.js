import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import React, { useState,useRef } from 'react';
const MealItemForm = props => {
    const [amountisValid, setamountisValid] = useState(true);
    const amountInputref = useRef();
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputref.current.value;
        const enteredAmountNumber = +enteredAmount;
        if(enteredAmount.trim().length === 0 || enteredAmountNumber<1 || enteredAmountNumber>5)
        {
            setamountisValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    }
return <form className={classes.form} onSubmit={submitHandler}>
    <Input 
        ref = {amountInputref} 
        label='Amount' input={{
        id:'amount'+props.id,
        type:'number',
        min:'1',
        max:'10',
        step:'1',
        defaultValue:'1'
    }}/>
    <button>+Add</button>
    {!amountisValid && <p>please enter a valid amount (1-5).</p>}
</form>
}
export default MealItemForm;