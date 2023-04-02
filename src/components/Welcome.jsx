import React from "react";
import { Box, Center, Image } from "@chakra-ui/react";
import fondo from "../assets/img/welcome.jpg";

const Welcome = () => {
  return (
    <>
      <Center>
        <Box boxSize="xxl" pt="50px">
          <Image src={fondo} alt="imagen welcome" />
        </Box>
      </Center>
    </>
  );
};

export default Welcome;
