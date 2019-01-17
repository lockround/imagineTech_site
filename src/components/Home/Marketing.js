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

const Marketing = () => {
    return (
        <Row style={{...rowStyles}}>
            <Col className="p-4 offset-lg-6 offset-md-6" xs="12" sm="12" md="12" lg="12" xl="6">
                <Heading className="animated pulse" bcolor="#004191">In mauris ipsum</Heading>
                <p className="para animated pulse">
                    Proin congue blandit nibh, nec congue tellus tempor sed. Cras ultrices vitae magna nec mattis. Praesent ex sapien, pretium non orci eget, molestie vehicula erat. Pellentesque rutrum eros eget scelerisque faucibus. Mauris id eleifend est, sit amet dapibus sem. Aenean commodo, elit ac ultrices gravida, velit est luctus metus, quis euismod dui tortor eu diam. Donec interdum nulla a est posuere dignissim. Nulla in massa eu massa egestas vehicula. Curabitur interdum efficitur libero, eu blandit sapien efficitur id. Mauris eget dignissim dolor. Aenean auctor egestas urna volutpat vulputate.</p>
            </Col>
            
        </Row>
    )
}

export default Marketing;
