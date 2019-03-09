import React, { Component } from 'react';
import HeaderAll from '../../Header/HeaderAll';
import HomeTags from './HomeTags';
import FooterAll from '../../Footer/FooterAll';
import HomeSwipper from './HomeSwipper';
import LogBook from './LogBook';
import { DataHomeSwipper } from './DataHomeSwipper';
import { DataHomeCityTour } from './DataHomeCityTour';
import { DataHomeVisaPackageTour } from './DataHomeVisaPackageTour';
import { DataLogBook } from './DataLogBook';
import { DataHomeHolidayPackages } from './DataHomeHolidayPackages';
import HomeHolidayPackages from "./HomeHolidayPackages"
import YoutubeFirst from '../Youtube/YoutubeFirst'
import './Home.css';




class newHome extends Component {

    render() {



        const Logbook = DataLogBook.map((result) => {
            return (
                <LogBook result={result} />
            )

        });

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


        const HomeHolidayPackagesList = DataHomeHolidayPackages.map((result) => {
            return (
                <HomeHolidayPackages result={result} />
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
                        <div className="logBook">
                            <h3 class="title3-heading">UAE Tourist Attractions</h3>
                            <span class="br"></span>
                            <div className="row logBook-container">
                                {Logbook}

                            </div>

                        </div>



                        {/*
                        <div className='swipper'>
                            <YoutubeFirst />
                        </div>
                        */}

                        <div className="logBook">
                        <h3 class="title3-heading">Holiday Packges</h3>
                            <div className="row">
                                {HomeHolidayPackagesList}
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
