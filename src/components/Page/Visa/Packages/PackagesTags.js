import React from "react";
import { Helmet } from "react-helmet";





class PackagesTags extends React.Component {


    render() {



        const DescInfo = {
            titleInfo: "UAE Visa Packages",
            desc: "UAE Visa Packages manila to dubai Visa package , armenia Visa package , georgian Visa package,oman Visa package ,airport to airport Visa package ",
            canonical: "http://skyhormoz.com/visa/packages"

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

export default PackagesTags;