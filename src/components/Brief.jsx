import { useContext } from "react";
import { CartContext } from "../context/StateComponent";
import {
  Button,
  Container,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Box,
} from "@chakra-ui/react";

const Brief = () => {
  const { cart, removeItem } = useContext(CartContext);

  return (
    <>
      {cart.map((item) => {
        return (
          <Container key={item.id}>
            <Card>
              <Box>
                <img src={item.img} alt="imagen_producto" />
              </Box>
              <CardHeader>
                <Heading size="md">{item.name}</Heading>
              </CardHeader>
              <CardBody>
                <Text as="b">Cantidad: {item.quantity}</Text>
                <Text>Subtotal: {item.price * item.quantity}.-</Text>
              </CardBody>
              <CardFooter>
                <Button colorScheme="red" onClick={() => removeItem(item.id)}>
                  X
                </Button>
              </CardFooter>
            </Card>
          </Container>
        );
      })}
      {/* <div>
        Total: {total}.-
      </div> */}
    </>
  );
};

export default Brief;
