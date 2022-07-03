import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import React, {useState} from 'react';
import Cart from './components/Cart/Cart';
import CartProvider from './components/Store/CartProvider';
function App() {
  const [showCart, setshowCart] = useState(false);

  const showCartHandler = () =>{
    setshowCart(true);
  }
  const closeCartHandler = () => {
    setshowCart(false);
  }
  return (
    <CartProvider>
      {showCart && <Cart onclose={closeCartHandler}/>}
      <Header onshow={showCartHandler}/>
      <main>
      <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
