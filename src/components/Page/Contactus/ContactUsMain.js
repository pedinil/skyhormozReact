import React, { Component } from 'react';
import HeaderAll from '../../Header/HeaderAll';
import ContactUsTags from './ContactUsTags';




class ContactUsMain extends Component {
    render() {
        return (

            <div>
                <div class="outer-container">
                    <ContactUsTags />
                    <HeaderAll titlePage="ContactUs" />

                    <div class="container single-page contact-page">
                        <div class="row">
                            <div class="col-12 col-lg-9">
                                <div class="content-wrap">
                                    <header class="entry-header">
                                        <h2 class="entry-title">Contact Us</h2>

                                        <div class="tags-links">
                                            <a href="#">#Sky Hormoz</a> <a href="#">#Contat us</a>

                                        </div>

                                    </header>


                                    <div class="entry-content">
                                        <p>You can contact us Office 501, Royal Plaza Building,
                                            beside Avenbue Hotel, Al rigga Road, Al Rigga, Deira, Dubai, UAE
							</p>
                                    </div>


                                    <div class="contact-page-social">
                                        <ul class="flex align-items-center">
                                            <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                            <li><a href="https://www.facebook.com/skyhormoztravelsllc"><i class="fa fa-facebook"></i></a></li>
                                            <li><a href="https://twitter.com/skyhormoz"><i class="fa fa-twitter"></i></a></li>
                                            <li><a href="https://www.instagram.com/skyhormoztravelsllc/"><i class="fa fa-instagram"></i></a></li>
                                            <li><a href="https://www.linkedin.com/in/sky-hormoz-7b83b216b"><i class="fa fa-linkedin"></i></a></li>
                                            <li><a href="https://goo.gl/iAtgSE"><i class="fa fa-google"></i></a></li>
                                        </ul>
                                    </div>


                                    <br />


                                <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=skyhormoz&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.pureblack.de"></a></div></div>

                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>


                    );
                }
            }
            
            export default ContactUsMain;
