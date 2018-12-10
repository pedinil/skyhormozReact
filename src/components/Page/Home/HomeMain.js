import React, { Component } from 'react';
import HeaderAll from '../../Header/HeaderAll';
import HomeTags from './HomeTags';
import FooterAll from '../../Footer/FooterAll';
import HomeCenter from './HomeCenter';
import HomeRight from './HomeRight';
import { HomeDataCenter } from './HomeDataCenter';




class HomeMain extends Component {
    
    render() {


        const HomeCenterList = HomeDataCenter.map((result) => {
            return (
                <HomeCenter result={result}/> 
            )

        });


        return (

            <div>
                <div class="outer-container">
                    <HomeTags />
                    <HeaderAll titlePage="Sky Hormoz Travel" />

                    <div class="container single-page">
                        <div class="row">
                            <div class="col-12 col-lg-9">
                            {HomeCenterList}
                                
                            </div>

                            <div class="col-12 col-lg-3">

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

export default HomeMain;
