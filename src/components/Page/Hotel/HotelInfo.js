import React from 'react';


const HotelInfo=(props)=>{
    return(
        <div className="container-hotel">
        <div  className="mapouter"><div  className="gmap_canvas"><iframe width="280" height="250" id="gmap_canvas" src={props.result.Src} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.pureblack.de"></a></div></div>

  <div className="details">
    <h4 class="Hotel-name"><a>{props.result.HotelName}</a></h4>
    
    <p class="Hotel-description">{props.result.HotelDesc}</p>
    <p class="Hotel-stars">Stars: {props.result.Stars}</p>
    <p class="Number-rooms">Rooms:{props.result.Rooms}</p>
    <p class="Hotel-address">Address:{props.result.Address}</p>

  </div>

</div>
    );
}
export default HotelInfo;