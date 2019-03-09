import React from 'react'
import { Link } from 'react-router-dom';



const HomeHolidayPackages = (props) => {

    return (


        <div className='col-xs-12 col-lg-6'>
            <div className='card container-swip'>
                <Link to={props.result.Url}>
                    <img className='card-img' src={props.result.imgSrc} alt={props.result.imgAlt} />
                </Link>
            </div>
            {/*

                <div className="hodilyPackagesTitle">Holiday Tours</div>
                <div className="row">

                    <div class="col-xs-4 col-md-4 col-g-4">
                     <img src="/images/firstPage/tour4.jpg" className="hodilyPackagesImg" />
                    </div>

                    <div class="col-xs-4 col-md-4 col-g-4">
                        <img src="/images/georgian.jpg" className="hodilyPackagesImg" />
                    </div>
                    <div class="col-xs-4 col-md-4 col-g-4">
                        <img src="/images/georgian.jpg" className="hodilyPackagesImg" />
                    </div>
                </div >
                <div className="hodilyPackagesBottem">
                    Tours : Dubai City Tour, Desert Safari,Dhow Cruise Creek, At The Top Ticket,Dubai Dancing Fountain Dubai Park Resort 1 Day Pass Legoland, Motion Gate, Bollywood
                </div>
            */}
        </div>



    )




}

export default HomeHolidayPackages;