import React, { Component } from 'react';
import HeaderAll from '../../Header/HeaderAll';
import HomeTags from './HomeTags';
import FooterAll from '../../Footer/FooterAll';
import HomeCenter from './HomeCenter';
import HomeRight from './HomeRight';
import { HomeDataCenter } from './HomeDataCenter';
import HomeSwipper from './HomeSwipper';




class newHome extends Component {
    
    render() {


        const HomeCenterList = HomeDataCenter.map((result) => {
            return (
                <HomeCenter result={result}/> 
            )

        });


        return (

            <div>
                <div className="outer-container">
                    <HomeTags />
                    <HeaderAll titlePage="Sky Hormoz Travel" />

                    <div className="container single-page">
                        <div className="row">
                        <div className="col-12 col-lg-9">
                        <HomeSwipper />
                        </div>

                            <div className="col-12 col-lg-9">
                            
                            
                            {HomeCenterList}
                                
                            </div>

                            <div className="col-12 col-lg-3">

                                <HomeRight />

                            </div>
                        </div>
                    </div>
                </div>




                <FooterAll />

            </div>


        );
    }
}

export default newHome;
