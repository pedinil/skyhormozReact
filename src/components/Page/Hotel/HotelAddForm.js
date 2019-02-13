import React, { Component } from 'react';
import Formtags from './HotelAddtags';
import FormData from './HotelForm';
import HeaderAll from '../../Header/HeaderAll';
import FooterAll from '../../Footer/FooterAll';


class Form2 extends Component{
    render(){
        return(
            <div>
                <HeaderAll />
                <Formtags />
                <div className="container single-page">
                <div className="row">
                    <div className="col 12 col-lg-9">
                    <FormData />
                    </div>
                </div>
                </div>
                <FooterAll />
            </div>
        );
    }
}
export default Form2;