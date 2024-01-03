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
                        <p><AiTwotoneHome className="iconcol" />Kachnar Toli, Behind Anant Automobile,</p>
                        <p> Hatia, Ranchi,Jharkhand – 834003</p>
                    </div>
                </div>
                <div className="six">
                    <p className="addfon">Connet With us</p>
                    <div className="detail">
                        <p><GrMail className="iconcol" /> swsranchi@gmail.com</p>
                    </div>
                    <div className="detail">
                        <p><AiFillPhone className="iconcol"/> +919262786678</p>
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
