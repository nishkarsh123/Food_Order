import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../Store/Cart-Context';
import CartItem from './CartItem';
const Cart = props => {
    const crtCtx = useContext(CartContext);
    const totalAmount =  `$${crtCtx.totalAmount.toFixed(2)}`;
    const hasItems = crtCtx.items.length > 0;
    const cartItemremoveHandler = id =>{ 
        crtCtx.removeItem(id);
    };
    const cartItemaddHandler = item => {
        crtCtx.addItem({...item, amount: 1});
    };
    const cartitems = (<ul className={classes['cart-items']}>
        {crtCtx.items.map((items) => (
        <CartItem
         key = {items.id}
         name={items.name}
         price={items.price}
         amount={items.amount}
         onRemove={cartItemremoveHandler.bind(null, items.id)} 
         onAdd = {cartItemaddHandler.bind(null, items)}
         />))}
    </ul>
    );
    return(
        <Modal onclose={props.onclose}>
            {cartitems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onclose}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
}

export default Cart;