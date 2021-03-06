import React, { Component } from "react";
import {Helmet} from 'react-helmet';


class HolidayTourTags extends Component{
    render(){
        const DescInfo={
            titleInfo:"Holiday Tour Packages",
            desc:"desc",
            canonical:"http://skyhormoz.com/HolidayTourPackageMain"
        }
        return(
            <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{DescInfo.titleInfo}</title>
                <meta name="description" content={DescInfo.desc} />
                <link rel="canonical" href={DescInfo.canonical} />

            </Helmet>
            </div>
        )
    }
}
export default HolidayTourTags;
