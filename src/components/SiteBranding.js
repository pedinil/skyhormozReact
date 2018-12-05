import React from 'react';



const SiteBranding = () => {


    return (

        <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="site-branding flex flex-column align-items-center">
                    <h1 class="site-title"><a href="index.html" rel="home">Visa</a></h1>
                </div>

                <nav class="site-navigation">
                    <div class="hamburger-menu d-lg-none">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <ul class="flex-lg flex-lg-row justify-content-lg-center align-content-lg-center">
                        <li class="current-menu-item"><a href="index.html">Home</a></li>
                        <li><a href="./agents.html">Agents</a></li>
                        <li><a href="./visa.html">visa</a></li>
                        <li><a href="./cityTour.html">Dubai City Tour</a></li>
                        <li><a href="./about.html">about us</a></li>
                        <li><a href="./contact.html">Contact</a></li>
                        
                    </ul>

                 
                </nav>
            </div>
        </div>
    </div>
    );
    

}

export default SiteBranding;