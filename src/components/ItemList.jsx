import { Container } from "@chakra-ui/react";
import React from "react";
import Item from "./Item";

const ItemList = ({ clothes }) => {
  console.log(clothes);
  return (
    <>
      <Container>
        {clothes?.map((prod) => {
          console.log(prod);
          <div key={prod.id}>
            <h1>{prod.name}</h1>
            <p>{prod.price}</p>
          </div>;
          // <Item
          //   key={prod.id}
          //   id={prod.id}
          //   name={prod.name}
          //   description={prod.description}
          //   price={prod.price}
          //   category={prod.category}
          // />;
        })}
      </Container>
    </>
  );
};

export default ItemList;
