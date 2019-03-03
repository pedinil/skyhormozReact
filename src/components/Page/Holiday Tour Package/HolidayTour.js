import React from "react";



const HolidayTour=(props)=>{
return(
    <div>
        <div className="container-fluid">
            <div className="holiday-tour-container">
            <div className="container-title row">
                <div class='package-header'>
                <h3>Tour Package</h3>
                </div>
                <div className="desc-header">
                    <h3>Description</h3>
                </div>
                <div className="Rateheader">
                    <h3>Selling Rate</h3>
                </div>
            </div>
            <div className="row container-holidayTour">
                    <div className="col-3 packages-container" >
                      <h2 class='days-night'>{props.result.daysnight}</h2>
                    </div>
                
                <div className="col-6 descriptions">
                        <div className='desc-title'>
                            <h4>{props.result.title}</h4>
                        </div>
                        <div className="Days">
                            <p>{props.result.days} </p>
                        </div>
                     <div class="tours">   
                    <p>{props.result.tours}</p>
                    </div>
                    <div class="transfer">
                    <p>{props.result.transfer}</p>
                    </div> 
                </div>
                <div className="col-3 Rate-col">
                            <h4>1,360 AED
Per Pax</h4>       
                </div>
                
                
            </div>
            </div>
        </div>
    </div>
);
}
export default HolidayTour;