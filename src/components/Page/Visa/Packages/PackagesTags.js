import React from "react";
import { Helmet } from "react-helmet";





class PackagesTags extends React.Component {


    render() {



        const DescInfo = {
            titleInfo: "Packages",
            desc: "testdsfsd",
            canonical: "http://skyhormoz.com/visa/dubai/packages"

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