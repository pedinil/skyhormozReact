import React from "react";
import { Helmet } from "react-helmet";





class CityTourTags extends React.Component {


    render() {



        const DescInfo = {
            titleInfo: "CityTour",
            desc: "Combo Daily Tours , Abu Dhabi City Tour + Ferrari world Tour AED 325 ,Abu Dhabi City Tour + Yas Water World Bronze Tour AED 290,IMG World of Adventure Tour + Al Ain Tour 1100,Al Ain City Tour 690 ,Ferrari World + Yas Water World Bronze - 1 day 360,Dolphinarium Dolphin Show + Bird Show Tour 175,Dubai City Tour + Desert Safari + Dhow Cruise creek 240,City Tours Across UAE,Morning Dubai City Tour 70,Evening Dubai city Tour 340,Burj Khalifa AT The Top 124th Floor Tour 190,Hello Sir PedramThis is the Latest prices for the City tour.",
            canonical: "http://skyhormoz.com/citytour"

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

export default CityTourTags;