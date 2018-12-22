import React from 'react';
import './Home.css';



const HomeSwipper=(props)=>{
    return (
        <div>   <div class='row'>
                <div class='card container-swip'>
                <img className='card-img' src={props.result.cardimg} />
                <p className='description'>{props.result.description}</p>
                <p className='cost'>{props.result.cost}</p>
                <button className='btn btn-primary'>Order</button>
                
                </div>
                </div>
        </div>
    );
        

}
export default HomeSwipper;