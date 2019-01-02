import React, { Component } from 'react';
import {Row,Col} from 'reactstrap';
import TeamList from './List';
import Heading from '../Home/repeats/Heading';

const rowStyles = {
    backgroundImage: `url("../assets/team/jazz.jpeg")`,
    height: '473px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color:'black'
}

class TeamContainer extends Component {

    state = {
        members: [
            { id: 1, name: "Jahaziel Vazquez", desc:"Jahaziel is the CEO of ImagineTech. He likes walks on the beach and ice cold milks. He considers himself hummus connisour. His favorite band is captain sparky and hurry-ups.",role: "CEO",img:"https://randomuser.me/api/portraits/thumb/men/65.jpg" }
        ]
    }

    render() {
        const { members } = this.state;
        return (
            <Row style={{...rowStyles}}>
            <Col className="p-4 offset-lg-6 offset-md-6" xs="12" sm="12" md="12" lg="12" xl="6">
                <Heading bcolor="#004191" className="pb-3 mb-3">Our Team</Heading>
            
            
                <TeamList members={members}/>
            
            </Col>
            
        </Row>
            
        );
    }
    
    
}

export default TeamContainer;