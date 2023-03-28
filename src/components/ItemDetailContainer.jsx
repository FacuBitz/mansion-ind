import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [prod, setProd] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const oneItem = doc(db, "ropa", `${id}`);
    getDoc(oneItem).then((snapshot) =>
      setProd({ id: snapshot.id, ...snapshot.data() })
    );
  }, []);

  return (
    <>
      <ItemDetail data={prod} />
    </>
  );
};

export default ItemDetailContainer;
