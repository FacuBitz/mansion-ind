import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/StateComponent";
import { Button } from "@chakra-ui/react";
import { FormControl, FormLabel, Input, Flex, Text } from "@chakra-ui/react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SendOrder = ({ cart }) => {
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const { total, clearCart } = useContext(CartContext);

  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(orderCollection, order).then(({ id }) => {
      setOrderId(id);
      popUp(id);
    });
  };

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

  const redirigir = () => {
    navigate("/", { replace: true });
    clearCart();
  };

  const popUp = (id) => {
    Swal.fire({
      title: "Orden realizada con exito",
      html: `Nro de orden: ${id}`,
      icon: "success",
      confirmButtonText: "Volver al menu",
    }).then((result) => {
      if (result.isConfirmed) {
        redirigir();
      }
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Flex gap="40px" mt="20px" align="end">
          <FormControl isRequired>
            <FormLabel>Nombre y apellido</FormLabel>
            <Input type="text" onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          {name && email ? (
            <Button colorScheme="facebook" type="submit" w="400px">
              Finalizar compra
            </Button>
          ) : (
            <Button colorScheme="facebook" type="submit" w="400px" isDisabled>
              Finalizar compra
            </Button>
          )}
        </Flex>
      </form>
      <Text mt="20px">Nro de orden: {orderId}</Text>
    </>
  );
};

export default SendOrder;
