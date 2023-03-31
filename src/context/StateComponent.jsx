import { createContext, useState } from "react";

export const CartContext = createContext();

const StateComponent = ({ children }) => {
  const [counter, setCounter] = useState(1);
  const [cart, setCart] = useState([]);
  const [cartQty, setCartQty] = useState(0);
  const [total, setTotal] = useState(0);
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
    let totalItems = cartQty;
    if (isInCart(item.id)) {
      setCart(
        cart.map((product) => {
          return product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product;
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
    totalItems += quantity;
    setCartQty(totalItems);
    setCounter(1);
    addAmount(item.price, quantity);
  };

  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  // TODAVIA NO LO ESTOY USANDO !!!!!!!
  const clearCart = () => {
    setCart([]);
    setCartQty(0);
    setTotal(0);
  };

  const removeItem = (id, quantity, price) => {
    setCart(cart.filter((product) => product.id !== id));
    let newCartQty = cartQty - quantity;
    setCartQty(newCartQty);
    rmvAmount(price, quantity);
  };

  const addAmount = (price, quantity) => {
    let amount = total;
    amount += price * quantity;
    setTotal(amount);
  };

  const rmvAmount = (price, quantity) => {
    let amount = total;
    amount -= price * quantity;
    setTotal(amount);
  };

  return (
    <CartContext.Provider
      value={{
        counter,
        setCounter,
        addQty,
        rmvQty,
        cart,
        setCart,
        addItem,
        clearCart,
        isInCart,
        removeItem,
        cartQty,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default StateComponent;
