import CartContext from "./Cart-Context";
import { useReducer } from 'react';

const defaultCartState = {
    items : [],
    totalAmount : 0
}
const cartReducer = (state,action) =>{
    if(action.type === 'ADD_ITEM')
    {
        const updateTotalAmount = state.totalAmount+action.item.price*action.item.amount;
        const ItemIndex = state.items.findIndex((item)=> 
            item.id === action.item.id
        );
        const existingCartItem = state.items[ItemIndex];
        let updatedItems;
        if(existingCartItem)
        {
            const updatedItem = {
                ...existingCartItem,
                amount : existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[ItemIndex]= updatedItem;
        }
        else
        {
            updatedItems = state.items.concat(action.item);
        }
        return(
            {
             items: updatedItems,
             totalAmount: updateTotalAmount   
            }
        );
    }
    if(action.type === 'REMOVE_ITEM')
    {  
        const ItemIndex = state.items.findIndex((item)=> 
            item.id === action.id
        );
        const existingCartItem = state.items[ItemIndex];
        const updateTotalAmount = state.totalAmount-existingCartItem.price; 
        let updatedItems;
        if(existingCartItem.amount === 1)
        {
            updatedItems = state.items.filter((item) => item.id !== existingCartItem.id);
        }
        else
        {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount - 1
            }
            updatedItems=[...state.items];
            updatedItems[ItemIndex]=updatedItem;
        }
         return(
             {
                 items: updatedItems,
                 totalAmount: updateTotalAmount
             }
         );
    }
    return defaultCartState;
};
const CartProvider = (props) => {
    const [cartState, dispatchcartState] = useReducer(cartReducer,defaultCartState);
    const addItemHandler = (item) => {
        dispatchcartState({
            type : 'ADD_ITEM',
            item: item
        });
    };
    const removeItemHandler = (id) =>{
        dispatchcartState({
            type : 'REMOVE_ITEM',
            id : id
        });
    };
    const cartContext = {
        items : cartState.items,
        totalAmount : cartState.totalAmount,
        addItem : addItemHandler,
        removeItem :removeItemHandler

    };
    return(
    <CartContext.Provider value = {cartContext}>
        {props.children}
    </CartContext.Provider>
    );
}
export default CartProvider;
