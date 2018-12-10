import React from 'react';


const HeaderComp = () => {


    return (
          
   
        <div  className="top-header-bar">
            <div  className="container-fluid">
                <div  className="row">
                    <div  className="col-lg-6 flex align-items-center">
                        <div  className="header-bar-text d-none d-lg-block">
                        </div>

                        <div  className="header-bar-email d-none d-lg-block">
                                <a href="mailto:info@skyhormoz.com">info@skyhormoz.com</a>
                        </div>
                    </div>

                    <div  className="col-12 col-lg-6 flex justify-content-between justify-content-lg-end align-items-center">
                        <div  className="header-bar-social d-none d-md-block">
                            <ul  className="flex align-items-center">
                                <li><a href="https://www.facebook.com/skyhormoztravelsllc"><i  className="fa fa-facebook"></i></a></li>
                                <li><a href="https://twitter.com/skyhormoz"><i  className="fa fa-twitter"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/sky-hormoz-7b83b216b/"><i  className="fa fa-linkedin"></i></a></li>
                                <li><a href="https://www.instagram.com/skyhormoztravelsllc/"><i  className="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                        <div  className="header-bar-search d-none d-md-block">
                               
                                    <input type="search" placeholder="Search"/>
                            </div>
                      
                    </div>
                </div>
            </div>
        </div>
    );

}

export default HeaderComp;