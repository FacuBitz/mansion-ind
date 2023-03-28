import { createContext, useState } from "react";

export const CartContext = createContext();

const StateComponent = ({ children }) => {
  const [counter, setCounter] = useState(1);
  const [cart, setCart] = useState([]);
  console.log(cart);

  const addQty = () => {
    setCounter(counter + 1);
  };
  const rmvQty = () => {
    setCounter(counter - 1);
  };
  // const reset = () => {
  //   setCounter(1);
  // };

  const addItem = (item, quantity) => {
    console.log(item.name);
    let newCart;
    let product = cart.find((product) => product.id === item.id);
    if (product) {
      product.quantity += quantity;
      newCart = [...cart];
    } else {
      product = { ...item, quantity: quantity };
      newCart = [...cart, product];
    }
    setCart(newCart);
    setCounter(1);
  };

  const clearCart = () => setCart([]);

  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  const removeProduct = (id) =>
    setCart(cart.filter((product) => product.id !== id));

  return (
    <CartContext.Provider
      value={{
        counter,
        addQty,
        rmvQty,
        cart,
        setCart,
        addItem,
        clearCart,
        isInCart,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default StateComponent;
