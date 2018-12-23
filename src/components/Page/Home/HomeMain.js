import React, { Component } from 'react';
import HeaderAll from '../../Header/HeaderAll';
import HomeTags from './HomeTags';
import FooterAll from '../../Footer/FooterAll';
import HomeCenter from './HomeCenter';
import HomeRight from './HomeRight';
import { HomeDataCenter } from './HomeDataCenter';
import { HomeDataRight } from './HomeDataRight';




class HomeMain extends Component {
    
    render() {


        const HomeCenterList = HomeDataCenter.map((result) => {
            return (
                <HomeCenter result={result}/> 
            )

        });

        const HomeRightList = HomeDataRight.map((result) => {
            return (
                <HomeRight result={result}/> 
            )

        });

        return (

            <div>
                <div className="outer-container">
                    <HomeTags />
                    <HeaderAll titlePage="Sky Hormoz Travel" />

                    <div className="container single-page">
                        <div className="row">

                            <div className="col-12 col-lg-8">

                            {HomeCenterList}
                                
                            </div>

                            <div className="col-12 col-lg-4">

                              {HomeRightList}

                            </div>
                        </div>
                    </div>
                </div>




                <FooterAll />

            </div>


        );
    }
}

export default HomeMain;
