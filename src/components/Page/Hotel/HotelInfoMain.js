import React, { Component } from 'react';

import HeaderAll from '../../Header/HeaderAll';
import HotelInfoTags from './HotelInfoTags';
import FooterAll from '../../Footer/FooterAll';
import { DataHotelInfo } from './DataHotelInfo';
import HotelInfo from './HotelInfo';
import './Hotel.css';
import SearchBox from './Searchbox';




class HotelInfoMain extends Component {
    constructor() {
        super()
        this.state = {
            SearchH: 'Hotels',
            SearchS: 'Stars',
            Searchfield: '',
            DataHotelInfo: DataHotelInfo

        }
    }


    onSearchChange = (event) => {
        this.setState({ Searchfield: event.target.value })
    }

    render() {
        const filteredHotels = this.state.DataHotelInfo.filter(DataHotelInfo => {
            return DataHotelInfo.HotelName.toLowerCase().includes(this.state.Searchfield.toLowerCase())
        });




        {/*
            const filteredHotels = this.state.DataHotelInfo.filter(DataHotelInfo => {
                return DataHotelInfo.Address.toLowerCase().includes(this.state.Searchfield.toLowerCase()),
            })
        

*/}

        const Hotelinfo = filteredHotels.map((result) => {
            return (
                <HotelInfo result={result} />
            )
        });

        return (

            <div>
                <div className="outer-container">
                    <HotelInfoTags />
                    <HeaderAll titlePage="Hotels" />
                    
                    <div className="HotelInfo">
                    
                        <div className="HotelInfo-container">
                        <SearchBox searchchange={this.onSearchChange} />
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
