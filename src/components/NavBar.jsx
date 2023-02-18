import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Button, Heading, ButtonGroup } from '@chakra-ui/react'

const NavBar = () => {
    return (
        <Flex alignItems='center' py={3} px={5} boxShadow='xl' bg='white'>
            <Heading as='h1' size='lg'>Mansion.ind</Heading>
            <Spacer/>
            <ButtonGroup mr='4' spacing={1}>
                <Button colorScheme='gray' variant='ghost'>Shop</Button>
                <Button colorScheme='gray' variant='ghost'>Nosotros</Button>
                <Button colorScheme='gray' variant='ghost'>Contacto</Button>
            </ButtonGroup>
            <CartWidget/>
        </Flex>
    )
}

export default NavBar