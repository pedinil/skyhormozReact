import React from "react";



const HolidayTour=(props)=>{
return(
    <div>
        <div className="container-fluid">
            <div className="holiday-tour-container">
            <div className="container-title row">
                <h3 class="package">Tour Package</h3>
                <h3 className="Desc">Description</h3>
                <h3 className="Rate">Selling Rate</h3>
            </div>
            <div class="row holiday-content">
                <div className="col-3 TourPackage">
                        <p className="days">3Days/2Nights</p>
                </div>
                <div className="col-6 description">

                </div>
                <div className="col-3 SellingRate">

                </div>
            </div>
            </div>
        </div>
    </div>
);
}
export default HolidayTour;