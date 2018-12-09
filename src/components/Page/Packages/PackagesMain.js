import React, { Component } from 'react';
import HeaderAll from '../../Header/HeaderAll';
import PackagesTags from './PackagesTags';
import RecipeReviewCard from './RecipeReviewCard';


const DisplayContent = {
    titleContent: 'test',
    content: 'fst'


}

class App extends Component {


    render() {


        const DisplayContent = [
            {
                DisplayCardTitle: 'test',
                DisplayImg: 'testdsfsd',
                DisplaycontentTypography: " This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

            },
            {
                DisplayCardTitle: 'test',
                DisplayImg: 'testdsfsd',
                DisplaycontentTypography: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'

            }
        ]

        const cardcomponet = DisplayContent.map((result) => {

            return (
                <div class="col-sm-6 col-md-4 mb-4">
                    <RecipeReviewCard DisplayContent={result} />
                </div>
            )

        })

        return (
   


                <div>
                <div class="outer-container">
                    <PackagesTags />
                    <HeaderAll titlePage="Packages" />

                    <section class="features">
                        <div class="row">
                            {cardcomponet}
                        </div>

                    </section>
                </div>
            </div >


        );



    }
}

export default App;
