import React from 'react';
import './Home.css';


const LogBook = (props) => {
    return (

        <div className="container-log col-xs-12 col-lg-4" align="center">
            <div class="text-center  card-wrapper" >
                <a href={props.result.link} class="bgimage">
                    <img class="card-img" src={props.result.logImg} />
                </a>

                <div class="card-block">
                    <h4 class="vertical-middle small-font-size">
                        {props.result.detail}
                    </h4>
                    {/*
                    <span class="borerbox mb-1 d-block">
                    
                        <span class="ml-3 xxsmall-font-size my-1 d-inline grey-text">
                            <i class="fa fa-map-marker org-color" />
                            <a href={props.result.location}>{props.result.locationContent}</a>
                        </span>
                    </span>
                    */}
                    <div class="posbot">
                    {/*
                        <a href={props.result.link} class="vertical-middle font-weight-bold">{props.result.linkContent}</a>
                        <spna><br /></spna>
                        */}
                        <a href={props.result.link} class="btn btn-outline-dangerbtn btn-outline-danger ">Read More</a>
                    </div>
                </div>

            </div>

        </div>
    );

}
export default LogBook;