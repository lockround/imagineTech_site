import React from 'react';
import { Container, Row, Col } from 'reactstrap';

class About extends React.Component {
    render() {
        return (
            <div style={{backgroundColor:'#f4f4f4'}}>
            
                <Container>
                    <h1 className="text-dark pt-3 border-bottom" style={{fontFamily:'Lato',fontWeight:'100'}}>About Us</h1>
                </Container>
            
            <div className="text-dark">
                <Container>
                    <Row>
                        <Col>
                            <h3>Mission</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et diam non nulla tristique vestibulum faucibus quis risus. Proin id quam turpis. Cras dignissim efficitur mi, vel condimentum orci tempus eu. Curabitur eget feugiat lorem, eu gravida magna. Nunc varius lectus id massa sollicitudin sagittis. Quisque et mi dignissim, tristique justo non, cursus turpis. Mauris efficitur neque et magna blandit condimentum.</p>

                            <p>Nulla facilisi. Integer volutpat lorem sit amet posuere egestas. Curabitur et arcu quam. Quisque ex velit, vehicula vel commodo vitae, volutpat in arcu. Aenean eget felis sem. Vestibulum interdum libero sed enim elementum tempus. Nullam feugiat ex vitae quam condimentum, at rutrum nibh accumsan. Nunc pellentesque eros ante, quis semper metus volutpat vel. Morbi ultricies lectus at sodales gravida. Sed lacus nunc, lacinia vel sem in, tincidunt sagittis leo. Suspendisse fermentum bibendum lorem et sollicitudin. Nulla varius ante vel ante venenatis luctus. Nulla et lacus lacinia, vulputate nisl eu, rhoncus quam. Etiam sit amet condimentum elit, quis pharetra nunc.</p>
                        </Col>
                        <Col>
                            <h3>Vision</h3>
                            <p>Mauris in ultricies est. In a aliquam lacus. Nullam vehicula tortor vitae elit tincidunt ullamcorper. Quisque sit amet metus consectetur, lobortis purus nec, maximus nisi. Mauris in vehicula eros. Quisque sed nisl tempor, dictum ante eget, consectetur mi. Nulla quis ullamcorper urna. Nulla magna nisi, ultrices vel dui eu, vulputate rutrum turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vitae nibh quis neque efficitur pulvinar. Proin cursus arcu turpis, vitae sodales sapien vulputate auctor. Ut bibendum velit eu leo interdum, nec tincidunt lorem accumsan. Vivamus rhoncus facilisis diam vel iaculis.</p>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla neque urna, vel bibendum ex mattis non. Curabitur a vestibulum lectus, vitae venenatis dolor. Donec mattis, magna eget pharetra porttitor, tortor risus dictum erat, sed condimentum augue ex efficitur tellus. Nulla eu porttitor tellus. Sed mi nunc, tincidunt at risus ac, lobortis venenatis justo. Duis maximus mauris vitae enim condimentum condimentum. Aenean maximus leo eu urna pharetra, eget rhoncus lacus varius. Nam sed volutpat augue, ut ornare urna. Integer pulvinar convallis consequat. Vestibulum porta interdum dolor, non bibendum orci condimentum non. Maecenas nec nibh nulla. Donec nec lorem egestas, venenatis mi eget, luctus orci. Quisque placerat, ligula eget ultrices fringilla, orci eros egestas diam, rhoncus porta leo turpis condimentum ligula. Pellentesque ac ligula suscipit est ornare ultricies eu posuere purus.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            </div>
        )
    }
}

export default About;
