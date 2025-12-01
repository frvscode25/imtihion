import React from 'react'
import "./Header.css"

function Header() {
    return (

        <div className='Header '>
            <div className='header-container container'>
                <p className='one'>POSTED ON <span>STARTUP</span></p>
                <h3>Step-by-step guide to choosing <br /> great font pairs</h3>
                <p className='two'>By <span>James West</span>   |  May 23, 2022 </p>
                <p className='text'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br />
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                <button className='btn-one'>Read More </button>

            </div>

        </div>
    )
}

export default Header
