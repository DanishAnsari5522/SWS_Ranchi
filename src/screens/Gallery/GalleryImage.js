import React from "react";
import '../../css/Gallery/Gallery.css'
import cloud from '../../assets/two1.png';
const images = [
    { cloud },
    { cloud },
    { cloud },
    { cloud },
    { cloud }
]

export function GalleryImage() {
    return (
        <div>
            <div className="img">
                {/* {
                    images.map((index, val) => {
                        <img src={cloud} alt="My Image" />
                    })
                } */}
                <img src={cloud} alt="My Image" />
                <img src={cloud} alt="My Image" />
                <img src={cloud} alt="My Image" />
                <img src={cloud} alt="My Image" />
                <img src={cloud} alt="My Image" />
            </div>
        </div>
    )
}


