import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Heading,
  Stack,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

const Item = ({ id, name, img, price }) => {
  return (
    <div key={id}>
      <Flex>
        <Card maxW="sm">
          <CardBody>
            <Image boxSize={"300px"} src={img} />
            <Stack mt="6" spacing="3">
              <Heading size="md">{name}</Heading>
              <Text>${price}.-</Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Center className="btn-center">
              <Link to={`/item/${id}`}>
                <Button variant="solid" colorScheme="blue">
                  Details
                </Button>
              </Link>
            </Center>
          </CardFooter>
        </Card>
      </Flex>
    </div>
  );
};

export default Item;
