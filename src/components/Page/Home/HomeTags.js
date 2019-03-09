import React from "react";
import { Helmet } from "react-helmet";





class HomeTags extends React.Component {


    render() {



        const DescInfo = {
            titleInfo: 'Sky Hormoz Travel',
            desc: ' Travel Management Package , 30 Days  Dubai VISA , 90 Days Dubai Visa , Airport to Airport Visa packages , Dubai Visa Prices , Sharjah Visa  ,MANILA TO DUBAI PACKAGE ,ARMENIA To Dubai VISA PACKAGE ,OMAN To Dubai VISA PACKAGE',
            canonical: 'https://skyhormoz.com'

        }

        return (
            <div className="application">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{DescInfo.titleInfo}</title>
                    <meta name="description" content={DescInfo.desc} />
                    <link rel="canonical" href={DescInfo.canonical} />
                </Helmet>
            </div>
        );
    }
};

export default HomeTags;