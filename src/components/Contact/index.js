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

const Contact = () => {
    return (
        <Row style={{...rowStyles}}>
            <Col className="p-4 offset-lg-6 offset-md-6" xs="12" sm="12" md="12" lg="12" xl="6">
                <Heading className="animated pulse" bcolor="#004191">Contact Us</Heading>
                {/*<p>Our team is always on the lookout for new partnership opportunities. Whether you want to talk web design, react, or marketing, drop us a line, we would love to hear from you!</p>*/}
                <p className="para">Need to get in touch with us? Please feel free to use any of our fancy interstellar communications listed below and let us know how we can help you.</p>
                <p className="para">Phone: (908) 546-0561</p>
                <p className="para">Email: info@imaginetech.net</p>
                <p className="para">Morse Code: -_--</p>
                    
                </Col>
            
        </Row>
    )
}

export default Contact;

