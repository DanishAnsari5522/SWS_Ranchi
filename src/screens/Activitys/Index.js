import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import theme from "../../config/theme"
import '../../css/Activitys/Activitys.css'
import { Button } from 'react-bootstrap';
import one from '../../assets/homecomp1.jpeg';
import { useHistory } from 'react-router-dom';
const data = [
    {
        title: "AWARNESS PROGRAMME", about: `With the objective of gender mainstreaming SUHANA WELFARE SOCIETY initiated an
    awareness campaign for role of women in nation building and for building a better
    society. Further rights bestowed upon women were also included in the campaign.
    The program was improvement with the aim to secure participation of women and
    for improvement of the lives of women based on principles of equity. The program
    continued under the ambit of similar activity initiated by the organization during the
    previous year. During the current year door-to-door campaigning and placement was
    taken up by the organization during the current year.` },
    {
        title: "JUTE CRAFT TRAINING", about: `A Jute Craft Training wasorganized by the Organization on Jute Craft at Ranchi Slum
    Area Cluster. The program was assisted by the contribution of secretary and other
    Organization. The program was for duration of 15 days in which 20artisans were
    involved during the training. They all get basic training on Jute Craft i.e cutting
    stitching and making finished products of Jute. This training was introduced for the
    artisans covered under the cluster development program. 20 artisans were directly
    benefits by the program.` },
    {
        title: "BAMBOO CRAFT TRAINING", about: `A Bamboo Craft Training wasorganized by the Organization on Bamboo Craft at
    Garhwa Slum Area Cluster (Chiniya). The program was assisted by the contribution
    of secretary and other Organization. The program was for duration of 20 days in
    which 20artisans were involved during the training. They all get basic training on
    Bamboo Craft i.e bamboo cutting designing and making products of Bamboo. This
    training was introduced for the artisans covered under the cluster development
    program. 20 artisans were directly benefits by the program.
    ` },
    {
        title: 'TRAINING ON BASIC EDUCATION', about: `A Basic Education Training Program wasorganized by the Organization.Thisprogram
    was assisted by the contribution of secretary and other Organization. The program
    was for duration of 2-2 days in Ranchi, Garhwa&Palamu in this program organization
    walk in the backward area and talk to them and program arranged and provided
    basic training about the education and benefit of education and also told to them that
    by our team that why education is important for the children as well as to each and
    every person.`},
    {
        title: "GROUP ATRENGHTENING PROGRAMME", about: `The intervention for strengthening of the 3 SHGs of artisans continued on the lines
     offirst year during the second year as well. Meetings of the groups were facilitated byvolunteers 
     of the organization. Further the SHGs were assisted in maintaining accounts and other documents related to them ` },
    {
        title: "WELFARE SCHEMES FOR ARTISANS", about: `SUHANA WELFARE SOCIETY initiated linkage of the artisans with various welfare
     schemes launched by the Development Commissioner (Handicraft) and other agencies. The welfare 
     schemes include issuance of artisan’s identity card, issuance of artisan’s credit card (for credit linkage),
      and insurance of artisans.` },
]
function Activitys() {
    const history = useHistory();
    return (
        <>
            <div className="home-gallery" style={{ backgroundColor: theme.colors.background1 }}>
                <div>
                    <h5 style={{ color: theme.colors.textColor }}>Home - Activitys</h5>
                </div>
                <div>
                    <h1 className="fifth">
                        <span className="seven">Our</span>  <span className="six">Activitys</span>
                    </h1>
                </div>
            </div>
            <div className='ActivityBlock'>
                <Row xs={1} md={3} className="g-4">
                    {Array.from({ length: 5 }).map((_, idx) => (
                        <Col key={idx}>
                            <Card>
                                <Card.Img variant="top" src={one} />
                                <Card.Body className='forcard1'>
                                    <Card.Title style={{ color: '#9d1faa' }}>{data[idx].title}</Card.Title>
                                    <Card.Text style={{ fontSize: 14 }}>
                                        {data[idx].about}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className='footerCard'>
                                    <small className="text-muted">Start:- 1-jan-2022</small>
                                    <button className='viewdetailactivity' onClick={() => history.push({ pathname: '/ActivityInDetail', name: data[idx].title, detail: data[idx].about })}>View Detail</button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            {/* <div>
                <CardGroup>
                    <Row xs={1} md={3} className="g-0">
                        {Array.from({ length: 5 }).map((_, idx) => (
                            <Card>
                                <Card.Img variant="top" src={one} />
                                <Card.Body >
                                    <Card.Title style={{ color: '#9d1faa' }}>{data[idx].title}</Card.Title>
                                    <Card.Text>
                                        {data[idx].about}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className='d-flex align-items-center justify-content-centers flex-row"'>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                    <button className='viewdetailactivity '>View Detail</button>
                                </Card.Footer>
                            </Card>
                        ))}
                    </Row>
                </CardGroup>
            </div> */}

        </>
    )
}

export default Activitys