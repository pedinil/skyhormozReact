import React from 'react';
import SimpleMap from '../Google Map/SimpleMap';


const HotelInfo = (props) => {
    return (
        <div>
            <div className="container-hotel">
<<<<<<< HEAD
                <div className="row">
                    <div className="col-3" >
                        <img className="htImg" src={props.result.HotelImg} />
                    </div>
                    <div className="col-6">
                        <h4 class="Hotel-name"><a>{props.result.HotelName}</a></h4>

                        <p class="Hotel-description"><i class="fa fa-pencil-square-o" /> {props.result.HotelDesc}</p>
                        <p class="Hotel-stars"><i class="fa fa-star" /> Stars: {props.result.Stars}</p>
                        <p class="Number-rooms"><i class="fa fa-bed" /> Rooms: {props.result.Rooms}</p>
                        <p class="Hotel-address"><i class="fa fa-map" /> Address:{props.result.Address}</p>
                    </div>
                    <div className="col-3">
                        <SimpleMap />
                    </div>
                </div>
=======
                <div className="hotelimg-container" >
                    <img className="htImg" src={props.result.HotelImg} />
                </div>
                <div className="Hotel-details">
                    <h4 class="Hotel-name"><a>{props.result.HotelName}</a></h4>

                    <p class="Hotel-description"><i class="fa fa-pencil-square-o" /> {props.result.HotelDesc}</p>
                    <p class="Hotel-stars"><i class="fa fa-star" /> Stars: {props.result.Stars}</p>
                    <p class="Number-rooms"><i class="fa fa-bed" /> Rooms: {props.result.Rooms}</p>
                    <p class="Hotel-address"><i class="fa fa-map" /> Address:{props.result.Address}</p>
                </div>
                <div className='Simple-Map'>
                <SimpleMap />
                </div>
                
>>>>>>> 8fb19f3bbea6a268c773dd9d95b434d25223a01a

            </div>
        </div >
    );
}
export default HotelInfo;