import React, { Component } from 'react';
import HeaderAll from '../../Header/HeaderAll';
import ContactUsTags from './CityTourTags';
import FooterAll from '../../Footer/FooterAll';
import { CityTourData } from './CityTourData';





class CityTourMain extends Component {


    render() {

        const citytourList = CityTourData.map((result) => {

            return (
                <div class="col-xs-12 col-lg-4 ">
                <div class="content-wrap cityTourPage">
                    <header class="entry-header">
                        <h2 class="entry-title">{result.entryTitle}</h2>
                    </header>
                    <div class="image-container">
                        <figure class="featured-image">
                            <img src={result.imgSrc} alt={result.imgAlt} />
                        </figure>
                    </div>
                    <div class="entry-header"><h3>{result.specialOffer}</h3></div>
                    <div class="entry-content"><p>{result.entryContent}</p></div>
                    <a href="https://wa.me/971561897911?text=Atlantis%20Tour">Whatsapp <i class="fa fa-whatsapp fa-3x"></i></a>
                </div>
            </div>
            )
        
        });


        return (
            <div>
                <div class="outer-container">
                    <ContactUsTags />
                    <HeaderAll titlePage="City Tour" />

                    <div class="container single-page cityTourPage">
                    <div class="row">

                   
                      {citytourList}
                   
                    </div>
                    </div>
                    <FooterAll />

                </div>
            </div>
        );
    }

}


export default CityTourMain;