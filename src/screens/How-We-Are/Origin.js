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
                <h1 className="fontQuotes">SECRETARY <span className="six">MESSAGE</span></h1>
            </div>
            <div className="parent">
                <div className="child1">
                    <p style={{ color: 'black', fontSize: 16, marginTop: 5 }}>
                        1. With deep rooted tradition, constant participation, enduring commitment and
                        perseverance SUHANA WELFARE SOCIETY completed the three year
                        of its existence. During the year the organization expanded its
                        ambit of operation and took upon new and challenging issues of
                        literacy and agriculture development apart from the on-going
                        interventions to expand its reach to a wider with its assiduous
                        effort to make a change adhering to the Vision, Mission and
                        Objectives of the organizations. Graduating on the values of
                        democratic functioning, participation and commitment towards the vision the
                        organization has prepared itself to take greater roles and responsibilities in future
                        through horizontal and vertical expansion of the organization and taking issues
                        relevant to the contemporary period. It is our great privilege to present a brief report
                        of activities that SUHANA WELFARE SOCIETY carried out during the year with primary
                        objective of improvement of quality of life of the last man standing in the queue.
                    </p>
                    <p style={{ color: 'black', fontSize: 16, marginTop: 5 }}>
                        2. Details of various projects implemented during the year are incorporated in
                        succeeding pages and we are sure that the readers will find them useful in assessing
                        the work done by SUHANA WELFARE SOCIETY
                    </p>
                    <p style={{ color: 'black', fontSize: 16, marginTop: 5 }}>
                        3. The achievements would not have materialized without the dedicated efforts of
                        members, staffs, volunteers and activists associated with the SUHANA WELFARE
                        SOCIETY. On behalf of the society I extend to them our deepest sense of gratitude for
                        their commitment and hard work. At the same time I believe that we have only
                        began exploring the fringes of the needs of the people in large and that a greater
                        degree of commitment, dedication and perseverance will be required in the coming
                        years to realize our vision and fulfil the needs of the people. I am sure that our
                        members, staffs, volunteers and activists would be in action even before a word is
                        spelt out.
                    </p>
                    <p style={{ color: 'black', fontSize: 16, marginTop: 5 }}>
                        4. We also extend our deepest sense of gratitude to our donors, partners, supporters
                        and promoters for the confidence they entrusted upon the organization.
                    </p>
                </div>
                <div className="child2">

                </div>
            </div>
            <div className="visionmission" >
                <div className="vision" style={{ backgroundColor: theme.colors.background1 }}>
                    <p className="Visioncla">Vision</p>
                    <p className="Visionpara">
                        SUHANA WELFARE SOCIETY (SWS) visualized a socially just, educated and egalitarian
                        society free from all forms of exploitation, deprivation and neglected, where proper
                        and judicious utilization of human, nature and institutional resources are ensured.
                    </p>
                </div>
                <div className="vision" style={{ backgroundColor: theme.colors.background1 }}>
                    <h4 className="Visioncla">Mision</h4>
                    <p className="Visionpara">
                        Entrustment of an equitable society, free from all forms of deprivation, neglect,
                        isolation and exploitation in order to ensure equitable development of all sections of
                        the society for the balanced development of Indian ensured.
                    </p>
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