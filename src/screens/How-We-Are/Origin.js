import React from "react";
import '../../css/Origin/Origin.css';
import theme from "../../config/theme";
import images from '../../assets/two1.png'
function Origin() {
    return (
        <div style={{ backgroundColor: theme.colors.background }}>
            <div className="home-origin" style={{ backgroundColor: theme.colors.background1 }}>
                <div >
                    <h5 style={{ color: theme.colors.textColor }}>Home - Origin</h5>
                </div>
                <div>
                    <h1 className="fifth">
                        <span className="seven">Who-We-Are-</span>  <span className="six"> Origin</span>
                    </h1>
                </div>
            </div>
            <div className="quotes">
                <h1 className="fontQuotes">MAKING PEOPLE <span className="six"> SELF RELIANT </span></h1>
            </div>
            <div className="parent">
                <div className="child1">
                    <p style={{ color: 'black', fontSize: 17 }}>
                        Citizens Foundation is a non–profit organization which has evolved;from;its humble beginnings in Jharkhand in 1997 and
                        has so far registered its presence with pioneering work in the development sector;in&;over 10;states;of India as a national
                        level organization. As a signatory of the Sustainable Development Goals (SDGs), CF has worked towards its vision of ‘Making
                        People Self Reliant’ over the past two decades.Over the last 20 years, we have evolved the expertise in health, Sanitation,
                        Natural Resource Management, Livelihood Promotion, and Protection. We have delivered advocacy and techno–managerial support
                        to the rural communities and are currently executing projects across the states of Jharkhand, Bihar, Meghalaya and Assam.
                        CF has focused its expertise towards strengthening the existing government programs via technical and operational
                        support systems. We ensured that these efforts attain a self–sustaining momentum; enriching the target communities
                        with a sustainable continuum through partnerships with Government of India, several State Governments, UN Agencies,
                        PSUs, Corporate and other national and international level organizations. Committed towards working for the Sustainable
                        Development Goals (SDGs), CF is making continued efforts at making its initiatives and projects sustainable for the community
                        and the world at large.
                    </p>
                </div>
                <div className="child2">

                </div>
            </div>
            <div className="visionmission" >
                <div className="vision" style={{ backgroundColor: theme.colors.background1 }}>
                    <p className="Visioncla">Vision</p>
                    <p className="Visionpara">Making People Self Relevent</p>
                    <img src={images} />
                </div>
                <div className="vision" style={{ backgroundColor: theme.colors.background1 }}>
                    <h4 className="Visioncla">Mision</h4>
                    <p className="Visionpara">Promoting self Relliance through Sustainable Action</p>
                    <img src={images} />
                </div>
            </div>
            <div className="quotes">
                <h1 className="fontQuotes">CORE<span className="six"> VALUES </span></h1>
            </div>
            <div className="ten">
                <div className="service">
                    <div className="service-icon">
                        <span className="tr">TRUST</span>
                    </div>
                </div>

                <div className="service">
                    <div className="service-icon">
                        <span className="ex">EXCELENCE</span>
                    </div>
                </div>

                <div className="service">
                    <div className="service-icon">
                        <span className="in">INTEGRITY</span>
                    </div>
                </div>
            </div>
            <div className="ten">
                <div className="service">
                    <div className="service-icon">
                        <span className="eq">EQUITY</span>
                    </div>
                </div>


                <div className="service">
                    <div className="service-icon">
                        <span className="em">EMPATHY</span>
                    </div>
                </div>


                <div className="service">
                    <div className="service-icon">
                        <span className="st">SUSTAINABILITY</span>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}
export default Origin