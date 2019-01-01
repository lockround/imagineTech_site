import React from 'react';
import {Container,Row,Col} from 'reactstrap';

const Footer = () => {
    return(
        <Container>
            <Row>
                <Col lg="12" className="mt-3 mb-3">
                    <h4 className="text-center">Have a great idea and need our help?</h4>
                    <h2 className="text-center">Contact today</h2>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;