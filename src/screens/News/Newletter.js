import React from "react";
import '../css/Newsletter/Newsletter.css'
import Newsimage from '../Assets/Newsimage.jpg';
import Button from 'react-bootstrap/Button';
import Footer from "../Footer";
function Newsletter() {
    return (
        <div>
            <div className="main">
                <div className="first">
                    <h5 className="second">Home - Newsroom-Newsletter</h5>
                </div>
                <div className="fourth">
                    <h1 className="fifth">
                        <span className="seven">ALL</span>  <span className="six">Newsletter</span>
                    </h1>
                </div>
            </div>

            <div className="parent-news">

                <div className="child-news">
                    <h4>Date : <span className="date-num">20-01-2023</span></h4>
                    <h1>NEWSLETTER DECEMBER EDITION 2022</h1>
                    <Button className="btn" variant="primary" type="submit">
                        Read
                    </Button>
                    <img className="news-image" src={Newsimage} alt="My Image" />
                </div>
            </div>
            

        </div>

    )
}
export default Newsletter