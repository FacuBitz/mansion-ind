import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <>
      <Container maxW="container.xl">
        <Flex gap={"5"}>
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
    </>
  );
};

export default ItemList;
