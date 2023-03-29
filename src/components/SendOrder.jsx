import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/StateComponent";

const SendOrder = ({ cart }) => {
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { total } = useContext(CartContext);

  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(orderCollection, order).then(({ id }) => setOrderId(id));
  };

  console.log(cart);

  const order = {
    name,
    email,
    total,
    Items: cart.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
    })),
  };

  const orderCollection = collection(db, "order");

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre y apellido"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Correo electronico"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Enviar informacion</button>
      </form>
      <p>Nro de orden: {orderId}</p>
    </div>
  );
};

export default SendOrder;
