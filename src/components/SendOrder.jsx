import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/StateComponent";
import { Button, Center } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Flex,
} from "@chakra-ui/react";
import Swal from "sweetalert2";

const SendOrder = ({ cart }) => {
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { total } = useContext(CartContext);

  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(orderCollection, order).then(({ id }) => {
      setOrderId(id);
      popUp(id);
    });
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

  const popUp = (id) => {
    Swal.fire({
      title: "Orden realizada con exito",
      html: `Nro de orden: ${id}`,
      icon: "success",
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
          <Button
            colorScheme="facebook"
            type="submit"
            w="400px"
            // isLoading
            // loadingText="Submitting"
          >
            Finalizar compra
          </Button>
        </Flex>
      </form>
      {/* <p>Nro de orden: {orderId}</p> */}
    </>
  );
};

export default SendOrder;
