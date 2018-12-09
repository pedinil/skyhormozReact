import React, { Component } from 'react';
import HeaderAll from '../../Header/HeaderAll';
import VisaTags from './VisaTags';
import FooterAll from '../../Footer/FooterAll';



class App extends Component {
    render() {
        return (

            <div>
                <div class="outer-container">
                <VisaTags />
                <HeaderAll titlePage="Visa" />
                </div>

                <FooterAll />
            </div>


        );
    }
}

export default App;
