import React from 'react';
import { Link } from 'react-router-dom';



const SiteBranding = (props) => {


    return (

        <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="site-branding flex flex-column align-items-center">
                    <h1 class="site-title"><a href="index.html" rel="home">{props.titlePage}</a></h1>
                </div>

                <nav class="site-navigation">
                    <div class="hamburger-menu d-lg-none">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <ul class="flex-lg flex-lg-row justify-content-lg-center align-content-lg-center">
                        <li class="current-menu-item">
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