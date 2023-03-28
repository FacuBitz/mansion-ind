import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  Divider,
  Center,
} from "@chakra-ui/react";
import ItemCount from "./ItemCount";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/StateComponent";
import { useParams } from "react-router-dom";

const ItemDetail = ({ data }) => {
  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) => {
    addItem(data, quantity);
  };

  return (
    <>
      <Center pt="50px" key={data.id}>
        <Card maxW="sm">
          <CardBody>
            <Image src={data.img} alt={data.name} borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md">{data.name}</Heading>
              <Text>{data.description}</Text>
              <Text color="blue.600" fontSize="2xl">
                {data.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ItemCount onAdd={onAdd} stock={data.stock} />
          </CardFooter>
        </Card>
      </Center>
    </>
  );
};

export default ItemDetail;
