import React from 'react';
import { Row, Col } from 'reactstrap';

const rowStyles = {
    backgroundImage: `url("../assets/img/backg.png")`,
    height: '473px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

const Main = () => {
    return (
        <Row style={{...rowStyles}}>
            {/*<Col className="d-flex align-items-center flex-column justify-content-center" xs="12" sm="12" md="12" lg="12" xl="12">
                <h1 className="text-secondary">Imagine.Believe.Create</h1>
            </Col>*/}
            <Col className="p-4 offset-md-6 offset-lg-6" lg="6">
            <h1 className="text-center" style={{color:'blue', fontFamily:'Lato',fontWeight:'100'}}>Imagine.Believe.Create</h1>
            <p style={{color:'blue',width:'50%'}}>To help businesses thrive in an ever-evolving competitive market, through dynamic cutting edge technologies, and strategies, at affordable rates.</p>
            <button style={{background:'transparent',border:'1px solid blue',borderRadius:'10px'}}>Get a quote</button>
            </Col>
        </Row>
    )
}

export default Main;
