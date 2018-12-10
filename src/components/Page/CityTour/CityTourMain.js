import React, { Component } from 'react';
import HeaderAll from '../../Header/HeaderAll';
import ContactUsTags from './CityTourTags';
import FooterAll from '../../Footer/FooterAll';
import { CityTourData } from './CityTourData';





 class CityTourMain extends Component {


    render() {

        const citytourList = CityTourData.map((result) => {

            return (
                <div  className="col-xs-12 col-lg-4 ">
                <div  className="content-wrap cityTourPage">
                    <header  className="entry-header">
                        <h2  className="entry-title">{result.entryTitle}</h2>
                    </header>
                    <div  className="image-container">
                        <figure  className="featured-image">
                            <img src={result.imgSrc} alt={result.imgAlt} />
                        </figure>
                    </div>
                    <div  className="entry-header"><h3>{result.specialOffer}</h3></div>
                    <div  className="entry-content"><p>{result.entryContent}</p></div>
                    <a href="https://wa.me/971561897911?text=Atlantis%20Tour">Whatsapp <i  className="fa fa-whatsapp fa-3x"></i></a>
                </div>
            </div>
            )
        
        });


        return (
            <div>
                <div  className="outer-container">
                    <ContactUsTags />
                    <HeaderAll titlePage="City Tour" />

                    <div  className="container single-page cityTourPage">
                    <div  className="row">

                   
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