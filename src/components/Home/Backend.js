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
                    <Heading className="animated pulse" bcolor="#004191">Pellentesque habitant</Heading>
                    <p className="para animated pulse">
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla neque urna, vel bibendum ex mattis non. Curabitur a vestibulum lectus, vitae venenatis dolor. Donec mattis, magna eget pharetra porttitor, tortor risus dictum erat, sed condimentum augue ex efficitur tellus. Nulla eu porttitor tellus. Sed mi nunc, tincidunt at risus ac, lobortis venenatis justo. Duis maximus mauris vitae enim condimentum condimentum. Aenean maximus leo eu urna pharetra, eget rhoncus lacus varius. Nam sed volutpat augue, ut ornare urna. Integer pulvinar convallis consequat. Vestibulum porta interdum dolor, non bibendum orci condimentum non. Maecenas nec nibh nulla. Donec nec lorem egestas, venenatis mi eget, luctus orci. Quisque placerat, ligula eget ultrices fringilla, orci eros egestas diam.
                    </p>
            </Col>
        </Row>
    )
}

export default Backend;
