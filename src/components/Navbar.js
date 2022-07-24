import React from 'react'

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <input type="text" name="champName" placeholder='Buscar campeón' />
                    <button>Buscar</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar