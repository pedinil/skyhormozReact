import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';



const HomeSwipper = (props) => {



    return (
        <div className='col-xs-12 col-lg-4'>
            <div className='card container-swip'>
                <img className='card-img' src={props.result.cardimg} />
                <p className='description'>{props.result.description}</p>
                <p className='cost'>{props.result.cost}</p>
                <Link  to={props.result.Url}><button className='btn btn-primary'>Order </button></Link>

            </div>
        </div>

    );


}
export default HomeSwipper;