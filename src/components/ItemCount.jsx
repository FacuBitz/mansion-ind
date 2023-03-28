import React, { useContext } from "react";
import { IconButton, Tooltip, Button } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { CartContext } from "../context/StateComponent";

const ItemCount = ({ onAdd, stock }) => {
  const { addQty, rmvQty, counter } = useContext(CartContext);

  return (
    <div>
      {counter < stock ? (
        <IconButton icon={<AddIcon />} onClick={addQty} />
      ) : (
        <Tooltip label="stock limit reached" placement="bottom">
          <IconButton icon={<AddIcon />} isDisabled />
        </Tooltip>
      )}

      <span>{counter}</span>

      {counter <= 1 ? (
        <Tooltip label="minimum stock reached" placement="bottom">
          <IconButton icon={<MinusIcon />} isDisabled />
        </Tooltip>
      ) : (
        <IconButton icon={<MinusIcon />} onClick={rmvQty} />
      )}

      {/* <button onClick={() => reset()}>reset</button> */}
      <Button onClick={() => onAdd(counter)} variant="solid" colorScheme="blue">
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
