import React, { Component } from 'react';
import HeaderAll from '../../Header/HeaderAll';
import UAEVisitTags from './UAEVisitTags';
import FooterAll from '../../Footer/FooterAll';
import UAEVisitCenter from './UAEVisitCenter';
import UAEVisitRight from './UAEVisitRight';
import { UAEVisitDataCenter } from './UAEVisitDataCenter';
import { UAEVisitDataRight } from './UAEVisitDataRight';




class UAEVisitMain extends Component {

    render() {


        const UAEVisitList = UAEVisitDataCenter.map((result) => {
            return (
                <UAEVisitCenter result={result} />
            )

        });

        const UAEVisitRightList = UAEVisitDataRight.map((result) => {
            return (
                <UAEVisitRight result={result} />
            )

        });

        return (

            <div>
                <div className="outer-container">
                    <UAEVisitTags />
                    <HeaderAll titlePage="Tourist Attractions" />

                    <div className="container single-page">
                        <div className="row">
                            
                            <div className="col-12 col-lg-12">
                            <h1>UAE Tourist Attractions In Dubai</h1>
                                {UAEVisitList}

                            </div>
                        {/*
                            <div className="col-12 col-lg-4">

                                {UAEVisitRightList}

                            </div>
                        */}
                        </div>
                    </div>
                </div>




                <FooterAll />

            </div>


        );
    }
}

export default UAEVisitMain;
