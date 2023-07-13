import React from "react"
import '../css/Footer/Footer.css'
import { GrMail } from 'react-icons/gr';
import { AiFillPhone } from 'react-icons/ai'
import { AiTwotoneHome } from 'react-icons/ai'
import theme from "../config/theme";

function Footer() {
    return (
        <>
            <div className="footercomp" style={{backgroundColor:theme.colors.footer}}>
                <div className="six">
                    <p className="addfon">ADDRESS </p>
                    <div className="detail">
                        <p><AiTwotoneHome className="iconcol" />  7,Betar Kendra Nivaranpur Rd,Forest</p>
                        <p>Officer's Colony, Doranda, Ranchi</p>
                        <p>Jharkhand-834002</p>
                    </div>
                </div>
                <div className="six">
                    <p className="addfon">Connet With us</p>
                    <div className="detail">
                        <p><GrMail className="iconcol" />  Mail@Citizensfoundation.Org</p>
                    </div>
                    <div className="detail">
                        <p><AiFillPhone className="iconcol"/> +916512482777</p>
                    </div>
                </div>
                <div className="six">
                    Dont Hesitate to Contact
                </div>

            </div>
        </>
    )
}

export default Footer