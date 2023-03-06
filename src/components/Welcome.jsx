import React from "react";
import { Box, Image } from "@chakra-ui/react";
import fondo from "../assets/img/hombre-caminando.jpg";

const Welcome = () => {
  return (
    <>
      <Box boxSize="sm">
        <Image src={fondo} alt="hombre" />
      </Box>
    </>
  );
};

export default Welcome;
