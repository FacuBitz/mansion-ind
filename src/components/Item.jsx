import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Heading,
  Stack,
} from "@chakra-ui/react";
import React from "react";

const Item = ({ id, name, category, img }) => {
  return (
    <div>
      <div key={id}>
        <Center p="1rem">
          <Card>
            <CardBody>
              <Image src={img} />
              <Stack mt="6" spacing="3">
                <Heading size="md">{name}</Heading>
                <Text>Category: {category}</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Center>
                <Button variant="solid" colorScheme="blue"></Button>
              </Center>
            </CardFooter>
          </Card>
        </Center>
      </div>
    </div>
  );
};

export default Item;
