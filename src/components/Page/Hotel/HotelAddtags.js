import React from 'react';
import {Helmet} from 'react-helmet';


class Formtags extends React.Component{
    render(){
        const DescInfo={
            titleInfo:"Find Hotel",
            desc:"desc",
            canonical:"http://skyhormoz.com/visa/Find-Hotel"


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
export default Formtags;