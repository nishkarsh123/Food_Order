import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CartContext from '../../Store/Cart-Context';

const MealItem = props => {
    const crtCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;
    const addHandler = (amount) => {
        crtCtx.addItem({
            id : props.id,
            name : props.name,
            amount : amount,
            price : props.price
        })
    }
    return <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={price}>{price}</div>
        </div>
        <div>
            <MealItemForm id= {props.id} onAddToCart = {addHandler}/>
        </div>
    </li>
}
export default MealItem;