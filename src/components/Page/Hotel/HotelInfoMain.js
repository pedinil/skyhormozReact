import React, { Component } from 'react';
import HeaderAll from '../../Header/HeaderAll';
import HotelInfoTags from './HotelInfoTags';
import FooterAll from '../../Footer/FooterAll';
import { DataHotelInfo } from './DataHotelInfo';
import HotelInfo from './HotelInfo';
import './Hotel.css';




 class HotelInfoMain extends Component {
    render() {
        const Hotelinfo=DataHotelInfo.map((result)=>{
            return(
                <HotelInfo result={result} />
            )
        });
        return (

            <div>
                <div  className="outer-container">
                    <HotelInfoTags />
                    <HeaderAll titlePage="Hotels" />
                    <div className="HotelInfo">                    
                       <div className="row HotelInfo-container">
                                {Hotelinfo}

                            </div>

                        </div>
                    

                    </div>
                    <FooterAll />
                    </div>

               
                    );
                }
            }
            
            export default HotelInfoMain;
