import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/StateComponent";
import {
  Button,
  Center,
  HStack,
  Text,
  Flex,
  Container,
} from "@chakra-ui/react";
import Brief from "./Brief";
import SendOrder from "./SendOrder";

const Cart = () => {
  const { cart, total } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <>
        <Center pt="50px">
          <HStack spacing="20px">
            <Text fontSize="2xl">No hay productos en el carrito...</Text>
            <Link to={"/catalogue"}>
              <Button colorScheme="facebook">Ir al catálogo</Button>
            </Link>
          </HStack>
        </Center>
      </>
    );
  }

  return (
    <div>
      {console.log(cart)}
      <Flex justify="center" gap="40px">
        <Brief />
      </Flex>
      <Container maxW="container.lg" mt="60px">
        <Text as="b">Total: {total}.-</Text>
        <SendOrder cart={cart} />
      </Container>
    </div>
  );
};

export default Cart;
