import React from 'react';
import '../css/bootstrap.min.css';
import '../css/style.css';
import '../css/font-awesome.min.css';
import '../css/swiper.min.css';
import HeaderComp from './HeaderComp';
import SiteBranding from './SiteBranding';
import Swipper from './Swipper';

const HeaderAll = () => {


    return (

        <div class="outer-container">
            <header class="site-header">
                <HeaderComp />
                <SiteBranding />
            </header>
            <Swipper />
        </div>


    );

}

export default HeaderAll;