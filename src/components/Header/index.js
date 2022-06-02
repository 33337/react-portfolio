import React from 'react'

function Header(location) {
    return (
        <header className='mb'>
            <h1>Charles Peace</h1>
            {location.children}
        </header>
    )
}

export default Header