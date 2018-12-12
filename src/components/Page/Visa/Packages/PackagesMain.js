import React, { Component } from 'react';
import HeaderAll from '../../../Header/HeaderAll';
import PackagesTags from './PackagesTags';
import RecipeReviewCard from './RecipeReviewCard';
import FooterAll from '../../../Footer/FooterAll';




class PackagesMain extends Component {


    render() {


        const DisplayContent = [
            {
                DisplayCardTitle: 'MANILA TO DUBAI PACKAGE ',
                imgSrc: '/images/manila-packges.jpg',
                DisplaycontentTypography: "Bring your family to witness the Essential Beauty of Dubai, you may sponsor your spouse, Kid/s, Family and Relatives (up to 2ND Degree).",
                displayTypography: 'Scanned Passport copy (valid minimum for 6 months) , Passport Size photographs with white background,Scanned PSA Birth certificate copy'


            },
            {
                DisplayCardTitle: 'ARMENIA VISA PACKAGE ',
                imgSrc: '/images/Armenia_IMAGE.jpg',
                DisplaycontentTypography: 'Extend your vacation and visit Armenia while waiting for your new UAE Visa approval. offers Armenia Exit package, which the passenger will enjoy and stay for 5 days and 4 nights to explore the country',
                displayTypography: 'Scanned Passport copy (valid minimum for 6 months), 	Old visit visa copy , Passport Size photographs with white background '

            },
            {
                DisplayCardTitle: 'GEORGIAN VISA PACKAGE',
                imgSrc: '/images/georgian.jpg',
                DisplaycontentTypography: 'Extend your vacation and visit Georgia while waiting for your new UAE Visa approval.Sky Hormoz Travels offers Georgia Exit package, which the passenger will enjoy and stay explore the country.',
                displayTypography: 'Scanned Passport copy (valid minimum for 6 months), 	Old visit visa copy , Passport Size photographs with white background '

            },
            {
                DisplayCardTitle: 'OMAN VISA PACKAGE ',
                imgSrc: '/images/OMAN_package.jpg',
                DisplaycontentTypography: 'You may enjoy and visit other country in cheapest way, Sky Hormoz Travels Offers Oman Exit by Bus; you can stay in OMAN while waiting for your new UAE Visa approval.',
                displayTypography: 'Scanned Passport copy (valid minimum for 6 months), 	Old visit visa copy , Passport Size photographs with white background '


            },
            {
                DisplayCardTitle: 'AIRPORT TO AIRPORT  VISA PACKAGE ',
                imgSrc: '/images/georgian.jpg',
                DisplaycontentTypography: 'If you want hassle free and Easiest way of visa change process, Sky Hormoz Travels offers  Fastest and Hassle Free Airport to Airport Exit!',
                displayTypography: 'Scanned Passport copy (valid minimum for 6 months), 	Old visit visa copy , Passport Size photographs with white background '

            }

            
        ]

        const cardcomponet = DisplayContent.map((result) => {

            return (
                <div class="col-sm-6 col-md-4 mb-4">
                    <RecipeReviewCard DisplayContent={result} />
                </div>
            )

        })

        return (
   


                <div>
                <div class="outer-container">
                    <PackagesTags />
                    <HeaderAll titlePage="Packages" />

                    <section class="features">
                        <div class="row">
                            {cardcomponet}
                        </div>

                    </section>
                </div>

                <FooterAll />
            </div >


        );



    }
}

export default PackagesMain;
