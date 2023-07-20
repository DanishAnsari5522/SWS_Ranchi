import one from '../../assets/homecomp1.jpeg';
import '../../css/Home/HomeComp.css';
import HomeCompCard from './HomeCompCard';

function HomeComp() {
    return (
        <>
            {/* <div className='homecomp'>
                <div style={{ width: '45%',alignContent:'flex-start' }}>
                    <p>Citizens Foundation is a non–profit organization which has evolved;from;its humble beginnings in Jharkhand in 1997 and has so far registered its presence with pioneering work in the development sector;in&;over 10;states;of India as a national level organization. As a signatory of the Sustainable Development Goals (SDGs), CF has worked towards its vision of ‘Making People Self Reliant’ over the past two decades.Over the last 20 years, we have evolved the expertise in health, Sanitation, Natural Resource Management, Livelihood Promotion, and Protection. We have delivered advocacy and techno–managerial support to the rural communities a</p>
                </div>
                <div style={{ width: '45%' }}>
                    <img src={one} width={500} />
                </div>
            </div> */}
            <div>
                <div className="quotes" style={{marginBottom:20}}>
                    <h1 className="fontQuotes">GLIMPSES OF <span className="six">ORGANIZATION PROGRAM</span></h1>
                </div>
                <HomeCompCard />
            </div>
        </>
    )
}

export default HomeComp