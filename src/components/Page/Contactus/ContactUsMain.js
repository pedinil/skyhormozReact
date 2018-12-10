import React, { Component } from 'react';
import HeaderAll from '../../Header/HeaderAll';
import ContactUsTags from './ContactUsTags';
import FooterAll from '../../Footer/FooterAll';




 class ContactUsMain extends Component {
    render() {
        return (

            <div>
                <div  className="outer-container">
                    <ContactUsTags />
                    <HeaderAll titlePage="ContactUs" />

                    <div  className="container single-page contact-page">
                        <div  className="row">
                            <div  className="col-12 col-lg-9">
                                <div  className="content-wrap">
                                    <header  className="entry-header">
                                        <h2  className="entry-title">Contact Us</h2>

                                        <div  className="tags-links">
                                            <a href="#">#Sky Hormoz</a> <a href="#">#Contat us</a>

                                        </div>

                                    </header>


                                    <div  className="entry-content">
                                        <p>You can contact us Office 501, Royal Plaza Building,
                                            beside Avenbue Hotel, Al rigga Road, Al Rigga, Deira, Dubai, UAE
							</p>
                                    </div>


                                    <div  className="contact-page-social">
                                        <ul  className="flex align-items-center">
                                            <li><a href="#"><i  className="fa fa-pinterest"></i></a></li>
                                            <li><a href="https://www.facebook.com/skyhormoztravelsllc"><i  className="fa fa-facebook"></i></a></li>
                                            <li><a href="https://twitter.com/skyhormoz"><i  className="fa fa-twitter"></i></a></li>
                                            <li><a href="https://www.instagram.com/skyhormoztravelsllc/"><i  className="fa fa-instagram"></i></a></li>
                                            <li><a href="https://www.linkedin.com/in/sky-hormoz-7b83b216b"><i  className="fa fa-linkedin"></i></a></li>
                                           
                                        </ul>
                                    </div>


                                    <br />


                                <div  className="mapouter"><div  className="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=skyhormoz&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.pureblack.de"></a></div></div>

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
            
            export default ContactUsMain;
