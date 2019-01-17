import React from 'react';
import {Row,Col} from 'reactstrap';
import styled from 'styled-components';

const headingStyles = {
    borderBottom:'3px solid blue',
    fontFamily:'Lato'
}


const Backend = () => {
    return (
        <div className="shadow p-4 mt-3">
        
        <Row>
            <div className="d-flex">
                <Col lg="12">
                    <h1 className="text-shadowed__big">Pellentesque congue erat libero</h1>
                    <p>Nam in velit commodo, commodo nisi vel.</p>
                </Col>
                
                
            </div>
            
            
        </Row>
        
        <Row>
                <div className="d-flex">
                    <Col lg="4">
                        
                        <h3 className="text-shadowed__small">XXXXX</h3>
                        <div className="d-flex align-items-center">
                            <img src="https://img.icons8.com/office/80/000000/delete.png" width="50px" className="mr-1"/>
                            <img src="https://img.icons8.com/office/80/000000/download-2.png" width="50px" className="mr-1"/>
                            <img src="https://img.icons8.com/office/80/000000/folder-invoices.png" width="50px"/>
                        </div>
                        <p>Aenean ac aliquet sapien, a faucibus nisi. Ut eleifend lectus et lacus egestas bibendum. Etiam pretium, libero id faucibus tempus, metus arcu tincidunt dolor, id vulputate magna sem at mauris. In ut tincidunt quam. Mauris quis sem arcu. Nulla laoreet nisl tempus ipsum tincidunt, auctor ultricies lectus auctor. Duis eget purus non augue dapibus efficitur in eu turpis. Nam convallis ex neque, id facilisis dui varius vitae. Duis sodales ex libero, in venenatis enim lobortis sed.</p>
                    </Col>
                    <Col lg="4">
                        
                        <h3 className="text-shadowed__small">YYYYYYY</h3>
                        <div className="d-flex align-items-center">
                            <img src="https://img.icons8.com/office/80/000000/delete.png" width="50px" className="mr-1"/>
                            <img src="https://img.icons8.com/office/80/000000/download-2.png" width="50px" className="mr-1"/>
                            <img src="https://img.icons8.com/office/80/000000/folder-invoices.png" width="50px"/>
                        </div>
                        <p>Vivamus diam tellus, tempus a facilisis id, rutrum in libero. Nam in velit commodo, commodo nisi vel, maximus elit. Aenean tincidunt est ac dolor sodales, sed pellentesque risus pellentesque. Proin convallis velit magna, vel finibus erat venenatis sit amet. In tempor maximus tristique. Donec erat eros, consequat a consequat ut, commodo nec dolor. Cras ac lacus a sem suscipit aliquet id id augue. Donec eu tellus nec urna pharetra maximus. In hac habitasse platea dictumst. Morbi vulputate varius est, sit amet iaculis enim porttitor ut. In laoreet hendrerit nunc ut placerat. In non molestie neque.</p>
                    </Col>
                    <Col lg="4">
                        
                        <h3 className="text-shadowed__small">ZZZZZZ</h3>
                        <div className="d-flex align-items-center">
                            <img src="https://img.icons8.com/office/80/000000/delete.png" width="50px" className="mr-1"/>
                            <img src="https://img.icons8.com/office/80/000000/download-2.png" width="50px" className="mr-1"/>
                            <img src="https://img.icons8.com/office/80/000000/folder-invoices.png" width="50px"/>
                        </div>
                        <p>Aenean ac aliquet sapien, a faucibus nisi. Ut eleifend lectus et lacus egestas bibendum. Etiam pretium, libero id faucibus tempus, metus arcu tincidunt dolor, id vulputate magna sem at mauris. In ut tincidunt quam. Mauris quis sem arcu. Nulla laoreet nisl tempus ipsum tincidunt, auctor ultricies lectus auctor. Duis eget purus non augue dapibus efficitur in eu turpis. Nam convallis ex neque, id facilisis dui varius vitae. Duis sodales ex libero, in venenatis enim lobortis sed.</p>
                    </Col>
                    </div>
                </Row>
        </div>
    )
}

export default Backend;