import React, { useContext, useEffect } from "react";
import { IconButton, Tooltip, Button, HStack } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { CartContext } from "../context/StateComponent";

const ItemCount = ({ onAdd, stock, id }) => {
  const { addQty, rmvQty, counter, setCounter } = useContext(CartContext);

  // si agrego cantidad pero no lo agrego al carrito y voy a otro prod que vuelva a 1 el contador
  useEffect(() => {
    setCounter(1);
  }, [id]);

  return (
    <div>
      <HStack spacing="15px">
        {counter <= 1 ? (
          <Tooltip label="minimum stock reached" placement="bottom">
            <IconButton icon={<MinusIcon />} isDisabled />
          </Tooltip>
        ) : (
          <IconButton variant="ghost" icon={<MinusIcon />} onClick={rmvQty} />
        )}

        <span>{counter}</span>

        {counter < stock ? (
          <IconButton variant="ghost" icon={<AddIcon />} onClick={addQty} />
        ) : (
          <Tooltip label="stock limit reached" placement="bottom">
            <IconButton icon={<AddIcon />} isDisabled />
          </Tooltip>
        )}

        <Button
          onClick={() => onAdd(counter)}
          variant="solid"
          colorScheme="facebook"
        >
          Agregar al carrito
        </Button>
      </HStack>
    </div>
  );
};

export default ItemCount;
