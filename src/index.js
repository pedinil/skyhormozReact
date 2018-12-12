import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PackagesMain from './components/Page/Visa/Packages/PackagesMain';
import VisaMain from './components/Page/Visa/VisaMain';
import ContactUsMain from './components/Page/Contactus/ContactUsMain';
import CityTourMain from './components/Page/CityTour/CityTourMain';
import AboutUsMain from './components/Page/AboutUs/AboutUsMain';
import HomeMain from './components/Page/Home/HomeMain';
import Agent from './components/Page/Agent/AgentMain';
import { BrowserRouter as Router, Route } from 'react-router-dom';




ReactDOM.render(
  <Router>
  <div>
    
    <Route exact path="/" component={HomeMain} />
    <Route path="/visa/packages" component={PackagesMain} />
    <Route exact path="/visa" component={VisaMain} />
    <Route path="/contactus*" component={ContactUsMain} />
    <Route path="/citytour*" component={CityTourMain} />
    <Route path="/aboutus*" component={AboutUsMain} />
    <Route path="/agent*" component={Agent} />
    <Route path="*" component="" />
  </div>
</Router>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
