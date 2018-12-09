import React, { Component } from 'react';
import HeaderAll from '../../Header/HeaderAll';
import VisaTags from './VisaTags';




class App extends Component {
    render() {
        return (

            <div>
                <div class="outer-container">
                <VisaTags />
                <HeaderAll titlePage="Visa" />
                </div>
            </div>


        );
    }
}

export default App;
