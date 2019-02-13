import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
//import PackagesMain from '../components/Page/Visa/Packages/PackagesMain';
import VisaMain from '../components/Page/Visa/VisaMain';
import ContactUsMain from '../components/Page/Contactus/ContactUsMain';
//import CityTourMain from '../components/Page/CityTour/CityTourMain';
import AboutUsMain from '../components/Page/AboutUs/AboutUsMain';
import HomeMain from '../components/Page/Home/HomeMain';
import Agent from '../components/Page/Agent/AgentMain';
//import Gallery from '../components/Page/Gallary/Gallary';
//import Form from '../components/Page/Form/Form';
//import HotelAddForm from '../components/Page/Hotel/HotelAddForm';
//import HotelInfoMain from '../components/Page/Hotel/HotelInfoMain';
//import UAEVisitMain from '../components/Page/Visit/UAEVisitMain';

const PackagesMain = React.lazy(() => import('../components/Page/Visa/Packages/PackagesMain'));
const CityTourMain = React.lazy(() => import('../components/Page/CityTour/CityTourMain'));
const Gallery = React.lazy(() => import('../components/Page/Gallary/Gallary'));
const Form = React.lazy(() => import('../components/Page/Form/Form'));
const HotelAddForm = React.lazy(() => import('../components/Page/Hotel/HotelAddForm'));
const HotelInfoMain = React.lazy(() => import('../components/Page/Hotel/HotelInfoMain'));
const UAEVisitMain = React.lazy(() => import('../components/Page/Visit/UAEVisitMain'));




class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          
            <Route exact path="/" component={HomeMain} />
            <Route exact path="/visa" component={VisaMain} />
            <Route exact path="/visa/packages" component={PackagesMain} />
            <Route path="/contactus*" component={ContactUsMain} />
            <Route path="/citytour*" component={CityTourMain} />
            <Route path="/aboutus*" component={AboutUsMain} />
            <Route path="/agent*" component={Agent} />
            <Route path="/gallery*" component={Gallery} />
            <Route path='/tourist-attractions-uae/dubai' component={UAEVisitMain} />
            <Route path='/Form' component={Form} />
            <Route path='/Form2' component={HotelAddForm} />
            <Route path='/Hotel' component={HotelInfoMain} />

            <Route exact path="/visa.html" component={VisaMain} >
              <Redirect from='/visa.html' to='/visa' />
            </Route>

         
        </Suspense>

      </Router>

    );
  }
}

export default App;
