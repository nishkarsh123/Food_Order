import React, {useContext, useEffect, useState} from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../Store/Cart-Context';
const HeaderCartButton = props => {
    const [isBump, setIsBump] = useState(false);
    const crtCtx = useContext(CartContext);
    const {items} = crtCtx;
    const numberOfCartItems = crtCtx.items.reduce((curnumber, item)=>{
        return curnumber+item.amount;
    },0);
    const btnClasses = `${classes.button} ${ isBump ? classes.bump: ''}`;
    useEffect(() => {
        if(items.length===0){
            return;
        }
        setIsBump(true);
       const Tmr = setTimeout(() => {
            setIsBump(false);
         }, 300);
         return(
             () =>{
                 clearTimeout(Tmr);
             }
         )

    }, [items])
    return (
        <button className={btnClasses} onClick={props.onClick}> 
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span> 
                Your Cart
            </span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    );
}
export default HeaderCartButton;