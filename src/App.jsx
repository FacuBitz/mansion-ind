import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Welcome from "./components/Welcome";
import StateComponent from "./context/StateComponent";

const App = () => {
  return (
    <>
      <ChakraProvider>
        <StateComponent>
          <BrowserRouter>
            <NavBar />

            <Routes>
              <Route exact path="/" element={<Welcome />} />
              <Route exact path="/catalogue" element={<ItemListContainer />} />
              <Route
                exact
                path="/category/:category"
                element={<ItemListContainer />}
              />
              <Route exact path="/item/:id" element={<ItemDetailContainer />} />
              <Route exact path="/cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </StateComponent>
      </ChakraProvider>
    </>
  );
};

export default App;
