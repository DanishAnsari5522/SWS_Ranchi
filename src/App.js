import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, } from 'react-router-dom';
import Navigation from '../src/navigation/Navigation'
import Home from './screens/Home/Home';
import Footer from './screens/Footer';
import Origin from './screens/How-We-Are/Origin';
// import ContactUs from
import ContactUs from './screens/ContactUs';
import Gallery from './screens/Gallery/Gallery';
import Newsletter from './screens/News/Newletter';
import Activitys from './screens/Activitys/Index';
import ActivityInDetail from './screens/Activitys/ActivityInDetail';

function App() {
  const auth = localStorage.getItem('token');
  console.log(auth);

  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Route path="/" exact><Home /></Route>
        <Route path="/Origin" exact><Origin /></Route>
        <Route path="/contactus" exact><ContactUs /></Route>
        <Route path="/gallery" exact><Gallery /></Route>
        <Route path="/news" exact><Newsletter /></Route>
        <Route path="/Activitys" exact><Activitys /></Route>
        <Route path="/ActivityInDetail" exact><ActivityInDetail /></Route>
        <Route path="/SWS_Ranchi" exact><Home /></Route>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App;