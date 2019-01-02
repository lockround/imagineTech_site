import React from 'react';
import { Row, Col } from 'reactstrap';
import Heading from '../Home/repeats/Heading';
import Paragraph from '../Home/repeats/Paragraph';

const rowStyles = {
    backgroundImage: `url("../assets/img/backg.png")`,
    height: '473px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color:'black',
    borderBottom:'3px solid #3398ff'
}

const About = () => {
    return (
        <Row style={{...rowStyles}}>
            <Col className="p-4 offset-lg-6 offset-md-6" xs="12" sm="12" md="12" lg="12" xl="6">
                <Heading className="animated pulse" bcolor="#004191">About Us</Heading>
                <h3>Mission</h3>
                <p className="para">To help businesses thrive in an ever-evolving competitive market, through dynamic cutting edge technologies, and strategies, at affordable rates.</p>
                <h3>Vision</h3>
                <p className="para">To become a self sustaining organization that provides solutions to the world's biggest  problems, through engineering and advanced technologies.</p>
            </Col>
            
        </Row>
    )
}

export default About;
