import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Two from '../../assets/homecomp1.jpeg';
import '../../css/Home/HomeCompCard.css';
import HomeCompCarosal from './HomeCompCarosal';
import { useHistory } from 'react-router-dom'

function HomeCompCard() {
    let history = useHistory();
    return (
        <>
            <Row xs={1} md={3} className="g-4">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card className='forcard'>
                            <Card.Img variant="top" src={Two} width={300} height={300} className='imghover' />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <div className='viewMoreCards' onClick={() => history.push('/gallery')}>View more</div>

            <HomeCompCarosal />

        </>
    );
}

export default HomeCompCard;