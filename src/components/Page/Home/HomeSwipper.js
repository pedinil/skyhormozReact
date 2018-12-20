import React from 'react';
import './Home.css';
import '../../../css/bootstrap.min.css';
import '../../../css/swiper.min.css';


const HomeSwipper = () => {
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
                                <div class="card-img"><img src="https://img.gaadicdn.com/images/carexteriorimages/upcoming/360x240/Jeep/Jeep-Renegade/047.jpg" /></div>
                                <div class="card-body">
                                   <h5>Renault KWID</h5>
                                   <h4 class="pt-1 pb-2">Rs. 5.44-6.77 Lac</h4>
                                 
                                   <button type= "button" class="btn btn-outline-danger btn-block btn-sm">Lets Judge it.</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card">
                                <div class="card-img"><img src="https://img.gaadicdn.com/images/carexteriorimages/upcoming/360x240/Jeep/Jeep-Renegade/047.jpg" /></div>
                                <div class="card-body">
                                   <h5>Renault KWID</h5>
                                   <h4 class="pt-1 pb-2">Rs. 5.44-6.77 Lac</h4>
                                 
                                   <button type= "button" class="btn btn-outline-danger btn-block btn-sm">Lets Judge it.</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card">
                                <div class="card-img"><img src="https://img.gaadicdn.com/images/carexteriorimages/upcoming/360x240/Jeep/Jeep-Renegade/047.jpg" /></div>
                                <div class="card-body">
                                   <h5>Renault KWID</h5>
                                   <h4 class="pt-1 pb-2">Rs. 5.44-6.77 Lac</h4>
                                 
                                   <button type= "button" class="btn btn-outline-danger btn-block btn-sm">Lets Judge it.</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card">
                                <div class="card-img"><img src="https://img.gaadicdn.com/images/carexteriorimages/upcoming/360x240/Jeep/Jeep-Renegade/047.jpg" /></div>
                                <div class="card-body">
                                   <h5>Renault KWID</h5>
                                   <h4 class="pt-1 pb-2">Rs. 5.44-6.77 Lac</h4>
                                 
                                   <button type= "button" class="btn btn-outline-danger btn-block btn-sm">Lets Judge it.</button>
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