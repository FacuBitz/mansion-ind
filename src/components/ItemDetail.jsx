import React, { useEffect, useState } from "react";
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
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../context/StateComponent";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetail = ({ data }) => {
  const { cart, setCart } = useContext(CartContext);
  console.log(cart);

  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const oneItem = doc(db, "ropa", `${id}`);
    getDoc(oneItem).then((snapshot) => {
      const doc = snapshot.data();
      setProduct(doc);
    });
  }, []);

  const dataFilter = data.filter((dato) => dato.id == id);

  return (
    <>
      {dataFilter.map((prod) => (
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
              <ItemCount />
              <Button onClick={setCart}>Agregar al carrito</Button>
            </CardFooter>
          </Card>
        </Center>
      ))}
    </>
  );
};

export default ItemDetail;
