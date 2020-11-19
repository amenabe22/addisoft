import React, { Component } from 'react';
import styled from 'styled-components';


const MainTxt = styled.h1`
font-size: 1.5em;
text-align: center;
padding-top: 100px;
`
class Home extends Component {
    render() {
        return (
            <div>
                <MainTxt>Simple Crud Employees Management</MainTxt>
            </div>
        );
    }
}

export default Home;
