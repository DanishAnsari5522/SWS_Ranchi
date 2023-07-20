import React from "react";
import '../../css/Gallery/Gallery.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import cloud from '../../assets/homecomp1.jpeg';


export function GalleryImage() {
    return (
        <div>
            <div className="galleryimg">
                <Row xs={1} md={4} className="g-3 w-200">
                    {Array.from({ length: 10 }).map((_, idx) => (
                        <Col key={idx}>
                            <Card className='forgallerycard'>
                                <Card.Img variant="top" src={cloud} width={400} height={350} className='forgallerycard' />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}


