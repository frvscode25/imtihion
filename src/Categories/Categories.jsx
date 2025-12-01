import React from 'react'
import "./Categories.css"

const Categories = () => {
    return (
        <div>
            <div className=' container d-flex gap-3'>
                <div className='left'>

                    <h2>Our team of creatives</h2>
                    <h6>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt.</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br /> ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br /> aliquip ex ea commodo consequat. Duis aute irure dolor in <br /> reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>

                </div>
                <img src="./src/assets/more.png" alt="" />
            </div>
            <div className=' container d-flex gap-4'>
                <img src="./src/assets/12.png" alt="" />
              
                <div className='left'>
                    <h2>Why we started this Blog</h2>
                    <h6>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt.</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br /> ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br /> aliquip ex ea commodo consequat. Duis aute irure dolor in <br /> reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>

                </div>
            </div>
        </div>
    )
}

export default Categories
