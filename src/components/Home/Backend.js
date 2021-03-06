import React from 'react';
import { Row, Col } from 'reactstrap';
import Heading from './repeats/Heading';
import Paragraph from './repeats/Paragraph';

const rowStyles = {
    backgroundImage: `url("../assets/img/backg.png")`,
    height: '473px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

const Backend = () => {
    return (
        <Row style={{...rowStyles}}>
            <Col className="p-4 offset-lg-6 offset-md-6" xs="12" sm="12" md="12" lg="12" xl="6">
                    <Heading className="animated pulse" bcolor="#004191">Backend Technologies</Heading>
                    <p className="para animated pulse">
                        Back-end is the technology that lets your website to do far more than look pretty. With sound back-end logic, the possibilities are endless. You can build an eCommerce website, or add a virtual assistant, perhaps even show your clients the weather in different parts of the world. 
                        Back-end can take you as far as your capacity to imagine.
                    </p>
            </Col>
        </Row>
    )
}

export default Backend;
