import React from "react";
import '../../css/Newsletter/Newsletter.css';
import one from '../../assets/homecomp1.jpeg'
import Button from 'react-bootstrap/Button';
import theme from "../../config/theme";
function Newsletter() {
    return (
        <div>
            <div className="Newsletter" style={{ backgroundColor: theme.colors.background1 }}>
                <div>
                    <h5 style={{ color: theme.colors.textColor }}>Home - Newsroom-Newsletter</h5>
                </div>
                <div>
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
                </div>
            </div>


        </div>

    )
}
export default Newsletter