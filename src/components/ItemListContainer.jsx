import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Heading, Center } from "@chakra-ui/react";

const ItemListContainer = () => {
  // toma el parametro category de la url si existe
  const { category } = useParams();

  // hook de estado, prod=variable, setProd=funcion modificadora
  const [prod, setProd] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch("/data.json");
      const data = await response.json();
      if (category === undefined) {
        setProd(data);
      } else {
        const catFilter = data.filter(
          (products) => products.category === category
        );
        setProd(catFilter);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <>
      <div>
        <Center h="100px" color="black">
          <Heading as="h2" size="2xl">
            {!category ? <p>Catalogo</p> : <p>{`${category}`}</p>}
          </Heading>
        </Center>
        <ItemList products={prod} />
      </div>
    </>
  );
};

export default ItemListContainer;
