
/* eslint-disable react/no-direct-mutation-state */

import React, { Component } from 'react';
// import { Navbar, Nav, NavItem } from 'react-bootstrap';
// To use routing functionalities
// import { Link } from 'react-router-dom';
import '../index.css';

import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

class Header extends Component {
    render() {
        return (
            <div>
                <Wrapper>
                    <nav class="navbar navbar-default">
                        <div class="container-fluid">
                            <div class="navbar-header">
                                <Title>Simple Employees Manager</Title>
                            </div>
                            <ul class="nav navbar-nav">
                                <li class="active"><a href="/">Home</a></li>
                                <li ><a href="/addemployee">Add New Employee</a></li>
                                <li ><a href="/list">List Employee</a></li>
                            </ul>
                        </div>
                    </nav>
                </Wrapper>
            </div>
        );
    }
}
export default Header;
