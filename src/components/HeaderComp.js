import React from 'react';


const HeaderComp = () => {


    return (
          
   
        <div class="top-header-bar">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 flex align-items-center">
                        <div class="header-bar-text d-none d-lg-block">
                        </div>

                        <div class="header-bar-email d-none d-lg-block">
                                <a href="mailto:info@skyhormoz.com">info@skyhormoz.com</a>
                        </div>
                    </div>

                    <div class="col-12 col-lg-6 flex justify-content-between justify-content-lg-end align-items-center">
                        <div class="header-bar-social d-none d-md-block">
                            <ul class="flex align-items-center">
                                <li><a href="https://www.facebook.com/skyhormoztravelsllc"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="https://twitter.com/skyhormoz"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/sky-hormoz-7b83b216b/"><i class="fa fa-linkedin"></i></a></li>
                                <li><a href="https://www.instagram.com/skyhormoztravelsllc/"><i class="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                        <div class="header-bar-search d-none d-md-block">
                               
                                    <input type="search" placeholder="Search"/>
                            </div>
                      
                    </div>
                </div>
            </div>
        </div>
    );

}

export default HeaderComp;