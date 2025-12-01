import React from 'react'
import './Servis.css'

function Servis() {
    return (
        <div className='container'>
            <div className='h4'>
                <h4>Popular blogs</h4>
            </div>
            <div className='row'>
                <div className='col-12 col-md-6 col-lg-4 mb-4'>
                    <img src="./src/assets/img1.png" alt="" className="img-fluid mb-3" />
                    <p className='P'>By <span>John Doe</span>   |   Aug 23, 2021 </p>
                    <h5>
                        A UX Case Study Creating a <br /> Studious Environment for <br /> Students
                    </h5>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate <br />
                        velit esse cillum dolore eu fugiat nulla <span className="br"></span> Excepteur sint occaecat cupidatat non proident.
                    </p>
                </div>
                <div className='col-12 col-md-6 col-lg-4 mb-4'>
                    <img src="./src/assets/img2.png" alt="" className="img-fluid mb-3" />
                    <p>By John Doe   |   Aug 23, 2021 </p>
                    <h5>
                        A UX Case Study Creating a <br /> Studious Environment for <br /> Students
                    </h5>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate <br />
                        velit esse cillum dolore eu fugiat nulla <span className="br"></span> Excepteur sint occaecat cupidatat non proident.
                    </p>
                </div>
                <div className='col-12 col-md-6 col-lg-4 mb-4'>
                    <img src="./src/assets/img3.png" alt="" className="img-fluid mb-3" />
                    <p>By John Doe   |   Aug 23, 2021 </p>
                    <h5>
                        A UX Case Study Creating a <br /> Studious Environment for <br /> Students
                    </h5>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate <br />
                        velit esse cillum dolore eu fugiat nulla <span className="br"></span> Excepteur sint occaecat cupidatat non proident.
                    </p>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Servis
