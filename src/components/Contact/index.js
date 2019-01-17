import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import ContactForm from './Form';
import Heading from '../Home/repeats/Heading';

class ContactContainer extends Component {

    state = {
        local: {}
    }

    handleSubmit = e => {
        const { local } = this.state;
        const { input_one, input_two, input_three } = e.target;
        e.preventDefault();
        input_one.value = "";
        input_two.value = "";
        input_three.value = "";
        console.log(local)
    }

    handleChange = e => {
        const { local } = this.state;
        const { name, value } = e.target;
        this.setState({
            local: { ...local, [name]: value }
        })
    }

    render() {
        return (
            <div style={{backgroundColor:'#f4f4f4',padding:'1em',color:'black'}}>
            <Container>
                <Row>
                
                    <Col className="mt-4 single-shadowed" lg="6" style={{padding:'2em',backgroundColor:'#3398ff'}}>
                        <h3 style={{borderBottom:'1px dashed #ccc',paddingBottom:'10px',fontFamily:'Lato'}}>Send us your query</h3>
                        <ContactForm submit={this.handleSubmit} change={this.handleChange} />
                    </Col>
                    <Col className="mt-4 offset-lg-1" lg="5">
                        <Heading color="#3398ff">Contact Us</Heading>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi posuere orci vitae condimentum malesuada.!</p>
                
                    <div class="bd-example">
                      <address>
                        <strong>XXXXX, Inc.</strong><br/>
                        XXXX XXXX XXX<br/>
                        XXXXXX, XX 87686<br/>
                        <abbr title="Phone">P:</abbr> (XXX) XXX-XXXX
                      </address>
                    
                      <address>
                        <strong>Mail at:</strong><br/>
                        xxxxx@xxxxxxx.com
                      </address>
                    </div>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}

export default ContactContainer;
