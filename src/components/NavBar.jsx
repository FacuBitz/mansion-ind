import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div>
            <h1>Mansion.ind</h1>
            <ul>
                <button>Shop</button>
                <button>Nosotros</button>
                <button>Contacto</button>
            </ul>
            <CartWidget/>
        </div>
    )
}

export default NavBar