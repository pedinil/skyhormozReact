import React from 'react';
import './Home.css';
import '../../../css/bootstrap.min.css';
import '../../../css/swiper.min.css';


const HomeSwipper=(props)=>{
    return (
        <div>
            <div class="container">
                <div class="row text-center mb-3">
                    
                </div>
                <div class="row">
                    {/*	<!-- Swiper -->*/}
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="card">
                                            <div class="card-img"><img src={props.result.cardimg} /></div>
                                            <div class="card-body">
                                                <h5 class="title">{props.result.title}</h5>
                                                <h4 class="cost pt-1 pb-2">{props.result.cost}</h4>

                                                <button type="button" class="btn btn-outline-danger btn-block btn-sm">{props.result.button}</button>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>


                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
        

}
export default HomeSwipper;