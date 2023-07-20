import React from "react";
import '../../css/Gallery/Gallery.css'
import cloud from '../../assets/one.png'
import theme from "../../config/theme";
import { GalleryImage } from "./GalleryImage";

function Gallery() {
    return (
        <div style={{ backgroundColor: theme.colors.background }}>
            <div className="home-gallery" style={{ backgroundColor: theme.colors.background1 }}>
                <div>
                    <h5 style={{ color: theme.colors.textColor }}>Home - Gallery</h5>
                </div>
                <div>
                    <h1 className="fifth">
                        <span className="seven">Our</span>  <span className="six">Gallery</span>
                    </h1>
                </div>
            </div>
            <div className="img">
                <GalleryImage />
            </div>
        </div>
    )
}
export default Gallery