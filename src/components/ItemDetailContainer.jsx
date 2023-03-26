import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "ropa");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProd(docs);
    });
  }, []);

  return (
    <>
      <ItemDetail data={prod} />
    </>
  );
};

export default ItemDetailContainer;
