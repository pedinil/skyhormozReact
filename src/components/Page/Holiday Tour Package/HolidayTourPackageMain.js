import React , { Component } from "react";
import HeaderAll from "../../Header/HeaderAll";
import FooterAll from "../../Footer/FooterAll";
import HolidayTourTags from "./HolidayTourTags";
import './HolidayTour.css';
import HolidayTour from "./HolidayTour";
import { HolidayTourData } from "./HolidayTourData";



class HolidayTourPackageMain extends Component{
    render(){
        const HolidayTours=HolidayTourData.map((result)=>{
            return (
                <HolidayTour result={result} />
            )
        });
        return(
            <div>    
             <div className="container-fluid">
                                <HolidayTourTags />
                                <HeaderAll titlePage="Holiday Tour Package"/>
                                <div className="Holiday-Main-Container">
                                {/*
                                <div className="containerTitle row">
                                
                                     <div class='col-3 package-header'>
                                         <h3>Tour Package</h3>
                                     </div>
                                 <div className="col-6 desc-header">
                                         <h3>Description</h3>
                                </div>
                                <div className="col-3 Rateheader">
                                          <h3>Selling Rate</h3>
                                </div>
                               
                                 </div>
                                  */}
                                  {HolidayTours}
                                </div>
                                <FooterAll />

                </div>
            </div>
        );
    }
}


export default HolidayTourPackageMain;

