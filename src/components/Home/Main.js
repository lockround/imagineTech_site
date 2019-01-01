import React from 'react';
import { Row, Col } from 'reactstrap';

const rowStyles = {
    backgroundImage: `url("../assets/img/backhome.png")`,
    height: '473px',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    fontFamily:'Roboto',
    fontWeight:'300',
    borderBottom:'3px solid #3398ff'
}

const Main = () => {
    return (
        <Row style={{...rowStyles}}>
            <Col className="mt-3">
                <h1 className="text-secondary text-center"><span style={{color:'#004199'}}>Imagine. </span><span style={{color:'#1a6ccc'}}>Believe. </span><span style={{color:'#3398ff'}}>Create.</span></h1>
            </Col>
        </Row>
    )
}

export default Main;
