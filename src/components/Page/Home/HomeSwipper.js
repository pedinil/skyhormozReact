import React from 'react';
import './Home.css';
import '../../../css/bootstrap.min.css';
import '../../../css/swiper.min.css';



const HomeSwipper=(props)=>{
    return (
        <div>   <div class='row'>
                <div class='card container-swip'>
                <img className='card-img' src={props.result.cardimg} />
                <p className='description'>{props.result.description}</p>
                <p className='cost'>{props.result.cost}</p>
                <button className='button'>Order</button>
                
                </div>
                </div>
        </div>
    );
        

}
export default HomeSwipper;