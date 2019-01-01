import React from 'react';
import {Helmet} from 'react-helmet';


class HotelInfoTags extends React.Component{
    render(){
        const DescInfo={
            titleInfo:"Hotel Info",
            desc:"desc",
            canonical:"http://skyhormoz.com/visa/Hotel-info"


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
        );
    }
}
export default HotelInfoTags;