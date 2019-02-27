import React , { Component } from "react";
import HeaderAll from "../../Header/HeaderAll";
import FooterAll from "../../Footer/FooterAll";
import HolidayTourTags from "./HolidayTourTags";
import './HolidayTour.css';
import HolidayTour from "./HolidayTour";



class HolidayTourPackageMain extends Component{
    render(){
        
        return(
            <div>    
             <div className="container-fluid">
                                <HolidayTourTags />
                                <HeaderAll titlePage="Holiday Tour Package"/>
                                <div className="Holiday-Main-Container">
                                   <HolidayTour />
                                </div>
                                <FooterAll />

                </div>
            </div>
        );
    }
}

export default HolidayTourPackageMain;

