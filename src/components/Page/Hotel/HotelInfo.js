import React from 'react';


const HotelInfo=(props)=>{
    return(
        <div>
        <div className="container-hotel">
        <div className="hotelimg-container" >
            <img className="htImg" src={props.result.HotelImg}/>
        </div>
    <h4 class="Hotel-name"><a>{props.result.HotelName}</a></h4>
    
    <p class="Hotel-description"><i class="fa fa-pencil-square-o" /> {props.result.HotelDesc}</p>
    <p class="Hotel-stars"><i class="fa fa-star" /> Stars: {props.result.Stars}</p>
    <p class="Number-rooms"><i class="fa fa-bed" /> Rooms: {props.result.Rooms}</p>
    <p class="Hotel-address"><i class="fa fa-map" /> Address:{props.result.Address}</p>
    <div  className="mapouter"><div  className="gmap_canvas"><iframe width="270" height="150" id="gmap_canvas" src={props.result.Src} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.pureblack.de"></a></div></div>

 

</div>
</div>
    );
}
export default HotelInfo;