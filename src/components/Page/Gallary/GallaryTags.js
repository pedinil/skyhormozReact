import React from "react";
import { Helmet } from "react-helmet";






class ContactUsTags extends React.Component {


    render() {



        const DescInfo = {
            titleInfo: "Gallery",
            desc: "desc",
            canonical: "http://skyhormoz.com/gallary"

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

export default ContactUsTags;