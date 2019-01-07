import React, { Component } from 'react';

import HeaderAll from '../../Header/HeaderAll';
import HotelInfoTags from './HotelInfoTags';
import FooterAll from '../../Footer/FooterAll';
import { DataHotelInfo } from './DataHotelInfo';
import HotelInfo from './HotelInfo';
import './Hotel.css';
import SearchBox from './Searchbox';




 class HotelInfoMain extends Component {
     constructor(){
         super()
         this.state={
             Searchfield:'',
             HotelInfo:HotelInfo

         }
     }
     onSearchChange=(event)=>{
         this.setState({Searchfield:event.target.value})
     }
    render() {
        const filteredHotels=this.state.HotelInfo.filter(HotelInfo=>{
            return HotelInfo.name.toLowerCase().includes(this.state.Searchfield.toLowerCase())
        })
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
                    <SearchBox searchchange={this.onSearchChange} />
                    <div className="HotelInfo">                    
                       <div className="row HotelInfo-container">
                       
                                    {filteredHotels} 
                            

                            </div>

                        </div>
                    

                    </div>
                    <FooterAll />
                    </div>

               
                    );
                }
            }
            
            export default HotelInfoMain;
