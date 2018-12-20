import React, { Component } from 'react';
import './Home.css';
import '../../../css/bootstrap.min.css';
import '../../../css/swiper.min.css';
import { DataHomeSwipper } from './DataHomeSwipper';


class HomeSwipper extends Component{
    render(){
        const lisHomeSwipper =DataHomeSwipper.map((result)=>{
    return (
        <div>
            <div class="container">
                <div class="row text-center mb-3">
                    <div class="col-md-12">
                        <h2>Top Lists of Safest Car</h2>
                        <p>Lorem Ipsum pagination consumpim in definiction.</p>
                        <hr />
                    </div>
                </div>
                <div class="row">
                    {/*	<!-- Swiper -->*/}
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="card">
                                            <div class="card-img"><img src={result.cardimg} /></div>
                                            <div class="card-body">
                                                <h5 class="title">{result.title}</h5>
                                                <h4 class="cost pt-1 pb-2">{result.cost}</h4>

                                                <button type="button" class="btn btn-outline-danger btn-block btn-sm">{result.button}</button>
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
        })
}
}

export default HomeSwipper;