import React, { Component } from 'react';
import HeaderAll from '../../Header/HeaderAll';
import HomeTags from './HomeTags';
import FooterAll from '../../Footer/FooterAll';
import HomeSwipper from './HomeSwipper';
import { DataHomeSwipper } from './DataHomeSwipper';
import { DataHomeCityTour } from './DataHomeCityTour';
import { DataHomeVisaPackageTour } from './DataHomeVisaPackageTour';

import './Home.css'




class newHome extends Component {

    render() {





        const HomeCityList = DataHomeCityTour.map((result) => {
            return (
                <HomeSwipper result={result} />
            )

        });
        


        const HomeVisaPackageTour = DataHomeVisaPackageTour.map((result) => {
            return (
                <HomeSwipper result={result} />
            )

        });
        

        return (

            <div>
                <div className="outer-container">
                    <HomeTags />
                    <HeaderAll titlePage="Sky Hormoz Travel" />



                    <div className="container single-page">

                        <div className='swipper'>

                            <div className='swipper-title'>
                                <h2>Dubai Visa Packages</h2>
                            </div>
                            <div className="row">
                                {HomeVisaPackageTour}
                            </div>
                        </div>
                        

                        <div className='swipper'>
                            <div className='swipper-title'>
                                <h2>Dubai City Tours</h2>
                            </div>
                            <div className="row">
                                {HomeCityList}
                            </div>

                        </div>


                        <div className='swipper'>
                          
                            <iframe width="100%" height="700" src="https://www.youtube.com/embed/RVayg4SdC-Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            

                        </div>
                     

                    </div>


               



                </div>


                <FooterAll />

            </div>


        );
    }
}

export default newHome;
