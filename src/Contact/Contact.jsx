import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className='Contact container'>
                <center>Choose A Catagory</center>

                <div className='c_cards'>
                    <div className='c_cards'>
                        <div className='card'>
                            <img src="./src/assets/icon1.svg" alt="Icon 1" />
                            <h3>Business</h3>
                            <p>Lorem ipsum dolor sit amet, <br />
                                consectetuer adipiscing elit.</p>
                        </div>
                    </div>
                    <div className='c_cards'>
                        <div className='card'>
                            <img src="./src/assets/2.svg" alt="Icon 1" />
                            <h3>Startup</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </div>
                    </div>
                    <div className='c_cards'>
                        <div className='card'>
                            <img src="./src/assets/3.svg" alt="Icon 1" />
                            <h3>Economy</h3>
                            <p>Lorem ipsum dolor sit amet, <br />
                             consectetuer adipiscing elit.</p>
                        </div>
                    </div>
                    <div className='c_cards'>
                        <div className='card'>
                            <img src="./src/assets/4.svg" alt="Icon 1" />
                            <h3>Technology</h3>
                            <p>Lorem ipsum dolor sit amet, <br />
                                consectetuer adipiscing elit.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact
