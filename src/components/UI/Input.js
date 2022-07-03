import classes from './Input.module.css';
import React from 'react'

const Input = React.forwardRef((props, ref) => {
return <div className={classes.input}>
    <label htmlfor={props.input.id}>{props.label}</label>
    <input {...props.input} ref = {ref}></input>
</div>
});
export default Input;