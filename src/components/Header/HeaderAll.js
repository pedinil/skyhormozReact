import React from 'react';
import '../../css/style.css';
import '../../css/font-awesome.min.css';
import HeaderComp from './HeaderComp';
import SiteBranding from './SiteBranding';
import Swipper from './Swipper';

const HeaderAll = (props) => {


    return (

        <div>
            <header className="site-header">
                <HeaderComp />
                <SiteBranding  titlePage={props.titlePage}/>
            </header>
            <Swipper />
            </div>


    );

}

export default HeaderAll;