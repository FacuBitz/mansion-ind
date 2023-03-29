import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/StateComponent";
import { Button } from "@chakra-ui/react";
import Brief from "./Brief";
import SendOrder from "./SendOrder";

const Cart = () => {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <>
        <div className="cart_">
          <h2>El carrito esta vacio..</h2>
          <Link to={"/catalogue"}>
            <Button colorScheme="red">Ir al catálogo</Button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <div>
      {console.log(cart)}
      <Brief />
      <SendOrder cart={cart} />
    </div>
  );
};

export default Cart;
