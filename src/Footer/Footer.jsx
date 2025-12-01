import React from 'react'
import "./Footer.css"
function Footer() {
    return (
        <div className='Footer    '>
            <div className='container  d-flex  justify-content-between'>

                <div className='p container  '>
                    <p>Finstreet 118 2561 Fintown</p>
                    <p>Hello@finsweet.com  020 7993 2905</p>
                </div>
                <div className='img'>
                    <img src="./src/assets/footer.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer
