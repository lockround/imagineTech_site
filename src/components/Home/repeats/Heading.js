import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1 `
color:${props => props.color?props.color:'#004191'};
border-bottom:${props => props.bcolor?`2px solid ${props.bcolor}`:"none"};
font-family: 'Roboto';
font-size: 38px;
line-height: 50px;
font-weight:300;
width:${props=> props.fullwidth?"100%":"500px"};
padding-bottom:5px;
`

export default Heading;
