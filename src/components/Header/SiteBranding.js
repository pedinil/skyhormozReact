import React from 'react';
import { Link } from 'react-router-dom';



const SiteBranding = (props) => {


    return (

        <div  className="container">
        <div  className="row">
            <div  className="col-12">
                <div  className="site-branding flex flex-column align-items-center">
                    <h1  className="site-title"><a href="index.html" rel="home">{props.titlePage}</a></h1>
                </div>

                <nav  className="site-navigation">
                    <div  className="hamburger-menu d-lg-none">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <ul  className="flex-lg flex-lg-row justify-content-lg-center align-content-lg-center">
                        <li  className="current-menu-item">
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/agent">Agents</Link>
                        </li>
                        <li>
                        <Link to="/visa">Visa</Link>
                        </li>
                        <li>
                        <Link to="/cityTour">Dubai City Tour</Link>
                        </li>
                        <li>
                        <Link to="/aboutus">About Us</Link>
                        </li>
                        <li>
                        <Link to="/contactus">Contact Us</Link>
                        </li>
                        
                    </ul>

                 
                </nav>
            </div>
        </div>
    </div>
    );
    

}

export default SiteBranding;