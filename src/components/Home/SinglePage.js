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

const SinglePage = () => {
    return (
        <Row style={{...rowStyles}}>
            <Col className="p-4 offset-md-6 offset-lg-6" xs="12" sm="12" md="12" lg="12" xl="6">
                    <Heading className="animated pulse" bcolor="#004191"> Nunc auctor tempor efficitur</Heading>
                    <p className="para animated pulse">
                        Vestibulum venenatis lorem quis quam vehicula tempus. Praesent viverra et libero vitae interdum. Sed in erat et leo cursus efficitur pharetra eu metus. Praesent finibus varius turpis sit amet laoreet. Nulla quis dapibus quam. Duis sed neque sed metus malesuada accumsan. Sed tincidunt aliquam nulla vehicula congue. Ut eu lorem sagittis, vestibulum est vitae, aliquam mauris. Proin quis rhoncus turpis, vitae tempor massa. Curabitur accumsan rhoncus mattis. Aenean a porttitor elit, ut volutpat nisi. Vivamus vel rhoncus nisl. Vivamus porta ligula a turpis tempor blandit. Duis scelerisque luctus porttitor. Nulla facilisis tellus sit amet sagittis volutpat. Nullam sed cursus ligula, eget scelerisque lacus.
                    </p>
            </Col>
        </Row>
    )
}

export default SinglePage;
