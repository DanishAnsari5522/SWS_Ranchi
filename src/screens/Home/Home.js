import Carousel from 'react-bootstrap/Carousel';
import '../../css/Home.css'
import two from '../../assets/two1.png'
import theme from '../../config/theme';

function Home() {
    return (
        <>
            <Carousel variant="dark">
                <Carousel.Item className='ds1' style={{ backgroundColor: theme.colors.background }}>
                    <div className='ds'>
                        <div className="body">
                            <div className="second-div">
                                <img src={two} className="slider-image" />
                            </div>
                            <div className="first-div">
                                <h1 className='unlimited'>Welcome to Helo on her hair</h1><br />
                            </div>

                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='ds1' style={{ backgroundColor: theme.colors.background }}>
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
                <Carousel.Item className='ds1' style={{ backgroundColor: theme.colors.background }}>
                    <div className='ds'>
                        <div className="body">
                            <div className="second-div">
                                <img src={two} className="slider-image" />
                            </div>
                            <div className="first-div">
                                <h1 className='unlimited'>Helo on her hair new offer announced soon</h1><br />
                            </div>

                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>

        </>
    )
}

export default Home