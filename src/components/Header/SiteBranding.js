import React from 'react';
import Navigation  from './Navigation';


const SiteBranding = (props) => {


    return (

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="site-branding flex flex-column align-items-center">
                        <h1 className="site-title"><a href="index.html" rel="home">{props.titlePage}</a></h1>
                    </div>

                       
                        <Navigation className="col-12 col-lg-6 flex justify-content-between justify-content-lg-end align-items-center" />
                      

                </div>
            </div>
        </div>
    );


}

export default SiteBranding;