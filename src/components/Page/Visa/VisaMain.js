import React, { Component } from 'react';
import HeaderAll from '../../Header/HeaderAll';
import VisaTags from './VisaTags';
import FooterAll from '../../Footer/FooterAll';
import VisaPrice from './VisaPrice';
import { VisaPriceData } from './VisaPriceData';



class App extends Component {

   

    render() {

        const VisaList = VisaPriceData.map((result) => {

            return (
                <div>
                    <VisaPrice DisplayContent={result} />
                </div>
            )
    
        })

        return (

            <div>
                <div className="outer-container">
                    <VisaTags />
                    <HeaderAll titlePage="Visa" />



                    <div className="container single-page contact-page">
                        <div className="row">
                            <div className="col-12 col-lg-9">
                                <div className="content-wrap">
                                    <header className="entry-header">
                                        <h2 className="entry-title">Dubai Visa</h2>

                                        <div className="tags-links">
                                            <a href="#">#Sky Hormoz</a> <a href="#">#Dubai Visa</a>

                                        </div>

                                    </header>


                                    <div className="entry-content">
                                        <p>
                                            <div>
                                                <ul>
                                                    <li>Dubai Visa&nbsp;</li>
                                                    <li>Sharjah Visa&nbsp;</li>
                                                    <li>Abu Dhabi Visa&nbsp;</li>
                                                </ul>
                                            </div>
                                            <div>&nbsp;</div>
                                            <div><strong>14 Days Visa, 30 Days, and 90 days Visa are available.&nbsp;</strong></div>
                                            <div><strong>&nbsp;</strong></div>
                                            <div><strong>Requirements needed for UAE Visit and Tourist Visa application.&nbsp;</strong></div>
                                            <div>
                                                <ul>
                                                    <li>Clear Passport Copy&nbsp;</li>
                                                    <li>Passport Size Photo&nbsp;</li>
                                                </ul>
                                                <div><strong>Important Note:&nbsp;</strong></div>
                                            </div>
                                            <div>- Applying for UAE Visa takes 3 days or more working days and can't be applied on national holidays, Fridays even Saturdays.&nbsp;</div>
                                            <div>&nbsp;</div>
                                            <div>- Regardless of your visa is approved or not,&nbsp; application fee will not be refunded as this is non refundable fee, as we have directly submitted to Immigration department.&nbsp;</div>
                                            <div>&nbsp;</div>
                                            <div>- If any case visa application is rejected by the immigration officials, we will provide proof of rejection from the Immigration Department.&nbsp;</div>
                                        </p>
                                    </div>

                                    <header className="entry-header">
                                        <h2 className="entry-title">Dubai Visa Prices</h2>


                                    </header>


                                    <div class="card-deck mb-6 text-center">
                                    {VisaList}
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

export default App;
