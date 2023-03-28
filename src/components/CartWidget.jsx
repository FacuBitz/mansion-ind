import React, { useContext } from "react";
import { CartContext } from "../context/StateComponent";

const CartWidget = () => {
  const { cartQty } = useContext(CartContext);

  return (
    <div>
      <span className="material-symbols-outlined">shopping_bag</span>
      <span>{cartQty}</span>
    </div>
  );
};

export default CartWidget;
