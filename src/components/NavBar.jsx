import React from "react";
import CartWidget from "./CartWidget";
import {
  Flex,
  Spacer,
  Button,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";

const NavBar = () => {
  return (
    <>
      <Flex alignItems="center" py={3} px={5} boxShadow="xl" bg="white">
        <Link to={"/"}>
          <Heading as="h1" size="lg">
            Mansion.ind
          </Heading>
        </Link>
        <Spacer />
        <Menu>
          <Link to={"/catalogue"}>
            <MenuButton as={Button} colorScheme="gray" variant="ghost">
              Shop
            </MenuButton>
          </Link>
        </Menu>
        <Menu>
          <MenuButton
            as={Button}
            colorScheme="gray"
            variant="ghost"
            mr="4"
            rightIcon={<ChevronDownIcon />}
          >
            Categorias
          </MenuButton>
          <MenuList>
            <Link to={`/category/${"hombres"}`}>
              <MenuItem>Hombres</MenuItem>
            </Link>
            <Link to={`/category/${"mujeres"}`}>
              <MenuItem>Mujeres</MenuItem>
            </Link>
            <Link to={`/category/${"niños"}`}>
              <MenuItem>Niños</MenuItem>
            </Link>
          </MenuList>
        </Menu>
        <Link to={"/cart"}>
          <CartWidget />
        </Link>
      </Flex>
    </>
  );
};

export default NavBar;
