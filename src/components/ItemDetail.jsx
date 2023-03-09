import React from "react";
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
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

const ItemDetail = ({ data }) => {
  return (
    <>
      {data.map((prod) => (
        <Center pt="50px" key={prod.id}>
          <Card maxW="sm">
            <CardBody>
              <Image src={prod.img} alt={prod.name} borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">{prod.name}</Heading>
                <Text>{prod.description}</Text>
                <Text color="blue.600" fontSize="2xl">
                  {prod.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="ghost" colorScheme="blue">
                  Agregar
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Center>
      ))}
    </>
  );
};

export default ItemDetail;
