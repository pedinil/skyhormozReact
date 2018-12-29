import React from "react";
import { Helmet } from "react-helmet";





class VisaTags extends React.Component {


    render() {



        const DescInfo = {
            titleInfo: "UAE visa",
            desc: 'skyhormoz can provide 14 Days UAT visa,30 days UAE visa , 90 days UAT visa for different nationality, we need Applying for UAE Visa takes 3 days or more working',
            canonical: "http://skyhormoz.com/visa"

        }

        return (
            <div className="application">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{DescInfo.titleInfo}</title>
                    <meta name="description" content={DescInfo.canonical} />
                    <link rel="canonical" href={DescInfo.canonical} />
                </Helmet>
            </div>
        );
    }
};

export default VisaTags;