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

const UI = () => {
    return (
        <Row style={{...rowStyles}}>
            <Col className="p-4 offset-md-6 offset-lg-6" xs="12" sm="12" md="12" lg="12" xl="6">
                    <Heading className="animated pulse" bcolor="#004191">Vivamus laoreet volutpat</Heading>
                    <p className="para animated pulse">
                        Sed euismod felis at mauris tempus, quis imperdiet nibh consequat. Donec risus purus, sodales non rhoncus non, imperdiet ut diam. Integer semper consequat libero, ac scelerisque magna tincidunt vitae. Nam fringilla dolor in consectetur commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit malesuada libero. Nulla sit amet erat eleifend, iaculis elit dapibus, lacinia tellus. Suspendisse gravida dignissim mauris, at consequat magna tempor fringilla. Cras sit amet leo pharetra, porttitor lacus ut, faucibus eros. Nullam dui nibh, malesuada vel ipsum id, pharetra mollis odio. Praesent vitae velit vitae massa maximus hendrerit. Phasellus maximus tincidunt enim, ut varius nibh accumsan eu. Cras ut pharetra felis.
                    </p>
            </Col>
        </Row>
    )
}

export default UI;
//d-flex align-items-center flex-column justify-content-center 