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
        <Card maxW="20vw">
          <Image src={img} />
          <CardBody pt="0" pb="0">
            <Stack mt="6" spacing="3">
              <Heading size="md">{name}</Heading>
              <Text>${price}.-</Text>
            </Stack>
          </CardBody>

          <CardFooter
          // justify="space-between"
          // flexWrap="wrap"
          // sx={{
          //   "& > button": {
          //     minW: "136px",
          //   },
          // }}
          >
            <Link to={`/item/${id}`}>
              <Button size="sm" variant="outline" colorScheme="blue">
                Details
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </Flex>
    </div>
  );
};

export default Item;
