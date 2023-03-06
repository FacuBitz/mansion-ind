import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import data from "../data.json";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { category } = useParams();
  console.log(category);
  console.log(data);

  const catFilter = data.filter((clothes) => clothes.category === category);

  console.log(catFilter);

  return (
    <>
      {/* si lo renderizo asi aca si aparecen
        {data.map((prod) => {
        return (
          <div key={prod.id}>
            <h1>{prod.name}</h1>
            <p>{prod.price}</p>
          </div>
        );
      })} */}
      <div>
        {category ? (
          <ItemList clothes={catFilter} />
        ) : (
          <ItemList clothes={data} />
        )}
      </div>
    </>
  );
};

export default ItemListContainer;
