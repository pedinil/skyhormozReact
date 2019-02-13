import React from "react";
import { Helmet } from "react-helmet";





class VisaTags extends React.Component {


    render() {



        const DescInfo = {
            titleInfo: "UAE Tourist Attractions",
            desc: 'The United Arab Emirates is an Arabian Peninsula nation settled mainly along the Persian (Arabian) Gulf. The country is a federation of 7 emirates. Abu Dhabi, the island capital, is home to Sheikh Zayed Grand Mosque, with crystal chandeliers and room for 40,000 worshipers. Dubai is the site of ultramodern Burj Khalifa tower, enormous shopping centers and extravagant entertainment attractions. ',
            canonical: "http://skyhormoz.com/tourist-attractions-uae/dubai"

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