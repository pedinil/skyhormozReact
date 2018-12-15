import React, { Component } from 'react';
import HeaderAll from '../../Header/HeaderAll'
import FooterAll from '../../Footer/FooterAll'
import Formtags from './Formtags';
import FormData from './FormData';


class Form extends Component {
    render() {
        return (
            <div>
                <HeaderAll titlePage='Form' />
                <Formtags />
                <div className='container single-page' >
                    <div className='row'>
                        <div className='col 12 col-lg-9'>
                            <div className='content-wrap'>
                                <FormData />
                            </div>
                        </div>
                    </div>

                </div>


                <FooterAll />

            </div>

        );

    }

}
export default Form;