import React from 'react';
import { Container, Row, Col } from 'reactstrap';

class About extends React.Component {
    state = {
        values:[]
    }
    componentDidMount(){
        this.setState({
            values:[
                "Make a lasting difference - Your work is your legacy to the world. Therefore only do great work.",
                "There’s no substitute for transparency - Honesty is the one true key to lasting trust, trust is the foundation of all great alliances.",
                "Speak your mind - Say what you mean, mean what you say.",
                "Be the expert -  Specialization is the sign of the master, for it can only be achieved through focused, and diligent training.",
                "Be unstoppable - Let fear tremble before your resolve.",
                "Innovation is the antidote to stagnation."
                ]
        })
    }
    render() {
        return (
            <div style={{backgroundColor:'#f4f4f4',height:'500px'}}>
            
                <Container>
                    <h1 className="text-dark pt-3 border-bottom" style={{fontFamily:'Lato',fontWeight:'100'}}>About</h1>
                </Container>
            
            <div className="text-dark">
                <Container>
                    <Row>
                        <Col>
                            <h4>Mission</h4>
                            <p>To help businesses thrive in an ever-evolving competitive market, through dynamic cutting edge technologies, and strategies, at affordable rates.</p>
                            <h4>Vision</h4>
                            <p>To become a self sustaining organization that provides solutions to the world's biggest  problems, through engineering and advanced technologies.</p>
                            <Row>
                                <img src="//logo.clearbit.com/reactjstutorial.net?size=80&greyscale=true" class="rounded float-left" alt="ReactJS"/>
                                <img src="//logo.clearbit.com/nodejs.org?size=80&greyscale=true" class="rounded float-right" alt="NodeJS"/>
                            </Row>
                        </Col>
                        <Col>
                            <h3>Values</h3>
                            <ul>
                                
                                {this.state.values.map(value => {
                                    return <li>{value}</li>
                                })}
                            </ul>
                        </Col>
                    </Row>
                    
                </Container>
            </div>
            </div>
        )
    }
}

export default About;
