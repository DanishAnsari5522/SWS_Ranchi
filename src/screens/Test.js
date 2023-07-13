import React, { useState } from 'react'
// import './Project.css'
import '../css/Gallery/Test.css'
import '../css/Gallery/Gallery.css'
import Footer from './Footer';
// import cloud from '../Assets/cloud.png';
import cloud from '../Assets/cloud.png'
import { GalleryImage } from './GalleryImage';


function Project() {
    const [itemno, setItemno] = useState(1);
    const all = () => {
        setItemno(1);
    }

    const old = () => {
        setItemno(2);
    }

    const archive = () => {
        setItemno(3);
    }

    const media = () => {
        setItemno(4);
    }

    console.log(itemno);

    if (itemno == 1) {
        return (

            <div>
                <div className="main">
                    <div className="first">
                        <h5 className="second">Home - Gallery</h5>
                    </div>
                    <div className="fourth">
                        <h1 className="fifth">
                            <span className="seven">Our</span>  <span className="six">Gallery</span>
                        </h1>
                    </div>

                </div>
                <div>
                    <div className="container pb-5">
                        <div className='row'>
                            <div className='navigationbtn'>
                                <button onClick={all} activeClassName="navbtn">All</button>
                                <button onClick={old} activeClassName="navbtn">OLD</button>
                                <button onClick={archive} activeClassName="navbtn">Archive</button>
                                <button onClick={media} activeClassName="navbtn">MEDIA</button>
                            </div>

                            <GalleryImage />
                        </div>
                    </div >
                    <div className=" img">
                        <img src={cloud} alt="My Image" />
                        <img src={cloud} alt="My Image" />
                        <img src={cloud} alt="My Image" />
                        <img src={cloud} alt="My Image" />
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
    else if (itemno == 2) {
        return (
            <div>
            <div className="main">
                <div className="first">
                    <h5 className="second">Home - Gallery</h5>
                </div>
                <div className="fourth">
                    <h1 className="fifth">
                        <span className="seven">Our</span>  <span className="six">Gallery</span>
                    </h1>
                </div>

            </div>
            <div>
                <div className="container pb-5">
                    <div className='row'>
                        <div className='navigationbtn'>
                            <button onClick={all} activeClassName="navbtn">All</button>
                            <button onClick={old} activeClassName="navbtn">OLD</button>
                            <button onClick={archive} activeClassName="navbtn">Archive</button>
                            <button onClick={media} activeClassName="navbtn">MEDIA</button>
                        </div>

                    old
                    </div>
                </div >
                <div className=" img">
                    <img src={cloud} alt="My Image" />
                    <img src={cloud} alt="My Image" />
                    <img src={cloud} alt="My Image" />
                    <img src={cloud} alt="My Image" />
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
        )
    } else if (itemno == 3) {
        return (
            <div>
            <div className="main">
                <div className="first">
                    <h5 className="second">Home - Gallery</h5>
                </div>
                <div className="fourth">
                    <h1 className="fifth">
                        <span className="seven">Our</span>  <span className="six">Gallery</span>
                    </h1>
                </div>

            </div>
            <div>
                <div className="container pb-5">
                    <div className='row'>
                        <div className='navigationbtn'>
                            <button onClick={all} activeClassName="navbtn">All</button>
                            <button onClick={old} activeClassName="navbtn">OLD</button>
                            <button onClick={archive} activeClassName="navbtn">Archive</button>
                            <button onClick={media} activeClassName="navbtn">MEDIA</button>
                        </div>

                        archive
                    </div>
                </div >
                <div className=" img">
                    <img src={cloud} alt="My Image" />
                    <img src={cloud} alt="My Image" />
                    <img src={cloud} alt="My Image" />
                    <img src={cloud} alt="My Image" />
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
        )
    } else if (itemno == 4) {
        return (
            <div>
            <div className="main">
                <div className="first">
                    <h5 className="second">Home - Gallery</h5>
                </div>
                <div className="fourth">
                    <h1 className="fifth">
                        <span className="seven">Our</span>  <span className="six">Gallery</span>
                    </h1>
                </div>

            </div>
            <div>
                <div className="container pb-5">
                    <div className='row'>
                        <div className='navigationbtn'>
                            <button onClick={all} activeClassName="navbtn">All</button>
                            <button onClick={old} activeClassName="navbtn">OLD</button>
                            <button onClick={archive} activeClassName="navbtn">Archive</button>
                            <button onClick={media} activeClassName="navbtn">MEDIA</button>
                        </div>
                        media
                    </div>
                </div >
                <div className=" img">
                    <img src={cloud} alt="My Image" />
                    <img src={cloud} alt="My Image" />
                    <img src={cloud} alt="My Image" />
                    <img src={cloud} alt="My Image" />
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
        )
    }
}

export default Project;