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

function App() {
  const auth = localStorage.getItem('token');
  console.log(auth);

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Route path="/" exact><Home /></Route>
        <Route path="/Origin" exact><Origin /></Route>
        <Route path="/contactus" exact><ContactUs /></Route>
        <Route path="/gallery" exact><Gallery /></Route>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App;