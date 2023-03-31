import { Center, Container, Flex } from "@chakra-ui/react";
import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <>
      <Center>
        <Container maxW="80vw" minW="900px">
          <Flex gap={"5"} justify="center">
            {products.map((product) => (
              <Item
                key={product.id}
                id={product.id}
                img={product.img}
                name={product.name}
                description={product.description}
                price={product.price}
                category={product.category}
              />
            ))}
          </Flex>
        </Container>
      </Center>
    </>
  );
};

export default ItemList;
