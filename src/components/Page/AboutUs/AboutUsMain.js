import React, { Component } from 'react';
import HeaderAll from '../../Header/HeaderAll';
import AboutUsTags from './AboutUsTags';
import FooterAll from '../../Footer/FooterAll';




 class AboutUsMain extends Component {
    render() {
        return (

            <div>
                <div  className="outer-container">
                    <AboutUsTags />
                    <HeaderAll titlePage="ContactUs" />



                    <div  className="container single-page about-page">
                        <div  className="row">
                            <div  className="col-12">
                                <div  className="content-wrap">
                                    <header  className="entry-header">


                                        <h2  className="entry-title">SKY HORMOZ TRAVELS LLC</h2>


                                    </header>

                                    <figure  className="featured-image">
                                        <img src="images/aboutus.png" alt="" />
                                    </figure>

                                    <div  className="entry-content">
                                        <p>SKY HORMOZ has been established June 01, 2017 and is currently located at Room 501, 5th Floor Royal Plaza Bldg, Al Rigga Deira Dubai UAE.</p><p>Customer Service with Care, Empathy &amp; Love that’s why the Clients and various Companies all over Philippines, UAE and other parts of the World were various OFW have grown to trust the service and professionalism on SKY HORMOZ TRAVELS LLC.</p><p>To create and provide a total Travel Management Package in terms of providing comprehensive and professionally effective service at minimum cost to the customer, using and utilizing the best available sources and technology, Also to nature a work culture and environment internally and externally that promotes total commitment and growth , thus becoming the most popular and reliable Travel Agency in the Region setting standards in the industry for professionalism and reliability to the customer.</p><p>We have more than Twenty Six Travels Consultants and Fifteen (15) of them were regular, and we assure you that they are excellent and professional in their field.</p>


                                        <p><br /><strong>UAE VISA:</strong><br />- Providing UAE (Dubai, Sharjah &amp; AbuDhabi) &amp; Georgian Visa to all Nationals but 90% of our clients are Filipinos.</p>
                                        <p><br /><strong>TICKETING:</strong><br />- We also provide Tickets with the Best Rate in the Market. VISA CHANGE:<br />- Visa Change is the most Saleable package that we are offering right now since most of our clients are Filipinos&rsquo;.</p>
                                        <p><br /><strong>TOURS &amp; EXCURSIONS:</strong><br />- We are offering various Tours in Dubai, Armenia, Georgia and Philippines to all Nationalities. We are providing Special Tour Packages upon the request and that best suits to our valuable clients.</p>


                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <FooterAll />
            </div>


        );
    }
}

export default AboutUsMain;
