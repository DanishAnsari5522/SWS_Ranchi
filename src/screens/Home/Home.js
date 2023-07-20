import Carousel from 'react-bootstrap/Carousel';
import '../../css/Home.css';
import one from '../../assets/homecomp5.jpeg';
import two from '../../assets/homecomp1.jpeg';
import three from '../../assets/homecomp2.jpeg';
import four from '../../assets/homecomp3.jpeg'
import theme from '../../config/theme';
import HomeComp from './HomeComp';
import HomeCompCarosal from './HomeCompCarosal';
import { HomeCompCarosalData } from './HomeCompCarosalData';

function Home() {
    return (
        <>
            <Carousel variant="dark">
                <Carousel.Item className='ds1' style={{ backgroundColor: theme.colors.background1 }}>
                    <div className='ds'>
                        <div className="body">
                            <div className="second-div">
                                <img src={one} className="slider-image" />
                            </div>
                            <div className="first-div">
                                <h1 className='unlimited'>Welcome to Helo on her hair</h1><br />
                            </div>

                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='ds1' style={{ backgroundColor: theme.colors.background1 }}>
                    <div className='ds'>
                        <div className="body">
                            <div className="second-div">
                                <img src={two} className="slider-image" />
                            </div>
                            <div className="first-div">
                                <h1 className='unlimited'>Tie right.Life can be a mess ,why let your hair tir be?</h1><br />
                            </div>

                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='ds1' style={{ backgroundColor: theme.colors.background1 }}>
                    <div className='ds'>
                        <div className="body">
                            <div className="second-div">
                                <img src={three} className="slider-image" />
                            </div>
                            <div className="first-div">
                                <h1 className='unlimited'>Helo on her hair new offer announced soon</h1><br />
                            </div>

                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='ds1' style={{ backgroundColor: theme.colors.background1 }}>
                    <div className='ds'>
                        <div className="body">
                            <div className="second-div">
                                <img src={four} className="slider-image" />
                            </div>
                            <div className="first-div">
                                <h1 className='unlimited'>Helo on her hair new offer announced soon</h1><br />
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>

            <div>
                <div className="quotes">
                    <h1 className="fontQuotes">ABOUT <span className="six">ORGANISATION</span></h1>
                </div>
                <div className="parent">
                    <div className="child1">
                        <p style={{ color: 'black', fontSize: 15, marginTop: 1 }}>
                            1. SUHANA WELFARE SOCIETY (SWS) is a Non-government; Non Profit Making
                            Organization got registered under Society Registration Act 21, of 1860 in the year
                            2019 under Jharkhand. Since its inception organization striving hard for holistic
                            development of marginalized as well as excluded group of society includes Schedule
                            Cast, Schedule Tribe, Women, Youth, Children, Minorities and Disabled through its
                            various programmes includes Community Based Organisation (CBOs) Development
                            Livelihood promotion (Farm & Allied sector, Non-Farm sectors) Natural Resources
                            Management, Water and Sanitation Development, Capacity building and Training
                            programmes.
                        </p>
                        <p style={{ color: 'black', fontSize: 15, marginTop: 10 }}>
                            2. The SUHANA WELFARE SOCIETY (SWS) working in rural development for the past
                            three year.The Organisation initiated its mission with an objective of Social-economic
                            development of disadvantages and downtrodden people especially marginalized
                            women through existing skill up gradation and by supplementing their income
                            generation activities.
                        </p>
                        <p style={{ color: 'black', fontSize: 15, marginTop: 10 }}>
                            3. SUHANA WELFARE SOCIETY(SWS) program initially focused on skill up gradation in
                            Education sectors, Skill Sectors & Handicraft Activities. Adoption of a holistic
                            approach has necessitated addressing social, economic and environmental issues.
                            The organisation program’s strength and success lie in the integration of these issues
                            and the strategy to design programme at the grass root with the people in the
                            villages has people’s participation. Today SWS efforts have reached in three districts
                            of Jharkhand .The organisation has also providing support to them.
                        </p>
                    </div>
                    <div className="child2">

                    </div>
                </div>
            </div>
            <div style={{ padding: 24 }}>
                <HomeComp />
            </div>

            <div>
                <HomeCompCarosal slides={HomeCompCarosalData} />
            </div>

        </>
    )
}

export default Home