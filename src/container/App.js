import React, { Component,Suspense, lazy  } from 'react';
import PackagesMain from '../components/Page/Visa/Packages/PackagesMain';
import VisaMain from '../components/Page/Visa/VisaMain';
import ContactUsMain from '../components/Page/Contactus/ContactUsMain';
import CityTourMain from '../components/Page/CityTour/CityTourMain';
import AboutUsMain from '../components/Page/AboutUs/AboutUsMain';
import HomeMain from '../components/Page/Home/HomeMain';
import Agent from '../components/Page/Agent/AgentMain';
import Gallery from '../components/Page/Gallary/Gallary';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Form from '../components/Page/Form/Form';
import HotelAddForm from '../components/Page/Hotel/HotelAddForm';





class App extends Component {
  render() {
    return (
      <Router>

        <div>
          <Route exact path="/" component={HomeMain} />
          <Route exact path="/visa" component={VisaMain} />
          <Route exact path="/visa/packages" component={PackagesMain} />
          <Route path="/contactus*" component={ContactUsMain} />
          <Route path="/citytour*" component={CityTourMain} />
          <Route path="/aboutus*" component={AboutUsMain} />
          <Route path="/agent*" component={Agent} />
          <Route path="/gallery*" component={Gallery} />
          <Route path='/Form' component={Form} />
          <Route path='/Form2' component={HotelAddForm} />
          <Route exact path="/visa.html" component={VisaMain} >
            <Redirect from='/visa.html' to='/visa' />
          </Route>


        </div>
      </Router>

    );
  }
}

export default App;
