import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useState, useContext } from "react";
import { CartContext } from "../context/StateComponent";
import {
  FormControl,
  FormLabel,
  Input,
  Text,
  Grid,
  Button,
  GridItem,
} from "@chakra-ui/react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SendOrder = ({ cart }) => {
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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
    phone,
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
        <Grid
          templateColumns="repeat(2, 1fr)"
          templateRows="repeat(2, 1fr)"
          mt="20px"
          h="200px"
          gap={3}
        >
          <GridItem>
            <FormControl isRequired>
              <FormLabel>Nombre y apellido</FormLabel>
              <Input
                type="text"
                w="450px"
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                w="450px"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel>Telefono</FormLabel>
              <Input
                type="number"
                w="450px"
                onChange={(e) => setPhone(e.target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem pt="30px">
            {name && email && phone ? (
              <Button colorScheme="facebook" type="submit" w="150px">
                Finalizar compra
              </Button>
            ) : (
              <Button colorScheme="facebook" type="submit" w="150px" isDisabled>
                Finalizar compra
              </Button>
            )}
          </GridItem>
        </Grid>
      </form>
      <Text mt="20px" mb="20px">
        Nro de orden: {orderId}
      </Text>
    </>
  );
};

export default SendOrder;
