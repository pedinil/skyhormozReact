import React from "react";
import { Helmet } from "react-helmet";





class HomeTags extends React.Component {


    render() {



        const DescInfo = {
            titleInfo: 'Sky Hormoz Travel',
            desc: 'To create and provide a total Travel Management Package in terms of providing comprehensive and professionally effective service at minimum cost to the customer, using and utilizing the best available sources and technology, Also to nature a work culture and environment internally and externally that promotes total commitment and growth , thus becoming the most popular and reliable Travel Agency in the Region setting standards in the industry for professionalism and reliability to the customer.',
            canonical: 'http://skyhormoz.com'

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