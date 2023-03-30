import React from "react";
import { Center, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <>
      <Center height="90vh">
        <Spinner />
      </Center>
    </>
  );
};

export default Loading;
