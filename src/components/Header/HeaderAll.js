import React from 'react';
import '../../css/bootstrap.min.css';
import '../../css/style.css';
import '../../css/font-awesome.min.css';
import '../../css/swiper.min.css';
import HeaderComp from './HeaderComp';
import SiteBranding from './SiteBranding';
import Swipper from './Swipper';

const HeaderAll = (props) => {


    return (

        <div>
            <header class="site-header">
                <HeaderComp />
                <SiteBranding  titlePage={props.titlePage}/>
            </header>
            <Swipper />
            </div>


    );

}

export default HeaderAll;