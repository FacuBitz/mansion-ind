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
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "500px" }}
            src={data.img}
            alt={data.name}
            borderRadius="lg"
          />

          <Stack p="40px">
            <CardBody boxSize="md">
              <Heading size="xl" pb="20px">
                {data.name}
              </Heading>
              <Text pb="20px">{data.description}</Text>
              <Text color="blue.600" fontSize="2xl">
                ${data.price}.-
              </Text>
            </CardBody>

            <CardFooter>
              <ItemCount onAdd={onAdd} stock={data.stock} id={data.id} />
            </CardFooter>
          </Stack>
        </Card>
      </Center>
    </>
  );
};

export default ItemDetail;
