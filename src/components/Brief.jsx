import { useContext } from "react";
import { CartContext } from "../context/StateComponent";
import {
  Button,
  Heading,
  Card,
  CardBody,
  Text,
  Stack,
  Image,
  Flex,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const Brief = () => {
  const { cart, removeItem } = useContext(CartContext);

  return (
    <>
      {cart.map((item) => {
        return (
          <Card maxW="30vh" mt="50px" key={item.id}>
            <Image src={item.img} alt={item.name} />
            <CardBody pt="0" pb="0">
              <Stack mt="6" mb="4" spacing="3">
                <Heading size="md">{item.name}</Heading>
                <Flex justify="space-between">
                  <Text>
                    {item.quantity} x ${item.price}.-
                  </Text>
                  <Button
                    p="3"
                    fontSize="15px"
                    size="xs"
                    variant="ghost"
                    onClick={() =>
                      removeItem(item.id, item.quantity, item.price)
                    }
                  >
                    <DeleteIcon color="red.500" />
                  </Button>
                </Flex>
              </Stack>
            </CardBody>
          </Card>
        );
      })}
    </>
  );
};

export default Brief;
