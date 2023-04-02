import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Heading, Center } from "@chakra-ui/react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = () => {
  // toma el parametro category de la url si existe
  const { category } = useParams();

  // hook de estado, prod=variable, setProd=funcion modificadora
  const [prod, setProd] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  // traigo los prod de firebase, si detecta alguna categoria filtra por esa categoria y guarda en prod
  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "ropa");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      if (category === undefined) {
        setProd(docs);
      } else {
        const catFilter = docs.filter(
          (products) => products.category === category
        );
        setProd(catFilter);
      }
      setIsLoading(false);
    });
  }, [category]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div>
        <Center h="100px" color="black">
          <Heading as="h2" size="2xl">
            {!category ? (
              <p>Catalogo</p>
            ) : (
              // selecciono el caracter en posicion 0, lo pongo en mayuscula y le agrego el resto del string como estaba
              <p>{`${category[0].toUpperCase() + category.substring(1)}`}</p>
            )}
          </Heading>
        </Center>
        <ItemList products={prod} />
      </div>
    </>
  );
};

export default ItemListContainer;
