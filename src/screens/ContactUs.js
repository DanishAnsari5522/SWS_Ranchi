import React from "react";
import { GrMail } from 'react-icons/gr';
import { AiFillPhone } from 'react-icons/ai'
import { AiTwotoneHome } from 'react-icons/ai'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/Contactus/Contactus.css'
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Footer from "./Footer";

function ContactUs() {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };
  const center = {
    lat: 23.344101,
    lng: 85.309563,
  }



  return (
    <div >
      <div className="home-contact" style={{padding:'50px 0px'}}>
        <div>
          <h5 >Home - Contact US</h5>
        </div>
        <div className="fourth">
          <h1 className="fifth">
            <span >Contact</span>  <span className="six">Us</span>
          </h1>
        </div>

      </div>

      <div className="eight">
        <h4 className="nine">REACH <span className="six">US</span> </h4>
      </div>
      <div className="ten">
        <div className="six">
          <p className="addfon">ADDRESS :</p>
          <div className="detail">
            <p><span className="head-office">Head Office : </span>Kachnar Toli, Behind Anant Automobile,</p>
            <p> Hatia, Ranchi,Jharkhand – 834003</p>
          </div>
        </div>

      </div>
      <div className="ten" style={{marginTop:'-20px'}}>
        <div className="detail">
          <p><span className="head-office">Branch Office : </span>Behind R K Public School, Sonpurwa,</p>
          <p>Garhwa, Jharkhand – 822114</p>
        </div>
      </div>

      <div className="ten">
        <div className="six">
          <p className="addfon">EMAIL</p>
          <div className="detail">
            <p><GrMail className="iconcol" />   swsranchi@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="ten">
        <div className="six">
          <p className="addfon">PHONE NO</p>
          <div className="detail">
            <p><AiFillPhone className="iconcol" />   +919262786678</p>
          </div>
        </div>
      </div>

      {/* <div className="eight">
        <h4 className="nine">WRITE <span className="six">Us</span> </h4>

      </div> */}
      <div className="formspec col-12" >
        {/* <div className="inder1">

          <Form className="form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control className="mes" type="Name" placeholder="First Name" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control className="mes" type="Email" placeholder="Email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control className="mes" type="number" placeholder="Phone No." />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control className="mess" as="textarea" rows={6} placeholder="Message" />
            </Form.Group>
            <Button className="btn" variant="primary" type="submit">
              Submit
            </Button>
          </Form>

        </div> */}
        <div className="map">
          <LoadScript googleMapsApiKey="AIzaSyBDEJiS7M2Uh0U2srDrVl1gyQOZwip1b5U">
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
            </GoogleMap>
          </LoadScript>
        </div>
      </div>

    </div>
  )
}
export default ContactUs
