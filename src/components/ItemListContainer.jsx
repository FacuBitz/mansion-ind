import React from 'react'
import { Heading, Container } from '@chakra-ui/react'

const ItemListContainer = ({greeting}) => {
    return (
        <Container centerContent pt={6}>
            <Heading size='sm'>
                {greeting}
            </Heading>
        </Container>
    )
}

export default ItemListContainer